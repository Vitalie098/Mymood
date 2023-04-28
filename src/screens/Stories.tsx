// import React, {useEffect, useState} from 'react'
// import {
//   StyleSheet, Dimensions, Platform, View, ActivityIndicator,
// } from 'react-native'

// import Story from './Story'
// import { useRef } from 'react'
// import { useNavigation } from '@react-navigation/native'
// import Animated, { abs, concat, cond, divide, greaterThan, multiply, sin, sub } from 'react-native-reanimated'

// const { width } = Dimensions.get('window')
// const perspective = width
// const angle = Math.atan(perspective / (width / 2))
// const ratio = Platform.OS === 'ios' ? 2 : 1.2

// const Stories = ({stories}) => {
//     const [isReady, setIsReady] = useState(false)
//     const scroll = useRef()
//     const navigation = useNavigation()

//     useEffect(() => {
//       navigation.setOptions({headerShown: false})
//     })
//     const x = new Animated.Value(0)
//      let storiess = []
//  storiess = stories.map(() => React.createRef())

//  useEffect(() => {
//   storiess = stories.map(() => React.createRef())
//   setIsReady(true)
//  }, [])

//     const getStyle = (index: number) => {
//     const offset = index * width

//     const inputRange = [offset - width, offset + width]

//     const translateX = x.interpolate({
//       inputRange,
//       outputRange: [width / ratio, -width / ratio],
//       extrapolate: 'clamp',
//     })
//     const rotateY = x.interpolate({
//       inputRange,
//       outputRange: [angle, -angle],
//       extrapolate: 'clamp',
//     })

    
//       const alpha = abs(rotateY)
//       const gamma = sub(angle, alpha)
//       const beta = sub(Math.PI, alpha, gamma)
//       const w = sub(width / 2, (multiply((width / 2), divide(sin(gamma),sin(beta)))))
//       const translateX1 = cond(greaterThan(rotateY, 0), w, multiply(w, -1))  

  



//     return {
//       ...StyleSheet.absoluteFillObject,
//       transform: [
//         { perspective },
//         { translateX },
//         { rotateY: concat(rotateY, 'rad') },
//         { translateX: translateX1 }
//       ],
//     }
//   }

//   const getMaskStyle = (index: number) => {
//     const offset = index * width
//     const inputRange = [offset - width, offset, offset + width]
//     const opacity = x.interpolate({
//       inputRange,
//       outputRange: [0.75, 0, 0.75],
//       extrapolate: 'clamp',
//     })
//     return {
//       backgroundColor: 'black',
//       ...StyleSheet.absoluteFillObject,
//       opacity,
//     }
//   }

  // useEffect(() => {
   
  //   x.addListener(() => storiess.forEach((story, index) => {
  //     const offset = index * width
  //     const inputRange = [offset - width, offset + width]
  //     const translateX = x.interpolate({
  //       inputRange,
  //       outputRange: [width / ratio, -width / ratio],
  //       extrapolate: 'clamp',
  //     }).__getValue()

  //     const rotateY = x.interpolate({
  //       inputRange,
  //       outputRange: [`${angle}rad`, `-${angle}rad`],
  //       extrapolate: 'clamp',
  //     }).__getValue()

  //     const translateX1 = x.interpolate({
  //       inputRange,
  //       outputRange: [width / 2, -width / 2],
  //       extrapolate: 'clamp',
  //     }).__getValue()


  //     const parsed = parseFloat(rotateY.substr(0, rotateY.indexOf('rad')), 10)
  //     const alpha = Math.abs(parsed)
  //     const gamma = angle - alpha
  //     const beta = Math.PI - alpha - gamma
  //     const w = width / 2 - ((width / 2) * Math.sin(gamma) / Math.sin(beta))
  //     const translateX2 = parsed > 0 ? w : -w

  //     const style = {
  //       transform: [
  //         { perspective },
  //         { translateX },
  //         { rotateY },
  //         { translateX: translateX2 },
  //       ],
  //     }

  //     story?.current?.setNativeProps({ style })
  //   }))
  // },[storiess])

  // if(!isReady) {
  //   return <ActivityIndicator />
  // }

  // return (
  //     <View style={styles.container}>
  //       {
  //           stories.map((story, i) => (
  //             <Animated.View ref={storiess[i]} style={{position: 'absolute',
  //       left: 0,
  //       right: 0,
  //       top: 0,
  //       bottom: 0,}} key={story.id}>
  //               <Story {...{ story }} />
  //             </Animated.View>
  //           )).reverse()
  //         }
  //       <Animated.ScrollView
  //         // ref={this.scroll}
  //         style={{  position: 'absolute',
  //       left: 0,
  //       right: 0,
  //       top: 0,
  //       bottom: 0,}}
  //         showsHorizontalScrollIndicator={false}
  //         scrollEventThrottle={16}
  //         snapToInterval={width}
  //         contentContainerStyle={{ width: width * stories.length }}
  //         onScroll={Animated.event(
  //           [
  //             {
  //               nativeEvent: {
  //                 contentOffset: { x },
  //               },
  //             },
  //           ],
  //           { useNativeDriver: true },
  //         )}
  //         decelerationRate={0.99}
  //         horizontal
  //       />
  //     </View>
  //   )

//   return (
//       <View style={styles.container}>
//         {
//             stories.map((story, i) => (
//               <Animated.View style={getStyle(i)} key={story.id}>
//                 <Story story={story} />
//                 <Animated.View style={getMaskStyle(i)} />
//               </Animated.View>
//             ))
//           }
//         <Animated.ScrollView
//           ref={scroll}
//           style={{...StyleSheet.absoluteFillObject,  zIndex: 999}}
//           showsHorizontalScrollIndicator={true}
//           scrollEventThrottle={16}
//           snapToInterval={width}
//           contentContainerStyle={{ width: 3000}}
        
//           onScroll={Animated.event(
//             [
//               {
//                 nativeEvent: {
//                   contentOffset: { x },
//                 },
//               },
//             ],
//             { useNativeDriver: true },
//           )}
//           decelerationRate={0.99}
//           horizontal
//         />
//       </View>
//   )
// }

// export default Stories

// export default class Stories extends React.PureComponent<StoriesProps, StoriesState> {
//   stories = []

//   state = {
//     x: new Animated.Value(0),
//   }

//   constructor(props) {
//     super(props)
//     this.stories = props.stories.map(() => React.createRef())
//   }

//   componentDidMount() {
//     const { x } = this.state
//     x.addListener(() => this.stories.forEach((story, index) => {
//       const offset = index * width
//       const inputRange = [offset - width, offset + width]
//       const translateX = x.interpolate({
//         inputRange,
//         outputRange: [width / ratio, -width / ratio],
//         extrapolate: 'clamp',
//       }).__getValue()

//       const rotateY = x.interpolate({
//         inputRange,
//         outputRange: [`${angle}rad`, `-${angle}rad`],
//         extrapolate: 'clamp',
//       }).__getValue()

//       const translateX1 = x.interpolate({
//         inputRange,
//         outputRange: [width / 2, -width / 2],
//         extrapolate: 'clamp',
//       }).__getValue()


//       const parsed = parseFloat(rotateY.substr(0, rotateY.indexOf('rad')), 10)
//       const alpha = Math.abs(parsed)
//       const gamma = angle - alpha
//       const beta = Math.PI - alpha - gamma
//       const w = width / 2 - ((width / 2) * Math.sin(gamma) / Math.sin(beta))
//       const translateX2 = parsed > 0 ? w : -w

//       const style = {
//         transform: [
//           { perspective },
//           { translateX },
//           { rotateY },
//           { translateX: translateX2 },
//         ],
//       }
//       story.current.setNativeProps({ style })
//     }))
//   }

//   render(): React.Node {
//     const { x } = this.state
//     const { stories } = this.props
//     return (
//       <View style={styles.container}>
//         {
//             stories.map((story, i) => (
//               <Animated.View ref={this.stories[i]} style={StyleSheet.absoluteFill} key={story.id}>
//                 <Story {...{ story }} />
//               </Animated.View>
//             )).reverse()
//           }
//         <Animated.ScrollView
//           ref={this.scroll}
//           style={StyleSheet.absoluteFillObject}
//           showsHorizontalScrollIndicator={false}
//           scrollEventThrottle={16}
//           snapToInterval={width}
//           contentContainerStyle={{ width: width * stories.length }}
//           onScroll={Animated.event(
//             [
//               {
//                 nativeEvent: {
//                   contentOffset: { x },
//                 },
//               },
//             ],
//             { useNativeDriver: true },
//           )}
//           decelerationRate={0.99}
//           horizontal
//         />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {

//     width: "100%",
//     height: "50%",

//     backgroundColor: 'red',
//   },
// })

import { View, Text } from 'react-native'
import React from 'react'

const Stories = () => {
  return (
    <View>
      <Text>Stories</Text>
    </View>
  )
}

export default Stories