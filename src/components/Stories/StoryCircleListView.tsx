import React from 'react'
import { View, FlatList } from 'react-native'
import StoryCircleListItem from './StoryCircleListItem'
import { StoryCircleListViewProps } from './interfaces'

const StoryCircleListView = ({
  data,
  handleStoryItemPress,
  unPressedBorderColor,
  pressedBorderColor,
  setToggleStatus,
  avatarSize,
  showText,
  textStyle,
}: StoryCircleListViewProps) => {
  return (
    <View>
      <FlatList
        keyExtractor={(_item, index) => index.toString()}
        data={data}
        horizontal
        style={{ paddingLeft: 12 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={<View style={{ flex: 1, width: 8 }} />}
        renderItem={({ item, index }) => (
          <StoryCircleListItem
            avatarSize={avatarSize}
            setToggleStatus={setToggleStatus}
            handleStoryItemPress={() =>
              handleStoryItemPress && handleStoryItemPress(item, index)
            }
            unPressedBorderColor={unPressedBorderColor}
            pressedBorderColor={pressedBorderColor}
            item={item}
            showText={showText}
            textStyle={textStyle}
          />
        )}
      />
    </View>
  )
}

export default StoryCircleListView
