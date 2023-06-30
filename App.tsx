import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { makeStore } from '@/store/store'
import RootNavigation from '@/navigation/RootNavigation'

const store = makeStore()

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
      {/*<StatusBar style="auto" />*/}
    </Provider>
  )
}
