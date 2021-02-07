import React from 'react'
import { Platform, View, Image } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import {
  createAppContainer
} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { sizes } from '~/src/themes'
import colors from './themes/colors'
import Home from './scene/Home'
import MovieDetail from './scene/MovieDetail'


// import { createBottomTabNavigator } from 'react-navigation-tabs'

// import { observer, inject } from 'mobx-react'

// import { CustomHeader, LinearGradientHeader, BackNavbar, SettingNavbar } from '~/src/components/Nav/Nav'

// import MainScene from '~/src/scene/MainScene'
// import ListScene from '~/src/scene/ListScene'
// import MapScene from '~/src/scene/MapScene'
// import DetailScene from '~/src/scene/DetailScene'
// import DetectScene from '~/src/scene/DetectScene'

// import colors from '~/src/common/colors'
// import { goBack, route } from '~/src/common/navigate'
// 
// import stores from '~/src/stores'



const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        title: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Image style={[{ width: sizes.w2, height: sizes.h2, tintColor }]}
            source={require('~/src/assets/images/home.png')} />
        )
      })
    },
    Favorite: {
      screen: () => <View />,
      navigationOptions: () => ({
        title: 'Favorite',
        tabBarIcon: ({ tintColor }) => (
          <Image style={[{ width: sizes.w2, height: sizes.h2, tintColor }]}
            source={require('~/src/assets/images/favorite.png')} />
        )
      })
    },
    Profile: {
      screen: () => <View />,
      navigationOptions: () => ({
        // tabBarOnPress: () => {
        //   // route('Create')
        // },
        title: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Image style={[{ width: sizes.w2, height: sizes.h2, tintColor }]}
            source={require('~/src/assets/images/perm.png')} />
        )
      })
    },

  }, {

  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    activeTintColor: colors.white,
    labelStyle: {
      fontFamily: 'SukhumvitSet',
      fontSize: sizes.f8
    },
    style: {
      borderTopLeftRadius: sizes.br4,
      borderTopRightRadius: sizes.br4,
      backgroundColor: '#242526',
      height: sizes.h3,
      position: 'absolute',
      borderTopWidth: 0

    },
    tabStyle: {
      marginVertical: sizes.mt2,

    }

  },

})

const Tabs = createAppContainer(BottomTabNavigator)

const navigationOptions = {
  headerTitleStyle: {
    textAlign: 'left',
    flexGrow: 1,
    fontFamily: 'SukhumvitSet',
    fontSize: 20,
    color: 'black' //#FFDB61
  },
  drawerLockMode: 'locked-open',
  // gesturesEnabled: false,
  headerMode: 'screen',
  mode: Platform.OS === 'ios' ? 'modal' : 'card',
  cardStack: {
    gesturesEnabled: false
  },
  headerLeft: () => (
    // <BackNavbar onPress={() => { goBack() }} />
    <View />
  )
}

const Routes = createStackNavigator({
  Main: {
    screen: () => <Tabs />,
    navigationOptions: (): any => ({ header: null })
  },

  MovieDetail: {
    screen: MovieDetail,
    navigationOptions: (): any => ({
      ...navigationOptions,
      headerStyle: {
        backgroundColor: 'red'
      },
      title: 'Detail'
    })
  },
}, {
  initialRouteName: 'Main'
})
const AppFeed: any = createAppContainer(Routes)
export default AppFeed