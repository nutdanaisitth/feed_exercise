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
    Dimensions,
    TouchableOpacity
} from 'react-native'
import { observer, inject } from 'mobx-react'
import { Text } from '~/src/components/Text'

import { s } from '~/src/themes'
import { sizes } from 'react-native-style-tachyons'
import { CardView } from '../components/Cardview'
import moment from 'moment'
import colors from '../themes/colors'
import { ScrollView } from 'react-native-gesture-handler'

const MovieDetail = observer((props) => {



    useEffect(() => {
    }, [])

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={[s.mv3, s.flx_row, s.mh2]}>
                <CardView style={[{ height: sizes.h4 * 1.3, width: sizes.w4, overflow: 'hidden' }]}>
                    <Image resizeMode={'cover'} style={[{ flex: 1 }]} source={{ uri: 'https://image.tmdb.org/t/p/w500' + props.navigation.getParam('poster_path') }} />
                </CardView>
                <View style={[s.mh2, s.flx_col, s.jcc, s.flx_i]}>
                    <View style={[s.flx_row, s.aic]}>
                        <Text style={[s.f8, s.white, s.b, s.flx_i]} ellipsizeMode='tail' numberOfLines={1}>{props.navigation.getParam('title')}</Text>
                        <Text style={[s.f8, s.gray_60, s.b, s.ml1]}>{`(${moment(props.navigation.getParam('release_date')).format('YYYY')})`}</Text>
                    </View>
                    <View style={[s.flx_row, s.aic]}>
                        <Text style={[s.f16, s.gray_60, s.flx_i]} >{props.navigation.getParam('overview')}</Text>
                    </View>
                    <View style={[s.flx_row, s.aic]}>
                        <Image resizeMode={'contain'} style={[{ width: sizes.w1, height: sizes.h1, tintColor: colors.accent }]} source={require('~/src/assets/images/star.png')} />
                        <Text style={[s.f16, s.gray_60, s.b, s.ml2]}>{props.navigation.getParam('vote_average')}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={[s.ma3, s.aic, s.br4, { backgroundColor: 'red' }]}>
                <Text style={[s.f5, s.white, s.b, s.pv2]}>{'Add to watch list'}</Text>

            </TouchableOpacity>
            <CardView style={[{ height: sizes.h4 * 1.3, width: sizes.w7, overflow: 'hidden' }, s.mt3, s.mh2]}>
                <Image resizeMode={'cover'} style={[{ flex: 1 }]} source={{ uri: 'https://image.tmdb.org/t/p/w500' + props.navigation.getParam('backdrop_path') }} />
            </CardView>
        </ScrollView>
    )
})

export default inject('loading', 'navigation', 'login')(MovieDetail)