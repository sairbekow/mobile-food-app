import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootScreens } from '@/hooks/useRootNavigation'
import HomeScreen from '@/screens/HomeScreen'
import PostsScreen from '@/screens/PostsScreen'

// const MyTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: Colors.White,
//   },
// }

const RootStack = createNativeStackNavigator()

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={RootScreens.Home} component={HomeScreen} />
        <RootStack.Screen name={RootScreens.Posts} component={PostsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation
