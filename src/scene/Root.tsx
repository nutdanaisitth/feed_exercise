/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useRef, useEffect } from 'react'
import {
    View,
    Image,
    Dimensions
} from 'react-native'
import { observer, inject } from 'mobx-react'
import Routes from '~/src/Routes'
import { s, sizes } from '~/src/themes'


const { width } = Dimensions.get('window')
const Root = observer((props) => {
    const { loading, navigation } = props
    const navigationRef = useRef<any>()



    useEffect(() => {
        navigation.updateNavigation(navigationRef.current._navigation)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Routes ref={navigationRef} />
            {
                loading.isLoading &&
                <View style={[s.flx_i, s.absolute_fill, s.bg_transparent_60, s.aic, s.jcc]}>
                    <View style={{borderRadius: sizes.br5}}>
                    <Image
                        source={require('~/src/assets/images/labBo.gif')} 
                        style={{ width: width / 3, height: width / 3}}
                    />
                    </View>
                </View>
            }
        </View>
    )
})

export default inject('loading', 'navigation')(Root)