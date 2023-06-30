import { Text } from 'react-native'
import styled from 'styled-components/native'

const PostsScreen = () => {
  return (
    <Container>
      <Text>Posts</Text>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

export default PostsScreen
