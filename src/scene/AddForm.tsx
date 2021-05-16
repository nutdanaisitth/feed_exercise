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
    TouchableOpacity,
    TouchableOpacityComponent
} from 'react-native'
import { observer, inject } from 'mobx-react'
import { Text } from '~/src/components/Text'

import { Colors, s, sizes } from '~/src/themes'
// import { sizes } from 'react-native-style-tachyons'
import colors from '../themes/colors'
import { ScrollView } from 'react-native-gesture-handler'
import { Kohana } from 'react-native-textinput-effects';
import { api } from '../api'
import Apis from '../common/apis'
import { route } from '../common/navigate'
import moment from 'moment'
import ReactNativePickerModule from 'react-native-picker-module'
import DateTimePicker from '@react-native-community/datetimepicker';






const AddForm = observer((props) => {

    let refPickerProject = useRef<ReactNativePickerModule>(null)


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [selectedValue, setSelectedValue] = useState('')
    const [projectName, setProjectName] = useState(['IMPACT 2019', 'IMPACT 2020', 'IMPACT 2021'])
    const [thaiToEng, setThaiToEng] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [engToThai, setEngToThai] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [composeEng, setComposeEng] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const loginRequest = () => {
        api.post(Apis.paths.login, {
            username: "nutdanai",
            password: "nutdanai2021!"
            // email: username,
            // password: password
        }).then(response => {
            debugger
            props.login.access_token = response.data.token
            console.log(response)
            if (response.status == 200) {
                route('Main')
            }

        })

    }

    const txtCreatedAtInput = (

        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt1, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            labelStyle={{ color: '#91627b' }}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            onChangeText={(text) => { setPassword(text) }}
            value={moment().format('DD/MM/YYYY')}
            editable={false}

        />
    );


    const txtTitleInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt1, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'เรื่อง'}
            iconName={require('~/src/assets/images/key.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            labelStyle={{ color: '#91627b' }}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            onChangeText={(text) => { setPassword(text) }}

        />
    );
    const txtHeadInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt1, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'เรียน'}
            iconName={require('~/src/assets/images/key.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            labelStyle={{ color: '#91627b' }}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            onChangeText={(text) => { setPassword(text) }}

        />
    );
    const txtEmpNameInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt1, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'ข้าพเจ้า'}
            iconName={require('~/src/assets/images/key.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            labelStyle={{ color: '#91627b' }}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            onChangeText={(text) => { setPassword(text) }}

        />
    );
    const txtEmpPositionInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt1, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'ตำแหน่ง'}
            iconName={require('~/src/assets/images/key.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            labelStyle={{ color: '#91627b' }}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            onChangeText={(text) => { setPassword(text) }}

        />
    );
    const txtEmpOrgidInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt1, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'สังกัด'}
            iconName={require('~/src/assets/images/perm.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            labelStyle={{ color: '#91627b' }}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            onChangeText={(text) => { setUsername(text) }}
        />
    );
    const txtPtojectInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt2, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'ชื่อเอกสาร'}
            iconName={require('~/src/assets/images/perm.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            labelStyle={{ color: '#91627b' }}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            onChangeText={(text) => { setUsername(text) }}
        />
    );
    const txtRequestPtojectInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt2, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'เลือก'}
            iconName={require('~/src/assets/images/perm.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            labelStyle={{ color: '#91627b' }}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            editable={false}
            value={selectedValue}
            showIcon={true}
            pointerEvents={'none'}
            pointerEventsProps={'none'}

        />
    );
    const txtDoneAtInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt2, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'วัน/เดือน/ปี'}
            iconName={require('~/src/assets/images/perm.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            labelStyle={{ color: '#91627b' }}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            editable={false}
            value={selectedValue}
            showIcon={true}
            pointerEvents={'none'}
            pointerEventsProps={'none'}

        />
    );

    const onChange = (event, selectedDate) => {
        setShow(false)
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    useEffect(() => {
    }, [])

    return (
        <View style={[s.jcc, s.flx_i, { backgroundColor: Colors.grayD2 }]}>

            <ScrollView >

                <View style={[s.mt2, s.mh3]}>
                    <Text style={[s.mv2, s.f4, s.b, { color: 'purple' }]}>{'เพิ่มแบบฟอร์ม'}</Text>

                    <Text style={[s.f6, s.black, s.b, s.pv2]}>{'วันที่:'}</Text>
                    {txtCreatedAtInput}
                    <Text style={[s.f6, s.black, s.b, s.pv2]}>{'เรื่อง:'}</Text>
                    {txtTitleInput}
                    <Text style={[s.f6, s.black, s.b, s.pv2]}>{'เรียน:'}</Text>
                    {txtHeadInput}
                    <Text style={[s.f6, s.black, s.b, s.pv2]}>{'ข้าพเจ้า:'}</Text>
                    {txtEmpNameInput}
                    <Text style={[s.f6, s.black, s.b, s.pv2]}>{'ตำแหน่ง:'}</Text>
                    {txtEmpPositionInput}
                    <Text style={[s.f6, s.black, s.b, s.pv2]}>{'สังกัด:'}</Text>
                    {txtEmpOrgidInput}
                    <Text style={[s.f6, s.black, s.b, s.pv2]}>{'มีความประสงค์ขอใช้บริการเพื่อใช้ในงาน/โครงการ:'}</Text>
                    <TouchableOpacity onPress={() => refPickerProject.current?.show()} >
                        {txtRequestPtojectInput}
                    </TouchableOpacity>
                    <Text style={[s.f6, s.black, s.b, s.pv2]}>{'ชื่อเอกสาร:'}</Text>
                    {txtPtojectInput}

                    <Text style={[s.f6, s.black, s.b, s.pv2]}>{'1.แปลเอกสาร:'}</Text>


                    <View style={[s.flx_col]}>
                        <Text style={[s.f6, s.black, s.b, s.pv2]}>{'ภาษาไทยเป็นภาษาอังกฤษ โดยมีต้นฉบับภาษาไทย'}</Text>
                        <View style={[s.flx_row]}>
                            <Text style={[s.f6, s.black, s.b, s.pv2, s.mr3]}>{'จำนวน'}</Text>
                            <TouchableOpacity onPress={() => refPickerProject.current?.show()} >
                                {txtRequestPtojectInput}
                            </TouchableOpacity>
                            <Text style={[s.f6, s.black, s.b, s.pv2, s.ml3]}>{'หน้า'}</Text>

                        </View>
                        <Text style={[s.f6, s.black, s.b, s.pv2]}>{'ภาษาอังกฤษเป็นภาษาอังกฤษ โดยมีต้นฉบับภาษาอังกฤษ'}</Text>
                        <View style={[s.flx_row]}>
                            <Text style={[s.f6, s.black, s.b, s.pv2, s.mr3]}>{'จำนวน'}</Text>
                            <TouchableOpacity onPress={() => refPickerProject.current?.show()} >
                                {txtRequestPtojectInput}
                            </TouchableOpacity>
                            <Text style={[s.f6, s.black, s.b, s.pv2, s.ml3]}>{'หน้า'}</Text>

                        </View>

                    </View>

                    <Text style={[s.f6, s.black, s.b, s.pv2]}>{'2.การเรียบเรียงเอกสาร (Edit):'}</Text>

                    <Text style={[s.f6, s.black, s.b, s.pv2]}>{'โดยมีต้นฉบับภาษาอังกฤษ'}</Text>
                    <View style={[s.flx_row]}>
                        <Text style={[s.f6, s.black, s.b, s.pv2, s.mr3]}>{'จำนวน'}</Text>
                        <TouchableOpacity onPress={() => refPickerProject.current?.show()} >
                            {txtRequestPtojectInput}
                        </TouchableOpacity>
                        <Text style={[s.f6, s.black, s.b, s.pv2, s.ml3]}>{'หน้า'}</Text>

                    </View>

                    <Text style={[s.f6, s.black, s.b, s.pv2]}>{'ต้องการรับเอกสารที่ดำเนินการแล้วเสร็จในวันที่:'}</Text>
                    <TouchableOpacity onPress={() => setShow(true)} >
                        {txtDoneAtInput}
                    </TouchableOpacity>

                    {show && (
                        <DateTimePicker
                            timeZoneOffsetInMinutes={0}
                            value={date}
                            mode={'date'}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                            
                        />
                    )}


                    <ReactNativePickerModule
                        pickerRef={refPickerProject}
                        value={selectedValue}
                        title={'ชื่องาน/โครงการ'}
                        items={projectName}
                        onValueChange={(index) => {
                            setSelectedValue(index)
                        }}
                        cancelButton={'ยกเลิก'}
                        titleStyle={[s.f5]}
                        contentContainerStyle={[s.br3]}
                    />
                    {/* <ReactNativePickerModule
                        pickerRef={refRNPicker}
                        value={selectedValue}
                        title={'ชื่องาน/โครงการ'}
                        items={projectName}
                        onValueChange={(index) => {
                            setSelectedValue(index)
                        }}
                        cancelButton={'ยกเลิก'}
                        titleStyle={[s.f5]}
                        contentContainerStyle={[s.br3]}
                    />
                    <ReactNativePickerModule
                        pickerRef={refRNPicker}
                        value={selectedValue}
                        title={'ชื่องาน/โครงการ'}
                        items={projectName}
                        onValueChange={(index) => {
                            setSelectedValue(index)
                        }}
                        cancelButton={'ยกเลิก'}
                        titleStyle={[s.f5]}
                        contentContainerStyle={[s.br3]}
                    />
                    <ReactNativePickerModule
                        pickerRef={refRNPicker}
                        value={selectedValue}
                        title={'ชื่องาน/โครงการ'}
                        items={projectName}
                        onValueChange={(index) => {
                            setSelectedValue(index)
                        }}
                        cancelButton={'ยกเลิก'}
                        titleStyle={[s.f5]}
                        contentContainerStyle={[s.br3]}
                    /> */}

                    <TouchableOpacity style={[s.ma3, s.aic, s.br3, { backgroundColor: 'purple' }]} onPress={loginRequest}>
                        <Text style={[s.f5, s.white, s.b, s.pv2]}>{'เข้าสู่ระบบ'}</Text>
                    </TouchableOpacity>


                </View>

            </ScrollView>
        </View>

    )
})

export default inject('loading', 'navigation', 'login')(AddForm)