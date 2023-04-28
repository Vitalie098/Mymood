// import {useEffect, useState, useRef} from 'react'
// import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
// import {Camera} from 'expo-camera'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import colors from '../../theme/colors'
// import {
//   CameraPictureOptions,
//   CameraRecordingOptions,
//   FlashMode,
// } from 'expo-camera/build/Camera.types'
// import {useNavigation} from '@react-navigation/native'
// import {CameraNavigationProp} from '../../types/navigation'
// import {launchImageLibrary} from 'react-native-image-picker'
// import {useSafeAreaInsets} from 'react-native-safe-area-context'

// const flashModes = [
//   FlashMode.off,
//   FlashMode.on,
//   FlashMode.auto,
//   FlashMode.torch,
// ]

// const flashModeToIcon = {
//   [FlashMode.off]: 'flash-off',
//   [FlashMode.on]: 'flash-on',
//   [FlashMode.auto]: 'flash-auto',
//   [FlashMode.torch]: 'highlight',
// }

// const CameraScreen = () => {
//   const [hasPermissions, setHasPermissions] = useState<boolean | null>(null)
//   const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
//   const [flash, setFlash] = useState(FlashMode.off)
//   const [isCameraReady, setIsCameraReady] = useState(false)
//   const [isRecording, setIsRecording] = useState(false)

//   const inset = useSafeAreaInsets()

//   const camera = useRef<Camera>(null)
//   const navigation = useNavigation<CameraNavigationProp>()

//   useEffect(() => {
//     const getPermission = async () => {
//       const cameraPermission = await Camera.requestCameraPermissionsAsync()
//       const microphonePermission =
//         await Camera.requestMicrophonePermissionsAsync()
//       setHasPermissions(
//         cameraPermission.status === 'granted' &&
//           microphonePermission.status === 'granted',
//       )
//     }
//     getPermission()
//   }, [])

//   const flipCamera = () => {
//     setCameraType(currentCameraType =>
//       currentCameraType === Camera.Constants.Type.back
//         ? Camera.Constants.Type.front
//         : Camera.Constants.Type.back,
//     )
//   }

//   const flipFlash = () => {
//     const currentIndex = flashModes.indexOf(flash)
//     const nextIndex =
//       currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1
//     setFlash(flashModes[nextIndex])
//   }

//   const takePicture = async () => {
//     if (!isCameraReady || !camera.current || isRecording) {
//       return
//     }

//     const options: CameraPictureOptions = {
//       quality: 0.5, 
//       base64: false, 
//       skipProcessing: true, 
//     }

//     const result = await camera.current.takePictureAsync(options)
//     navigation.navigate('Create', {
//       image: result.uri,
//     })
//   }

//   const startRecording = async () => {
//     console.warn('start recording')
//     if (!isCameraReady || !camera.current || isRecording) {
//       return
//     }

//     const options: CameraRecordingOptions = {
//       quality: Camera.Constants.VideoQuality['640:480'], 
//       maxDuration: 60,
//       maxFileSize: 10 * 1024 * 1024, 
//       mute: false,
//     }
//     setIsRecording(true)
//     try {
//       const result = await camera.current.recordAsync(options)

//       navigation.navigate('Create', {
//         video: result.uri,
//       })
//     } catch (e) {
//       console.log(e)
//     }
//     setIsRecording(false)
//   }

//   const stopRecording = () => {
//     if (isRecording) {
//       camera.current?.stopRecording()
//       setIsRecording(false)
//     }
//   }

//   const openImageGallery = () => {
//     launchImageLibrary(
//       {mediaType: 'mixed', selectionLimit: 3},
//       ({didCancel, errorCode, assets}) => {
//         if (!didCancel && !errorCode && assets && assets.length > 0) {
//           const params: {image?: string images?: string[] video?: string} =
//             {}

//           if (assets.length === 1) {
//             const field = assets[0].type?.startsWith('video')
//               ? 'video'
//               : 'image'
//             params[field] = assets[0].uri
//           } else if (assets.length > 1) {
//             params.images = assets.map(asset => asset.uri) as string[]
//           }

//           navigation.navigate('Create', params)
//         }
//       },
//     )
//   }

//   if (hasPermissions === null) {
//     return <Text>Loading...</Text>
//   }

//   if (hasPermissions === false) {
//     return <Text>No access to the camera</Text>
//   }

//   return (
//     <View style={styles.page}>
//       <Camera
//         ref={camera}
//         style={styles.camera}
//         type={cameraType}
//         ratio="4:3"
//         flashMode={flash}
//         onCameraReady={() => setIsCameraReady(true)}
//       />

//       <View style={[styles.buttonsContainer, {top: inset.top + 25}]}>
//         <MaterialIcons name="close" size={30} color={colors.white} />

//         <Pressable onPress={flipFlash}>
//           <MaterialIcons
//             name={flashModeToIcon[flash]}
//             size={30}
//             color={colors.white}
//           />
//         </Pressable>

//         <MaterialIcons name="settings" size={30} color={colors.white} />
//       </View>

//       <View style={[styles.buttonsContainer, {bottom: 25}]}>
//         <Pressable onPress={openImageGallery}>
//           <MaterialIcons name="photo-library" size={30} color={colors.white} />
//         </Pressable>

//         {isCameraReady && (
//           <Pressable
//             onPress={takePicture}
//             onLongPress={startRecording}
//             onPressOut={stopRecording}>
//             <View
//               style={[
//                 styles.circle,
//                 {backgroundColor: isRecording ? colors.accent : colors.white},
//               ]}
//             />
//           </Pressable>
//         )}

//         <Pressable onPress={flipCamera}>
//           <MaterialIcons
//             name="flip-camera-ios"
//             size={30}
//             color={colors.white}
//           />
//         </Pressable>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   page: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: colors.black,
//   },
//   camera: {
//     width: '100%',
//     aspectRatio: 3 / 4,
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     width: '100%',

//     position: 'absolute',
//   },
//   circle: {
//     width: 75,
//     aspectRatio: 1,
//     borderRadius: 75,
//     backgroundColor: colors.white,
//   },
// })

// export default CameraScreen




















import {useEffect, useState, useRef} from 'react'
import {View, Text, StyleSheet, Pressable, Dimensions, TouchableOpacity, ScrollView, Image} from 'react-native'
import {Camera} from 'expo-camera'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import colors from '../../theme/colors'
import {
  CameraPictureOptions,
  CameraRecordingOptions,
  FlashMode,
} from 'expo-camera/build/Camera.types'
import {useNavigation} from '@react-navigation/native'
import {CameraNavigationProp} from '../../types/navigation'
import {launchImageLibrary} from 'react-native-image-picker'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {CameraRoll} from "@react-native-camera-roll/camera-roll"
import FastImage from 'react-native-fast-image'
import {Picker} from "@react-native-picker/picker"
import { FlatList } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'

const flashModes = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
]

const flashModeToIcon = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight',
}
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const CameraScreen = () => {
  const [hasPermissions, setHasPermissions] = useState<boolean | null>(null)
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
  const [flash, setFlash] = useState(FlashMode.off)
  const [isCameraReady, setIsCameraReady] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [type, setType] = useState("gallery")

  const [images, setImages] = useState([])
  const [albums, setAlbums] = useState([])
  const [pickedImage, setPickedImage] = useState("")
  const [category, setCategory] = useState("")

  let imgArr = []

  const {top} = useSafeAreaInsets()
  const inset = useSafeAreaInsets()
  const scrollViewRef = useRef<ScrollView>()

  const camera = useRef<Camera>(null)
  const navigation = useNavigation<CameraNavigationProp>()

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync()
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync()
        setHasPermissions(
          cameraPermission.status === 'granted' &&
          microphonePermission.status === 'granted'
        )
    }
    getPermission()
  }, [])

  useEffect(() => {
    if(!hasPermissions) {
      return
    }

    const getAlbums = async () => {
      let params = {first: 30, assetType: "All"}
      try{
        const albumsName = await CameraRoll.getPhotos(params)
        setImages(albumsName.edges)
        setPickedImage(albumsName.edges[0].node.image.uri)
      }catch(err) {
        console.log(err)
      }
    }

    getAlbums()
  },[hasPermissions])

  const imagePressed = (item, key) => {
    setPickedImage(item.node.image.uri)
  }

  const displayImages = () => {
    return images.map((item, key) => (
      <TouchableOpacity
          key={key}
          onLayout={event => {
            const layout = event.nativeEvent.layout
            imgArr[key] = layout.y
          }}
          onPress={() => {
            imagePressed(item, key)
          }}
        >
          <Image style={styles.image} source={{uri: item.node.image.uri}} />
        </TouchableOpacity>
    ))
    
  }
 
  const flipCamera = () => {
    setCameraType(currentCameraType =>
      currentCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    )
  }

  const flipFlash = () => {
    const currentIndex = flashModes.indexOf(flash)
    const nextIndex =
      currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1
    setFlash(flashModes[nextIndex])
  }

  const takePicture = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return
    }

    const options: CameraPictureOptions = {
      quality: 0.5,
      base64: false,
      skipProcessing: true, 
    }

    const result = await camera.current.takePictureAsync(options)

    navigation.navigate('ApplyEffect', {
      image: result.uri,
    })
  }

  const startRecording = async () => {
    console.warn('start recording')
    if (!isCameraReady || !camera.current || isRecording) {
      return
    }

    const options: CameraRecordingOptions = {
      quality: Camera.Constants.VideoQuality['640:480'],
      maxDuration: 60, 
      maxFileSize: 10 * 1024 * 1024,
      mute: false,
    }
    setIsRecording(true)

    try {
      const result = await camera.current.recordAsync(options)

      navigation.navigate('Create', {
        video: result.uri,
      })
    } catch (e) {
      console.log(e)
    }
    setIsRecording(false)
  }

  const stopRecording = () => {
    if (isRecording) {
      camera.current?.stopRecording()
      setIsRecording(false)
    }
  }

  const openImageGallery = () => {
    launchImageLibrary(
      {mediaType: 'mixed', selectionLimit: 3},
      ({didCancel, errorCode, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          const params: {image?: string, images?: string[], video?: string} = {}

          if (assets.length === 1) {
            const field = assets[0].type?.startsWith('video')
              ? 'video'
              : 'image'
            params[field] = assets[0].uri
          } else if (assets.length > 1) {
            params.images = assets.map(asset => asset.uri) as string[]
          }

          navigation.navigate('Create', params)
        }
      },
    )
  }

  if (hasPermissions === null) {
    return <Text>Loading...</Text>
  }

  if (hasPermissions === false) {
    return <Text>No access to the camera</Text>
  }

  return (
    <>
    {type === "gallery" ? (
      <View style={{...styles.container, paddingTop: top}}>
          <View style={styles.headerWrapper}>
            <View style={styles.headerLeftWrapper}>
              <View>
                {/* <Icon size={25} name="times" /> */}
                 <Feather
                    name="x"
                    size={30}
                    style={{marginRight: 10}}
                  />
              </View>
              <View style={styles.headerTitleWrapper}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>New Post</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('ApplyEffect', {image: pickedImage})}>
                <Feather
                  name="arrow-right"
                  size={30}
                  color={"blue"}
                />
              </TouchableOpacity>
             
            </View>
          </View>
          <View>
            <Image
              style={styles.pickedImageWrapper}
              source={{uri: pickedImage}}
            />
          </View>
          <ScrollView
            ref={scrollViewRef}
          >
            <View style={{padding: 15}}>
              <Text style={{fontWeight: "bold", fontSize: 20}}>Gallery</Text>
            </View>
            <View style={styles.galleryImagesWrapper}>
              {displayImages()}
            </View>
          </ScrollView>
        </View>
    ) : (
      <View style={styles.page}>
        <Camera
          ref={camera}
          style={styles.camera}
          type={cameraType}
          ratio="4:3"
          flashMode={flash}
          onCameraReady={() => setIsCameraReady(true)}
        />

        <View style={[styles.buttonsContainer, {top: inset.top + 25}]}>
          <MaterialIcons name="close" size={30} color={colors.white} />

          <Pressable onPress={flipFlash}>
            <MaterialIcons
              name={flashModeToIcon[flash]}
              size={30}
              color={colors.white}
            />
          </Pressable>

          <MaterialIcons name="settings" size={30} color={colors.white} />
        </View>

        <View style={[styles.buttonsContainer, {bottom: 25}]}>
          <Pressable onPress={openImageGallery}>
            <MaterialIcons name="photo-library" size={30} color={colors.white} />
          </Pressable>

          {isCameraReady && (
            <Pressable
              onPress={takePicture}
              onLongPress={startRecording}
              onPressOut={stopRecording}>
              <View
                style={[
                  styles.circle,
                  {backgroundColor: isRecording ? colors.accent : colors.white},
                ]}
              />
            </Pressable>
          )}

          <Pressable onPress={flipCamera}>
            <MaterialIcons
              name="flip-camera-ios"
              size={30}
              color={colors.white}
            />
          </Pressable>
        </View>
      </View>
   
    )}
      <View style={styles.footer}>
        <TouchableOpacity style={[styles.pickedFooterSection, type === "gallery" && { borderBottomColor: colors.black, borderBottomWidth: 2}]} onPress={() => setType("gallery")}>
          <Text style={styles.pickedFooterTitle}>GALLERY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.pickedFooterSection, type === "video" && { borderBottomColor: colors.black, borderBottomWidth: 2}]} onPress={() => setType("video")}>
          <Text style={styles.footerTitle}>VIDEO</Text>
        </TouchableOpacity>
      </View>
 </>
              
)}

const styles = StyleSheet.create({
 container: {
    display: 'flex',
    flex: 1,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerSection: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  pickedFooterSection: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  footerTitle: {
    fontSize: 16,
    color: colors.gray,
  },
  pickedFooterTitle: {
    fontSize: 16,
    color: colors.black,
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 10,
  },
  headerLeftWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center"
  },
  headerTitleWrapper: {
    marginLeft: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  image: {
    width: width / 4,
    aspectRatio: 1,
    padding: 1,
  },
  galleryImagesWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  pickedImageWrapper: {
    height: height / 2,
  },


  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',

    position: 'absolute',
  },
  circle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
    backgroundColor: colors.white,
  },
})

export default CameraScreen







