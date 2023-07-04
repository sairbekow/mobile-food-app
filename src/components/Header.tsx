import styled from 'styled-components/native'
import SearchIcon from '@/assets/icons/search.svg'
import BurgerIcon from '@/assets/icons/burger.svg'

const Header = () => {
  return (
    <Wrapper>
      <Button>
        <BurgerIcon />
      </Button>
      <Button>
        <SearchIcon />
      </Button>
    </Wrapper>
  )
}

const Button = styled.TouchableOpacity``

const Wrapper = styled.View`
  width: 100%;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

export default Header
