import React, { Fragment, useRef, useState, useEffect, useMemo } from 'react'
import { Dimensions, View, Platform } from 'react-native'
import Modal from 'react-native-modalbox'

import StoryListItem from './StoryListItem'
import StoryCircleListView from './StoryCircleListView'
import { isNullOrWhitespace } from './helpers'
import AndroidCubeEffect from './AndroidCubeEffect'
import CubeNavigationHorizontal from './CubeNavigationHorizontal'
import { IUserStory, NextOrPrevious, StoryProps } from './interfaces'
import { Storage } from 'aws-amplify'
import { useAuthContext } from '../../contexts/AuthContext'
import { useMutation } from '@apollo/client'
import { UpdateFleetMutation, UpdateFleetMutationVariables, Fleet } from '../../API'
import { updateFleet } from './queries'


export const Story = ({
  onStart,
  onClose,
  swipeText,
  customSwipeUpComponent,
  customCloseComponent,
  setIsModalOpen, 
  isModalOpen,
  currentPage, 
  setCurrentPage,
  selectedData, setSelectedData
}: StoryProps) => {
  const [dataState, setDataState] = useState<IUserStory[]>([])
  const [isFirstRender, setIsFirstRender] = useState(true)
  const {setStoriesData} = useAuthContext()
  const cube = useRef<any>()

  // useEffect(() => {
  //   handleSeen()
  // }, [currentPage])

  // const handleSeen = () => {
  //   const seen = selectedData[currentPage]
  //   const seenIndex = dataState.indexOf(seen)
  //   if (seenIndex > 0) {
  //     if (!dataState[seenIndex]?.seen) {
  //       let tempData = dataState
  //       dataState[seenIndex] = {
  //         ...dataState[seenIndex],
  //         seen: true,
  //       }
  //       setDataState(tempData)
  //     }
  //   }
  // }

  const onStoryFinish = (state: NextOrPrevious) => {
    if (!isNullOrWhitespace(state)) {
      if (state == 'next') {
        const newPage = currentPage + 1
        if (newPage < selectedData.length) {
          setCurrentPage(newPage)
          cube?.current?.scrollTo(newPage)
        } else {
          setIsModalOpen(false)
          setCurrentPage(0)
          if (onClose) {
            onClose(selectedData[selectedData.length - 1])
          }
        }
      } else if (state == 'previous') {
        const newPage = currentPage - 1
        if (newPage < 0) {
          setIsModalOpen(false)
        } else {
          setCurrentPage(newPage)
          cube?.current?.scrollTo(newPage)
        }
      }
    }
  }

  const renderStoryList = () =>
    selectedData.map((x, i) => {
      return (
        <StoryListItem
          duration={10 * 1000}
          key={i}
          userID={x.user_id}
          profileName={x.user_name }
          profileImage={x?.user_image }
          stories={x.stories}
          isFirstRender={isFirstRender}
          setIsFirstRender={setIsFirstRender}
          currentPage={currentPage}
          onFinish={onStoryFinish}
          swipeText={swipeText}
          customSwipeUpComponent={customSwipeUpComponent}
          customCloseComponent={customCloseComponent}
          onClosePress={() => {
            setIsModalOpen(false)
            if (onClose) {
              onClose(x)
            }
          }}
          index={i}
        />
      )
    })


  const renderCube = () => {
    if (Platform.OS == 'ios') {
      return (
        <CubeNavigationHorizontal
          ref={cube}
          callBackAfterSwipe={(x: any) => {
            if (x != currentPage) {
              setCurrentPage(parseInt(x))
            }
          }}
        >
          {renderStoryList()}
        </CubeNavigationHorizontal>
      )
    } else {
      return (
        <AndroidCubeEffect
          ref={cube}
          callBackAfterSwipe={(x: any) => {
            if (x != currentPage) {
              setCurrentPage(parseInt(x))
            }
          }}
        >
          {renderStoryList()}
        </AndroidCubeEffect>
      )
    }
  }

  return (
    <>
      {/* <View style={{...style, borderBottomColor: "#dcdcdd", borderBottomWidth: 1, paddingBottom: 5}}>
        <StoryCircleListView
          handleStoryItemPress={_handleStoryItemPress}
          data={data}
          setToggleStatus={setToggleStatus}
          avatarSize={avatarSize}
          unPressedBorderColor={unPressedBorderColor}
          pressedBorderColor={pressedBorderColor}
          showText={showAvatarText}
          textStyle={avatarTextStyle}
        />
      </View> */}
      <Modal
        style={{
          flex: 1,
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
        }}
        isOpen={isModalOpen}
        onClosed={() => {
      //     const updateViewers = async () => {
      //        await Promise.all(
      //   storiesData.map(
      //     story =>
      //       story &&
      //       doUpdateFleet({
      //         variables: {
      //           input: {
      //             id: story.id,
      //             _version: story._version,
      //             viewers: story.viewers,
      //           },
      //         },
      //       }),
      //   ),
      // )
             // doUpdateFleet({variables: {input: {id: content[current].story_id.toString(), viewers: [...existViewers, userWhoSeen]}}})
          //}
           //updateViewers()
          setStoriesData([])
          setIsModalOpen(false)
        }}
        position="center"
        swipeToClose
        swipeArea={250}
        backButtonClose
        coverScreen={true}
      >
        {renderCube()}
      </Modal>
    </>
  )
}

export default Story

Story.defaultProps = {
  showAvatarText: true,
}














