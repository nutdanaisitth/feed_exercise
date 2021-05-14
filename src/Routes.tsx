import React from 'react'
import { Platform, View, Image, TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import {
  createAppContainer
} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { sizes, s } from '~/src/themes'
import colors from './themes/colors'
import Home from './scene/Home'
import MovieDetail from './scene/MovieDetail'
import { Text } from '~/src/components/Text'
import { goBack } from './common/navigate'
import Login from './scene/Login'



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
    color: 'transparent' //#FFDB61
  },
  drawerLockMode: 'locked-open',
  headerMode: 'screen',
  mode: Platform.OS === 'ios' ? 'modal' : 'card',
  cardStack: {
    gesturesEnabled: false
  },
  
  headerLeft: () => (
    <TouchableOpacity style={[s.ml2, s.flx_row, s.aic]} onPress={() => goBack()} >
      <Image style={[{ width: sizes.w2, height: sizes.h2 }]}
        source={require('~/src/assets/images/arrow_back.png')} />
      <Text style={[s.f5, s.white, s.b, s.flx_i]} ellipsizeMode='tail' numberOfLines={1}>{'Back'}</Text>

    </TouchableOpacity>
  )
}

const Routes = createStackNavigator({

  Login: {
    screen: Login,
    navigationOptions: (): any => ({ header: null })
  },
  Main: {
    screen: () => <Tabs />,
    navigationOptions: (): any => ({ header: null })
  },

  MovieDetail: {
    screen: MovieDetail,
    navigationOptions: (): any => ({
      ...navigationOptions,
      headerStyle: {
        backgroundColor: 'black'
      },
    })
  },
}, {
  initialRouteName: 'Login'
})
const AppFeed: any = createAppContainer(Routes)
export default AppFeed