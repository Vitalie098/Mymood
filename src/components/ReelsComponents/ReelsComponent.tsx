import React, {useState} from 'react'
import {View, Text, Dimensions} from 'react-native'
import {SwiperFlatList} from 'react-native-swiper-flatlist'
import SingleReel from './SingleReel'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const ReelsComponent = ({reels}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const {bottom} = useSafeAreaInsets()

  const handleChangeIndexValue = ({index}) => {
    setCurrentIndex(index)
  }

  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={reels}
      renderItem={({item, index}) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index}
    />
  )
}

export default ReelsComponent