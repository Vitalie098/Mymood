import React, { createContext, useContext, useEffect} from "react"
import { useQuery } from '@apollo/client'
import { onCreateNotification, userNotifications } from "./queries"
import { ModelSortDirection, UserNotificationsQuery, UserNotificationsQueryVariables } from "../API"
import { useAuthContext } from './AuthContext'

const NotificationContext = createContext({
    newNotifications: 0
})

export const NotificationContextProvider = ({children}: {children: React.ReactNode}) => {
    const {userId} = useAuthContext()
    const {data, subscribeToMore} = useQuery<UserNotificationsQuery, UserNotificationsQueryVariables>(userNotifications, {variables: {userId}})

    const unreadNotifications = (data?.userNotifications?.items || []).filter(item => !item?._deleted && !item?.readAt)

    useEffect(() => {
        if(!subscribeToMore || !userId) return

        subscribeToMore({
            document: onCreateNotification,
            variables: {filter: {userId: {eq: userId}}},
            updateQuery: (prev, next) => {
                return {
                    ...prev,
                    userNotifications: {
                        ...prev?.userNotifications,
                        items: [
                        ...(prev?.userNotifications?.items || []),
                        next.subscriptionData.data.onCreateNotification,
                        ],
                    },
                }
            },
        })

    },[subscribeToMore, userId])

    return (
        <NotificationContext.Provider value={{newNotifications: unreadNotifications.length}}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationContext = () => useContext(NotificationContext)