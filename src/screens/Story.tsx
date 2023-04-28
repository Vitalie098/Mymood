
// import * as React from 'react';
// import {
//   StyleSheet, View, Image, SafeAreaView, TextInput, Platform,
// } from 'react-native';

// // import { Feather as Icon } from '@expo/vector-icons';

// import Avatar from './Avatar';

// // export type Story = {
// //   id: string,
// //   source: ImageSourcePropType,
// //   user: string,
// //   avatar: ImageSourcePropType,
// // };

// // type StoryProps = {
// //   story: Story,
// // };


// const Story = (props) => {
//     const { story: { source, user, avatar } } = props;
//   return (
//       <SafeAreaView style={styles.container}>
//         <View style={styles.container}>
//           <Image style={styles.image} {...{ source }} />
//           <Avatar {...{ user, avatar }} />
//         </View>
//         {/* <View style={styles.footer}>
//           <Icon name="camera" color="white" size={28} />
//           <TextInput style={styles.input} />
//           <Icon name="message-circle" color="white" size={28} />
//         </View> */}
//       </SafeAreaView>
//   )
// }

// export default Story

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     ...StyleSheet.absoluteFillObject,
//     // width: 0,
//     // height: 0,
//     borderRadius: 5,
//   },
//   footer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 16,
//   },
//   input: {
//     borderWidth: 2,
//     borderColor: 'white',
//     height: 28,
//     width: 250,
//     borderRadius: Platform.OS === 'android' ? 0 : 10,
//   },
// });


import { View, Text } from 'react-native'
import React from 'react'

const Story = () => {
  return (
    <View>
      <Text>Story</Text>
    </View>
  )
}

export default Story
