import { ReactNode } from 'react';
import { ColorValue, ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type NextOrPrevious = 'next' | 'previous';

export interface IUserStory {
  user_id: number;
  user_image: string | undefined;
  user_name: string;
  stories: IUserStoryItem[];
  seen?: boolean;
}

export interface IUserStoryItem {
  story_id: number;
  story_image: string | undefined;
  onPress?: (props?: any) => any;
  swipeText?: string;
  finish?: number;
}

interface SharedCircleListProps {
  handleStoryItemPress: (item: IUserStory, index?: number) => void;
  unPressedBorderColor?: ColorValue;
  pressedBorderColor?: ColorValue;
  avatarSize?: number;
  showText?: boolean;
  textStyle?: TextStyle;
}

export interface StoryCircleListViewProps extends SharedCircleListProps {
  data: IUserStory[];
}

export interface StoryCircleListItemProps extends SharedCircleListProps {
  item: IUserStory;
}

export interface StoryListItemProps {
  index: number;
  key: number;
  userID: number;
  profileName: string;
  profileImage: string | undefined;
  duration: number;
  swipeText?: string;
  customSwipeUpComponent?: ReactNode;
  customCloseComponent?: ReactNode;
  onFinish?: (props?: any) => any;
  onClosePress: (props?: any) => any;
  stories: IUserStoryItem[];
  currentPage: number;
}

export interface StoryProps {
  data: IUserStory[];
  duration: number;
  avatarSize?: number;
  style?: ViewStyle;
  unPressedBorderColor?: TextStyle['color'];
  pressedBorderColor?: TextStyle['color'];
  onClose?: (props?: IUserStory) => any;
  onStart?: (props?: IUserStory) => any;
  swipeText?: string;
  customSwipeUpComponent?: ReactNode;
  customCloseComponent?: ReactNode;
  showAvatarText?: boolean;
  avatarTextStyle?: TextStyle;
}
