import {Image} from "react-native"
import {
  Grayscale,
  Sepia,
  Tint,
  Saturate,
} from 'react-native-color-matrix-image-filters'
import FastImage from "react-native-fast-image"

export const applyFilter = (filter = "original", imageUri, customStyle, isFeedPost = false) => {
    switch(filter) {
      case "grayscale": 
        return (
          <Grayscale> 
            {isFeedPost ? (
              <FastImage source={{uri: imageUri}} style={customStyle} />
            ): (
              <Image source={{uri: imageUri}} style={customStyle}/> 
            )}
          </Grayscale>
        )
        break
      case "sepia": 
        return (
          <Sepia> 
            <Image source={{uri: imageUri}} style={customStyle}/> 
          </Sepia>
        )
        break
      case "tint": 
        return (
          <Tint> 
            <Image source={{uri: imageUri}} style={customStyle}/> 
          </Tint>
        )
        break
      case "saturate": 
        return (
          <Saturate> 
            <Image source={{uri: imageUri}} style={customStyle}/> 
          </Saturate>
        )
        break
      default: 
        return <Image source={{uri: imageUri}} style={customStyle}/>
    }
  }