import styled from 'styled-components/native'
import raspberryImage from '@/assets/images/raspberry.png'
import macaronImage from '@/assets/images/macaron.png'
import cabbageImage from '@/assets/images/cabbage.png'
import greenGrapeImage from '@/assets/images/green_grape.png'
import purpleGrapeImage from '@/assets/images/purple_grape.png'
import lycheeFruitImage from '@/assets/images/lychee_fruit.png'
import Product from '@/components/Product'
import {
  ListRenderItem,
  FlatList,
  ImageSourcePropType,
  View,
} from 'react-native'

export interface IProduct {
  id: number
  category: string
  title: string
  description: string
  image: ImageSourcePropType
  price: string
}

const DATA: IProduct[] = [
  {
    id: 1,
    title: 'Raspberries',
    description: 'Fruit of a multitude of plant species',
    image: raspberryImage,
    price: '$10.50',
    category: 'Fruits',
  },
  {
    id: 2,
    title: 'Pink Macaroon',
    description: 'Fruit of a multitude of plant species',
    image: macaronImage,
    price: '$10.50',
    category: 'Fruits',
  },
  {
    id: 3,
    title: 'Cabbage',
    description: 'Fruit of a multitude of plant species',
    image: cabbageImage,
    price: '$10.50',
    category: 'Fruits',
  },
  {
    id: 4,
    title: 'Purple Grape',
    description: 'Fruit of a multitude of plant species',
    image: greenGrapeImage,
    price: '$10.50',
    category: 'Fruits',
  },
  {
    id: 5,
    title: 'Purple Grape',
    description: 'Fruit of a multitude of plant species',
    image: purpleGrapeImage,
    price: '$10.50',
    category: 'Fruits',
  },
  {
    id: 6,
    title: 'Lychee Fruit',
    description: 'Fruit of a multitude of plant species',
    image: lycheeFruitImage,
    price: '$10.50',
    category: 'Fruits',
  },
]

const Products = () => {
  const renderItem: ListRenderItem<IProduct> = ({ item }) => (
    <Product
      category={item.category}
      description={item.description}
      image={item.image}
      price={item.price}
      title={item.title}
    />
  )

  return (
    <Wrapper>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 15,
            }}
          />
        )}
      />
    </Wrapper>
  )
}

const Wrapper = styled.View`
  padding: 20px;
  flex: 1;
`

export default Products
