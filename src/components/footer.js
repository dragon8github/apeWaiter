import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, } from '@tarojs/components'
import './footer.scss'

//////////////////////////////////////////////
// 图片
import home from '../assets/home.png'
import menu from '../assets/menu.png'
import reservation from '../assets/reservation.png'
import services from '../assets/services.png'
import more from '../assets/more.png'
//////////////////////////////////////////////

export default class Footer extends Component {

  config = {
    navigationBarTitleText: 'Footer'
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
    console.log(20190714194825, 'Footer')
  }

  render() {
    return (
      <View className='Footer'>
        <View className='Footer__Item is-active'>
          <Image src={home} className='Footer__Item--img'></Image>
          <Text className='Footer__Item--name'>home</Text>
        </View>
        <View className='Footer__Item'>
          <Image src={menu} className='Footer__Item--img'></Image>
          <Text className='Footer__Item--name'>menu</Text>
        </View>
        <View className='Footer__Item'>
          <Image src={reservation} className='Footer__Item--img'></Image>
          <Text className='Footer__Item--name'>reservation</Text>
        </View>
        <View className='Footer__Item'>
          <Image src={services} className='Footer__Item--img'></Image>
          <Text className='Footer__Item--name'>services</Text>
        </View>
        <View className='Footer__Item'>
          <Image src={more} className='Footer__Item--img'></Image>
          <Text className='Footer__Item--name'>more</Text>
        </View>
      </View>
    )
  }
}
