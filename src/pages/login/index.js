import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, } from '@tarojs/components'
import './index.scss'

//////////////////////////////////////////////
// 图片
import backgroud from '../../assets/background.png'
import forma from '../../assets/forma.png'
import font from '../../assets/font.png'
//////////////////////////////////////////////


export default class Login extends Component {

  config = {
    navigationBarTitleText: 'login'
  }

  //////////////////////////////////////////////
  // life hook
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  //////////////////////////////////////////////

  login = () => {
    console.log(20190714172820, 'login')
  }

  register = () => {
    console.log(20190714172832, 'register')
  }

  direct = () => {
    console.log(20190714172955, 'direct')
  }

  render () {
    return (
      <View className='login'>
        <Image src={backgroud} className='login__backgroud'></Image>
        <Image src={forma} className='login__forma'></Image>
        <Image src={font} className='login__font'></Image>
        <Button className='login__button login__Login' onClick={ this.login }>Login</Button>
        <Button className='login__button login__Register u-mt-3' onClick={ this.register }>Register</Button>
        <Text class='login__direct' onClick={ this.direct }>Direct Enter</Text>
      </View>
    )
  }
}
