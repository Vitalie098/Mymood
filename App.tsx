import 'react-native-gesture-handler'
import 'react-native-get-random-values'
import {Linking} from 'react-native'
import Navigation from './src/navigation'
import { Amplify } from 'aws-amplify'
import config from "./src/aws-exports"
import AuthContextProvider from './src/contexts/AuthContext'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Client from './src/apollo/Client'
import {MenuProvider} from 'react-native-popup-menu'
import relativeTime from 'dayjs/plugin/relativeTime'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { OverlayProvider } from 'stream-chat-react-native'
import * as dayjs from 'dayjs'
import { ChatContextProvider } from './src/contexts/ChatContext'
import { NotificationContextProvider } from './src/contexts/NotificationContext'
dayjs.extend(relativeTime)

Amplify.configure(config)

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <MenuProvider>
          <AuthContextProvider>
            <Client>
              <NotificationContextProvider>
                <Navigation />
              </NotificationContextProvider>
            </Client>
          </AuthContextProvider>
        </MenuProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export default App