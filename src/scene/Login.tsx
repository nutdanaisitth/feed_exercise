/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useRef, useEffect, useState } from 'react'
import {
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import { observer, inject } from 'mobx-react'
import { Text } from '~/src/components/Text'

import { s, sizes } from '~/src/themes'
// import { sizes } from 'react-native-style-tachyons'
import colors from '../themes/colors'
import { ScrollView } from 'react-native-gesture-handler'
import { Kohana } from 'react-native-textinput-effects';
import { api } from '../api'
import Apis from '../common/apis'
import { route } from '../common/navigate'



const Login = observer((props) => {

    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const loginRequest = () => {
        api.post(Apis.paths.login, {
            username: username,
            password: password
            // email: username,
            // password: password
        }).then(response => {
            
            props.login.access_token = response.data.token
            console.log(response)
            if(response.status == 200){
                route('Main')
            }else{
                alert(response.status)
            }

        })

    }

    const usernameInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', margin: sizes.mt3, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'ชื่อผู้ใช้งาน'}
            iconName={require('~/src/assets/images/perm.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa2 * 1.3}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            onChangeText={(text) => {setUsername(text)}}
        />
    );
    const passwordInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', margin: sizes.mt3, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'รหัสผ่าน'}
            iconName={require('~/src/assets/images/key.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa2 * 1.3}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            onChangeText={(text) => {setPassword(text)}}
            secureTextEntry={true}

        />
    );

    useEffect(() => {
    }, [])

    return (
        <View style={[s.jcc, s.flx_i, s.bg_white]}>

            <ScrollView >

                <View style={[s.mt5]}>

                    <Image resizeMode={'contain'} style={[{ width: sizes.w5, height: sizes.h3 }, s.asc, s.mb4]} source={require('~/src/assets/images/rihes.jpg')} />

                    {usernameInput}
                    {passwordInput}

                    <TouchableOpacity style={[s.ma3, s.aic, s.br3, { backgroundColor: 'purple' }]} onPress={loginRequest}>
                        <Text style={[s.f5, s.white, s.b, s.pv2]}>{'เข้าสู่ระบบ'}</Text>

                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>

    )
})

export default inject('loading', 'navigation', 'login')(Login)