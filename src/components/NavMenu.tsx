import styled from 'styled-components/native'
import { Colors } from '@/shared/colors'

const menuList: string[] = [
  'All',
  'Fruits',
  'Vegetables',
  'Greens',
  'Bakery',
  'Fast foods',
]

const NavMenu = () => {
  return (
    <Wrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {menuList.map(item => (
          <Button key={item}>
            <Text>{item}</Text>
          </Button>
        ))}
      </ScrollView>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  padding: 5px 20px;
`

const ScrollView = styled.ScrollView`
  display: flex;
  flex-direction: row;
`

const Button = styled.TouchableOpacity`
  display: block;
  margin-right: 32px;
`

const Text = styled.Text`
  color: ${Colors.Purple};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`

export default NavMenu
