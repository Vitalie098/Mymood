import {
  Canvas,
  Skia,
  useFont,
  useImage,
  useValue,
  Group,
  RoundedRect,
  rrect,
  rect
} from "@shopify/react-native-skia"
import React, { useMemo, useState, useEffect, useRef } from "react"
import { Dimensions, Pressable, View, Text, Alert, TextInput} from "react-native"

import { HelloSticker, HelloStickerDimensions } from "./HelloSticker"
import { LocationSticker, LocationStickerDimensions } from "./LocationSticker"
import { GestureHandler } from "./GestureHandler"
import { Picture, PictureDimensions } from "./Picture"
import { useNavigation, useRoute } from "@react-navigation/native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useMutation } from '@apollo/client'
import { createFleet } from './queries'
import { CreateFleetMutation, CreateFleetMutationVariables, CreateFleetInput} from '../../API'
import { useAuthContext } from "../../contexts/AuthContext"
import { Storage } from "aws-amplify"
import {v4 as uuidv4} from 'uuid'
import Feather from 'react-native-vector-icons/Feather'

const { width, height } = Dimensions.get("window")

const zurich = require("../../assets/images/zurich.jpg")
const aveny = require("../../assets/images/aveny.ttf")

export const PostStoryScreen = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [text, setText] = useState('')
  const [addedTexts, setAddedTexts] = useState([])
  const navigation = useNavigation()
  const {userId} = useAuthContext()
  const route = useRoute()
  const {image, images, video} = route.params

  const [doCreateFleet] = useMutation<CreateFleetMutation, CreateFleetMutationVariables>(createFleet)

  const pictureMatrix = useValue(Skia.Matrix())
  const helloMatrix = useValue(Skia.Matrix())
  const locationMatrix = useValue(Skia.Matrix())
  const textMatrix1 = useValue(Skia.Matrix())

  const image1 = useImage(image)
  const font = useFont(aveny, 56)
  const inputRef = useRef()

  const addText = () => {
    if(text === "") {
      setShowInput(false)
      setText("")  
      return
    }

    const data = {
      textMatrix: textMatrix1,
      text: text
    }

    setAddedTexts(data) 
    setShowInput(false)
    setText("") 
  }

  const submit = async () => {
    if(isSubmitting) return
    setIsSubmitting(true)

    const input: CreateFleetInput = {
        type: "Fleet",
        image: undefined,
        userID: userId,
        text: undefined,
        viewers: []
    }

    if (image) {
      const positions = pictureMatrix.current.get()

      input.image = {
        imageKey: await uploadMedia(image),
        x: positions[2],
        y: positions[5],
        rotate: positions[3] > 0 ? parseFloat(positions[3].toString().split(".")[1].substring(0, 10) + "." + positions[3].toString().split(".")[1].substring(10)) : 0
      }
    }

    if(Object.keys(addedTexts).length !== 0) {
        const positions = addedTexts.textMatrix.current.get()

        input.text = {
          textValue: addedTexts.text,
          x: positions[2],
          y: positions[5],
          rotate: positions[3] > 0 ? parseFloat(positions[3].toString().split(".")[1].substring(0, 11) + "." + positions[3].toString().split(".")[1].substring(11)) : 0
        }
    }

    try {
      await doCreateFleet({variables: {input}})

      setIsSubmitting(false)

      navigation.popToTop()
      navigation.navigate('HomeStack')
    } catch (e) {
      Alert.alert('Error uploading the post', (e as Error).message)
      console.log((e as Error).message)
      setIsSubmitting(false)
    }
  }

    const uploadMedia = async (uri: string) => {
    try {
      const response = await fetch(uri)
      const blob = await response.blob()

      const uriParts = uri.split('.')
      const extension = uriParts[uriParts.length - 1]

      const s3Response = await Storage.put(`${uuidv4()}.${extension}`, blob)
      return s3Response.key
    } catch (e) {
      Alert.alert('Error uploading the file')
    }
  }

  if (!image || !font) {
    return null
  }

  return (
    <View style={{backgroundColor: "#000"}}>
      <Canvas style={{ width, height }} onTouch={(el) => {
        setShowInput(true)
        inputRef?.current?.focus()
        }}
      >
        <Picture matrix={pictureMatrix} image={image1} />
        {Object.keys(addedTexts).length !== 0 && (
          <LocationSticker font={font} matrix={addedTexts.textMatrix} text={addedTexts.text} />
        )}
      </Canvas>
 
      <GestureHandler matrix={pictureMatrix} dimensions={PictureDimensions} />
      <GestureHandler
        matrix={helloMatrix}
        dimensions={HelloStickerDimensions}
      />
      <GestureHandler
        matrix={locationMatrix}
        dimensions={LocationStickerDimensions}
      />
        {Object.keys(addedTexts).length !== 0 && (
          <GestureHandler
            matrix={addedTexts.textMatrix}
            dimensions={LocationStickerDimensions}
          />
        )}
        <View style={{alignContent: "flex-start", alignItems: "center", justifyContent: "center", position: "absolute", bottom: 50, right: 20}}>
          <TouchableOpacity style={{backgroundColor: "#000", padding: 10, borderRadius: 20}} onPress={() => submit()}>
              <Text style={{color: "#fff"}}>Post your story</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignContent: "flex-start", alignItems: "center", justifyContent: "center", position: "absolute", top: 40, left: 20}}>
          <TouchableOpacity style={{backgroundColor: "#000", padding: 5, borderRadius: 40}} onPress={() => navigation.popToTop()}>
             
          <Feather name="x" size={20} color={"#fff"}/>
          </TouchableOpacity>
        </View>

        {showInput && Object.keys(addedTexts).length === 0 && (
          <View style={{ justifyContent: "center", alignItems: "center",position: "absolute", bottom: 0, right: 0, top: 0, left: 0, backgroundColor: "rgba(0,0,0,.5)"}}>
            <Pressable onPress={() => addText()} style={{marginRight: 5, position: "absolute", top: 50, right: 20}}>
              <Feather name="check" size={30} color="#fff" />
            </Pressable>  
            <TextInput style={{width: "100%", height: 100, padding:20, textAlign: "center", color: "#fff", fontSize: 18}} onChangeText={setText} ref={inputRef}/>
          </View>
        )}
    </View>
  )
}