// import { View, Text, Image, ActivityIndicator, Animated } from 'react-native'
// import React, { useRef } from 'react'
// import { ListFleetsQuery, ListFleetsQueryVariables } from '../../API'
// import { listFleets } from './queries'
// import { useQuery } from '@apollo/client'
// import { useAuthContext } from '../../contexts/AuthContext';
// import {useState, useEffect} from 'react';
// import { Storage } from 'aws-amplify'
// import dayjs from 'dayjs'
// import FastImage from 'react-native-fast-image'
// import {Text as typeText} from "../../API"

// const FleetsScreen = () => {
//   const [user, setUser] = useState(null)
//   const [imageUri, setImageUri] = useState([])
//   const [text, setText] = useState<typeText>({})
//   const [currentStory, setCurrentStory] = useState(0)
//   const {userId} = useAuthContext()

//   const {data, error} = useQuery<ListFleetsQuery, ListFleetsQueryVariables>(listFleets, {variables: {filter: {userID: {eq: userId}}}})
//   const actualData = (data?.listFleets?.items.filter(el => new Date() - new Date(el?.createdAt) <= 86400000 ) || []).reverse()

//     useEffect(() => {
//       const getContentFromStoage = async () => {
//         if(actualData[currentStory]?.image?.imageKey) {
//            const uris = await Promise.all(actualData.map(story => Storage.get(story.image?.imageKey)));
//             setImageUri(uris)
//         }

//         if(actualData[currentStory]?.text) {
//           setText(actualData[currentIndexRef.current]?.text)
//         }

//         setUser(actualData[currentStory]?.User)
//       }

//       getContentFromStoage()
     
//     }, [])

//     const currentIndexRef = useRef(0);
//   const progressRef = useRef(new Animated.Value(0));

//   useEffect(() => {
//     if(imageUri.length === 0) return
  
//       progressRef.current.setValue(0);
//       Animated.timing(progressRef.current, {
//         toValue: 1,
//         duration: 5000,
//         useNativeDriver: false,
//       }).start()

//     const interval = setInterval(() => {
//       currentIndexRef.current = (currentIndexRef.current + 1) % actualData.length;
//       setCurrentStory(currentIndexRef.current)
   
      
//       progressRef.current.setValue(0);
//       Animated.timing(progressRef.current, {
//         toValue: 1,
//         duration: 5000,
//         useNativeDriver: false,
//       }).start();

     
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [actualData, imageUri]);

//   const handleProgressBar = () => ({
//     width: progressRef.current.interpolate({
//       inputRange: [0, 1],
//       outputRange: ["0%", "100%"],
//     }),
//   });

//   if(!imageUri || !user) {
//     return <ActivityIndicator />
//   }

//   return (
//     <View style={{flex: 1}}>
//       <View style={{position: "absolute", top: 40, left: 5, zIndex: 999, right: 5}}> 
//         <View style={{flexDirection: "row", alignItems: "center", marginBottom: 5, flex: 1}}>
//           {actualData.map( (_ ,index) => (
//             <View style={{ flex: 1, backgroundColor: "gray", height: 3, marginRight: 3 }}>
//               <Animated.View style={[{height: 3, backgroundColor: "#fff"}, index === currentStory ? {...handleProgressBar()} : index < currentStory ? {width: "100%"} : {width: 0}]}/>
//             </View>
//             )
//           )}
//         </View>

//         <View style={{flexDirection: "row", alignItems: "center", left: 10}}>
//           <Image source={{uri: user?.image || DEFAULT_USER_IMAGE}} style={{width: 35, height: 35, borderRadius: 25}}/>
//           <Text style={{marginLeft: 15, color: "#fff", fontWeight: "700"}}>{user?.username || user.name}</Text>
//           <Text style={{marginLeft: 10, fontWeight: "700"}}>{dayjs(actualData[currentStory].createdAt).fromNow()}</Text>
//         </View>
//       </View>

//       <FastImage source={{uri: imageUri[currentStory]}} style={{width: "100%", height: "100%", backgroundColor: "green"}} />

//       {Object.keys(text).length > 0 && (
//         <View style={{position: "absolute", left: text.x, top: text.y}}>
//           <Text>{text.textValue}</Text>
//         </View>
//       )}

//       <View style={{zIndex: 999, position: "absolute", left: 0, right: 0, top: 0, bottom: 0, flexDirection: "row"}}>
//         <View style={{flex: 1}}/>
//         <View style={{flex: 1}}/>
//       </View>
//     </View>
//   )
// }

// export default FleetsScreen

import { View, Text } from 'react-native'
import React from 'react'

const FleetsScreen = () => {
  return (
    <View>
      <Text>FleetsScreen</Text>
    </View>
  )
}

export default FleetsScreen