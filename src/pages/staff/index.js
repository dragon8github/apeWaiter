import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, ScrollView, Block } from '@tarojs/components'
import './index.scss'

//////////////////////////////////////////////
// 图片
import ICON1 from '../../assets/icon1.png'
//////////////////////////////////////////////

export default class Staff extends Component {

  config = {
    navigationBarTitleText: 'Staff'
  }

  constructor (props) {
    super(props)
    this.state = { 
      StaffList: [
        { name: 'Chef John', intr: 'French, Western, Pastry, Dessert' },
        { name: 'Chef Kristen', intr: 'BBQ, Western, Fast Food' },
        { name: 'Chef Martin', intr: 'Italian, Pastry, Dessert' },
        { name: 'Chef Gabriel', intr: 'BBQ, Western, Fast Food' },
        { name: 'Chef Mike', intr: 'French, Western, Pastry, Dessert' },
        { name: 'Chef Cris', intr: 'BBQ, Western, Fast Food' },
        { name: 'Chef Martin', intr: 'Italian, Pastry, Dessert' },
        { name: 'Chef Elliot', intr: 'BBQ, Western, Fast Food' },
        { name: 'Chef George', intr: 'Italian, Pastry, Dessert' },
        { name: 'Chef Joana', intr: 'French, Western, Pastry, Dessert' },
      ],
    }
  }

  //////////////////////////////////////////////
  // life hook
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  //////////////////////////////////////////////

  go = () => {
    console.log(20190714181515, 'Staff')
  }

  render () {
    // 员工列表
    const list = this.StaffList.map(_ => {
      return <View className='Staff__Item'>
          <Image src={ICON1} className='Staff__Avatar'></Image>
           <View className='Staff__Info'>
             <Text className='Staff__Info--Name'>{_.name}</Text>
             <Text className='Staff__Info--Intr'>{_.intr}</Text>
           </View>
      </View>
    })

    return (
      <ScrollView className='Staff'>
        { list }
      </ScrollView>
    )
  }
}