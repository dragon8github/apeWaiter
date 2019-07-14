import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, } from '@tarojs/components'
import './index.scss'

//////////////////////////////////////////////
// 图片
import ICON1 from '../../assets/icon1.png'
import ICON2 from '../../assets/icon2.png'
import ICON3 from '../../assets/icon3.png'
import ICON4 from '../../assets/icon4.png'
import ICON5 from '../../assets/icon5.png'
import ICON6 from '../../assets/icon6.png'
import ICON7 from '../../assets/icon7.png'
import ICON8 from '../../assets/icon8.png'
//////////////////////////////////////////////

export default class More extends Component {

  config = {
    navigationBarTitleText: 'More'
  }

  //////////////////////////////////////////////
  // life hook
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  //////////////////////////////////////////////

  go = () => {
    console.log(20190714174701, 'More')
  }

  render() {
    return (
      <View className='More'>
        <View className='More__Item'>
          <Image src={ICON1} className='More__Icon'></Image>
          <Text className='More__Text'>About</Text>
        </View>
        <View className='More__Item'>
          <Image src={ICON2} className='More__Icon'></Image>
          <Text className='More__Text'>Gallery</Text>
        </View>
        <View className='More__Item'>
          <Image src={ICON3} className='More__Icon'></Image>
          <Text className='More__Text'>Reviews</Text>
        </View>
        <View className='More__Item'>
          <Image src={ICON4} className='More__Icon'></Image>
          <Text className='More__Text'>Offers</Text>
        </View>
        <View className='More__Item'>
          <Image src={ICON5} className='More__Icon'></Image>
          <Text className='More__Text'>Our Staff</Text>
        </View>
        <View className='More__Item'>
          <Image src={ICON6} className='More__Icon'></Image>
          <Text className='More__Text'>Reservations</Text>
        </View>
        <View className='More__Item'>
          <Image src={ICON7} className='More__Icon'></Image>
          <Text className='More__Text'>Profile</Text>
        </View>
        <View className='More__Item'>
          <Image src={ICON8} className='More__Icon'></Image>
          <Text className='More__Text'>Settings</Text>
        </View>
      </View>
    )
  }
}
