import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import './app.scss'

// 在 h5 环境中开启 React Devtools
if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5') {
  require('nerv-devtools')
}

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/more/index',
      'pages/staff/index',
      'pages/login/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [{
        pagePath: "pages/index/index",
        iconPath: "./assets/tab-bar/home.png",
        selectedIconPath: "./assets/tab-bar/active-home.png",
        text: "home"
      }, {
        pagePath: "pages/more/index",
        iconPath: "./assets/tab-bar/menu.png",
        selectedIconPath: "./assets/tab-bar/active-menu.png",
        text: "menu"
      }, {
        pagePath: "pages/more/index",
        iconPath: "./assets/tab-bar/reservation.png",
        selectedIconPath: "./assets/tab-bar/active-reservation.png",
        text: "reservation"
      }, {
        pagePath: "pages/more/index",
        iconPath: "./assets/tab-bar/services.png",
        selectedIconPath: "./assets/tab-bar/active-services.png",
        text: "services"
      }, {
        pagePath: "pages/more/index",
        iconPath: "./assets/tab-bar/more.png",
        selectedIconPath: "./assets/tab-bar/active-more.png",
        text: "more"
      }]
    }
  }

  componentDidMount() {}
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
