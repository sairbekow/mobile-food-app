import styled from 'styled-components/native'
import { Colors } from '@/shared/colors'
import AddIcon from '@/assets/icons/plus.svg'
import { IProduct } from '@/components/Products'

type IProductProps = Omit<IProduct, 'id'>

const Product = ({
  category,
  title,
  image,
  description,
  price,
}: IProductProps) => {
  return (
    <Wrapper>
      <Subtitle>{category}</Subtitle>
      <ImageWrapper>
        <Image resizeMode="contain" source={image} />
      </ImageWrapper>
      <InfoBlock>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <InfoBlockBottom>
          <Price>{price}</Price>
          <AddButton>
            <AddIcon />
          </AddButton>
        </InfoBlockBottom>
      </InfoBlock>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  padding: 12px 20px 20px;
  width: 160px;
  height: 242px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 26px;
  background: #fff;
  overflow: hidden;
`

const Subtitle = styled.Text`
  margin-bottom: 7px;
  text-transform: uppercase;
  color: ${Colors.Subtitle};
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.44px;
`

const ImageWrapper = styled.View`
  width: 128px;
  height: 100px;
  align-self: center;
`

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`

const InfoBlock = styled.View``

const Title = styled.Text`
  color: ${Colors.Title};
  font-size: 16px;
  font-weight: 600;
`

const Description = styled.Text`
  margin-top: 5px;
  color: ${Colors.Text};
  font-size: 9px;
`

const Price = styled.Text`
  color: ${Colors.Purple};
  font-size: 18px;
  font-weight: 600;
`

const InfoBlockBottom = styled.View`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const AddButton = styled.TouchableOpacity`
  border: 1px solid ${Colors.Primary};
  border-radius: 5px;
`

export default Product
