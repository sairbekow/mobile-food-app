import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export enum RootScreens {
  Home = 'Home',
  Posts = 'Posts',
}

export type RootStackParamList = {
  [RootScreens.Home]: undefined
  [RootScreens.Posts]: undefined
}

export default function useRootNavigation<
  T extends keyof RootStackParamList,
>() {
  return useNavigation<
    NativeStackScreenProps<RootStackParamList, T>['navigation']
  >()
}
