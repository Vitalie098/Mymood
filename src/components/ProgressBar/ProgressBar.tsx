import React, { useRef, useEffect } from "react"
import { View, Image, Animated } from "react-native"

export const ProgressBar = ({ onStoryComplete }) => {
  const progressRef = useRef(new Animated.Value(0))

  const handleProgressBar = () => ({
    width: progressRef.current.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
    }),
  })
  
  useEffect(() => {
    Animated.timing(progressRef.current, {
      toValue: 1,
      duration: 15000,
      useNativeDriver: false,
    }).start(onStoryComplete)
  }, [onStoryComplete])

  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3 }}>
        <Animated.View
          style={{
            flex: 1,
            ...handleProgressBar(),
            backgroundColor: "white",
            borderRadius: 5,
            overflow: "hidden",
            flexDirection: "row",
          }}
        >
          <Animated.View
            style={{
              flex: 1,
              ...handleProgressBar(),
              borderRadius: 5,
              overflow: "hidden",
              flexDirection: "row",
            }}
          />
        </Animated.View>
      </View>
    </View>
  )
}


