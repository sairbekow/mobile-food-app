import styled from 'styled-components/native'
import { Colors } from '@/shared/colors'
import Header from '@/components/Header'
import SafeArea from '@/components/SafeAreaView'
import NavMenu from '@/components/NavMenu'
import Products from '@/components/Products'

const HomeScreen = () => {
  return (
    <SafeArea>
      <Container>
        <Header />
        <NavMenu />
        <Products />
      </Container>
    </SafeArea>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.Background};
  height: 100%;
`

export default HomeScreen
