// @flow
import * as React from 'react'
import {
  StyleSheet, View, Image, Text, Platform,
} from 'react-native'

const Avatar = (props) => {
  const { user, avatar: source } = props
  return (
    <View style={styles.container}>
        <Image {...{ source }} style={styles.avatar} />
        <Text style={styles.username}>{user}</Text>
      </View>
  )
}

export default Avatar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    marginTop: 0,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    marginRight: 16,
  },
  username: {
    color: 'white',
    fontSize: 16,
  },
})
