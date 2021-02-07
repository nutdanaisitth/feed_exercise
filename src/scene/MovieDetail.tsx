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
import { Text } from '~/src/components/Text'

import Routes from '~/src/Routes'
import { s } from '~/src/themes'
import { sizes } from 'react-native-style-tachyons'

// import { ModalAlertMessage } from '~/src/components/Modal'
// import { renderif } from '~/src/utils/renderif'
// import { setDeviceHeader, setLanguage } from '~/src/api'

const { width } = Dimensions.get('window')
const MovieDetail = observer((props) => {
    const { loading, navigation } = props
    const navigationRef = useRef<any>()



    useEffect(() => {
        // navigation.updateNavigation(navigationRef.current._navigation)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Text >{props.navigation.getParam('title')}</Text>
        </View>
    )
})

export default inject('loading', 'navigation')(MovieDetail)