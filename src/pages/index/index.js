import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import './index.scss'

import Footer from '../../components/footer'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text class='title'>Today’s Special</Text>

        <ScrollView className='ad' scrollX='true'>
          <View className='ad__item'>
            <View class='ad__text'>
              <Text class='ad__text--1'>FOR ADULT & KIDS (7 ITEMS)</Text>
              <Text class='ad__text--2'>High Protein Breakfast</Text>
            </View>
          </View>
          <View className='ad__item'>
            <View class='ad__text'>
              <Text class='ad__text--1'>FOR ADULT & KIDS (7 ITEMS)</Text>
              <Text class='ad__text--2'>High Protein Breakfast</Text>
            </View>
          </View>
          <View className='ad__item'>
            <View class='ad__text'>
              <Text class='ad__text--1'>FOR ADULT & KIDS (7 ITEMS)</Text>
              <Text class='ad__text--2'>High Protein Breakfast</Text>
            </View>
          </View>
        </ScrollView>

        
      </View>
    )
  }
}
