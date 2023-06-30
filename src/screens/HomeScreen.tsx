import { Text, Button } from 'react-native'
import styled from 'styled-components/native'
import useRootNavigation, { RootScreens } from '@/hooks/useRootNavigation'

const HomeScreen = ({}) => {
  const navigation = useRootNavigation()
  return (
    <Container>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate(RootScreens.Posts)} title='Open posts' />
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

export default HomeScreen
