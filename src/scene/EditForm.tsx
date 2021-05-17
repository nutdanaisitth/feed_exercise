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
import { goBack, route } from '../common/navigate'
import moment from 'moment'
import ReactNativePickerModule from 'react-native-picker-module'
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios'






const EditForm = observer((props) => {

    let refPickerProject = useRef<ReactNativePickerModule>(null)
    let refPickerProjectThaiToEng = useRef<ReactNativePickerModule>(null)
    let refPickerProjectEngToThai = useRef<ReactNativePickerModule>(null)
    let refPickerProjectComposeEng = useRef<ReactNativePickerModule>(null)




    const [txtCreated_at, StxtCreated_at] = useState('');
    const [txtTitle1, StxtTitle1] = useState('');
    const [txtHead, StxtHead] = useState('');
    const [txtEmpName, StxtEmpName] = useState(props.navigation.getParam('emp_name'));
    const [txtEmpPosition, StxtEmpPosition] = useState('');
    const [txtEmpOrgid, StxtEmpOrgid] = useState('');
    // const [txtProject, StxtProject] = useState('');
    const [txtName, StxtName] = useState(props.navigation.getParam('name'));
    // const [thai_to_eng_page, Sthai_to_eng_page] = useState('');
    // const [eng_to_thai_page, Seng_to_thai_page] = useState('');
    // const [compose_doc_page, Scompose_doc_page] = useState('');
    const [done_at, Sdone_at] = useState('');
    const [txtNote, StxtNote] = useState(props.navigation.getParam('note'));


    const [selectedValue, setSelectedValue] = useState(props.navigation.getParam('project_name'))
    const [selectedThaiToEng, setValThaiToEng] = useState(props.navigation.getParam('thai_to_eng_page') ? props.navigation.getParam('thai_to_eng_page').toString() : props.navigation.getParam('thai_to_eng_page'))
    const [selectedEngToThai, setValEngToThai] = useState(props.navigation.getParam('eng_to_thai_page') ? props.navigation.getParam('eng_to_thai_page').toString() : props.navigation.getParam('eng_to_thai_page'))
    const [selectedComposeEng, setValComposeEng] = useState(props.navigation.getParam('compose_doc_page') ? props.navigation.getParam('compose_doc_page').toString() : props.navigation.getParam('compose_doc_page'))
    const [projectName, setProjectName] = useState(['IMPACT 2019', 'IMPACT 2020', 'IMPACT 2021'])
    const [thaiToEng, setThaiToEng] = useState(['0', '1', '2', '3', '4', '5'])
    const [engToThai, setEngToThai] = useState(['0', '1', '2', '3', '4', '5'])
    const [composeEng, setComposeEng] = useState(['0', '1', '2', '3', '4', '5'])


    const [date, setDate] = useState(moment(props.navigation.getParam('done_at')).format('YYYY-MM-DD'));
    const [show, setShow] = useState(false);


    const editFormRequest = async () => {
        props.responses.clearResponses()


        api.put(Apis.paths.updateForm, {
           
           
            "id":  props.navigation.getParam('id'),
            "txtCreated_at": moment().format('YYYY-MM-DD'),
            "txtTitle1": txtTitle1,
            "txtHead": txtHead,
            "txtEmpName": txtEmpName,
            "txtEmpPosition": txtEmpPosition,
            "txtEmpOrgid": txtEmpOrgid,
            "txtProject": selectedValue,
            "txtName": txtName,
            "thai_to_eng_page_title": "1",
            "thai_to_eng_page": selectedThaiToEng,
            "eng_to_thai_page_title": "1",
            "eng_to_thai_page": selectedEngToThai,
            "compose_doc_page_title": "1",
            "compose_doc_page": selectedComposeEng,
            "done_at": date,
            "txtNote": txtNote
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + props.login.access_token,
                },

            }).then(response => {
                console.log("response: ", response)
                if (response.status === 200) {
                    props.responses.setSuccess()
                    goBack()
                } else {
                    alert(response.status)
                }
                // return response
            }).catch(error => {
                console.log(error.response);
            })

    }

    const deleteFormRequest = async () => {
        props.responses.clearResponses()
        api.delete(Apis.paths.deleteForm + props.navigation.getParam('id'), {
            headers: {
                Authorization: "Bearer " + props.login.access_token
            },
        }).then(response => {
            console.log(response)
            if (response.status == 200) {
                props.responses.setSuccess()
                goBack()
            } else {
                alert(response.status)
            }
        })

    }

    const saveButton = () => {
        return (
            <View style={[s.flx_row, { flex: 0.5 }, s.jcfe]}>
                <TouchableOpacity style={[s.mv3, s.br3, s.flx_row, s.aic, { backgroundColor: 'purple' }]} onPress={editFormRequest}>
                    <Text style={[s.f5, s.white, s.b, s.pv2, s.pl4]}>{'บันทึก'}</Text>
                    <Image resizeMode={'contain'} style={[{ width: sizes.w2, height: sizes.h2 }, s.mr4, s.ml2]} source={require('~/src/assets/images/save.png')} />
                </TouchableOpacity>
            </View>
        )
    }

    const txtCreatedAtInput = (

        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt1, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            iconName={require('~/src/assets/images/date.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            value={moment(props.navigation.getParam('created_at')).format('YYYY-MM-DD')}
            editable={false}

        />
    );


    const txtTitleInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt1, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'เรื่อง'}
            iconName={require('~/src/assets/images/sheet.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            onChangeText={(text) => { StxtTitle1(text) }}

        />
    );
    const txtHeadInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt1, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'เรียน'}
            iconName={require('~/src/assets/images/sheet.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            onChangeText={(text) => { StxtHead(text) }}

        />
    );
    const txtEmpNameInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt1, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'ข้าพเจ้า'}
            iconName={require('~/src/assets/images/sheet.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            onChangeText={(text) => { StxtEmpName(text) }}

        />
    );
    const txtEmpPositionInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt1, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'ตำแหน่ง'}
            iconName={require('~/src/assets/images/sheet.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            onChangeText={(text) => { StxtEmpPosition(text) }}

        />
    );
    const txtEmpOrgidInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt1, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'สังกัด'}
            iconName={require('~/src/assets/images/sheet.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            onChangeText={(text) => { StxtEmpOrgid(text) }}
        />
    );
    const txtPtojectInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt2, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'ชื่อเอกสาร'}
            iconName={require('~/src/assets/images/sheet.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            onChangeText={(text) => { StxtName(text) }}
        />
    );
    const txtRequestPtojectInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt2, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'เลือก'}
            iconName={require('~/src/assets/images/sheet.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            editable={false}
            value={selectedValue}
            showIcon={true}
            pointerEvents={'none'}
            pointerEventsProps={'none'}
            iconShowIcon={require('~/src/assets/images/select.png')}


        />
    );
    const txtDoneAtInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt2, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'เลือกวันที่จะดำเนินการแล้วเสร็จ'}
            iconName={require('~/src/assets/images/date.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            editable={false}
            value={date}
            showIcon={true}
            pointerEvents={'none'}
            pointerEventsProps={'none'}
            iconShowIcon={require('~/src/assets/images/select.png')}

        />
    );
    const txtNoteInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt2, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'หมายเหตุ'}
            iconName={require('~/src/assets/images/sheet.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            onChangeText={(text) => { StxtNote(text) }}
            multiline={true}
        />
    );
    const txtThaiToEngInput = (
        <Kohana

            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt2, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'เลือก'}
            iconName={require('~/src/assets/images/sheet.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            editable={false}
            value={selectedThaiToEng}
            showIcon={true}
            pointerEvents={'none'}
            pointerEventsProps={'none'}
            iconShowIcon={require('~/src/assets/images/select.png')}


        />
    );
    const txtEngToThaiInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt2, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'เลือก'}
            iconName={require('~/src/assets/images/sheet.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            editable={false}
            value={selectedEngToThai}
            showIcon={true}
            pointerEvents={'none'}
            pointerEventsProps={'none'}
            iconShowIcon={require('~/src/assets/images/select.png')}


        />
    );
    const txtComposeEngInput = (
        <Kohana
            style={{ backgroundColor: '#f9f5ed', marginBottom: sizes.mt2, borderRadius: sizes.br3, borderWidth: 2, borderColor: '#91627b' }}
            label={'เลือก'}
            iconName={require('~/src/assets/images/sheet.png')}
            iconColor={colors.accent}
            inputPadding={sizes.pa1}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
            editable={false}
            value={selectedComposeEng}
            showIcon={true}
            pointerEvents={'none'}
            pointerEventsProps={'none'}
            iconShowIcon={require('~/src/assets/images/select.png')}


        />
    );

    const onChange = (event, selectedDate) => {

        setShow(false)
        if (selectedDate == undefined) {
            setDate('')
            // refDatePicker.value = null
        } else {
            setDate(moment(selectedDate).format('YYYY-MM-DD'));
        }
        // console.log(moment(currentDate).format('DD/MM/YYYY'))

    };

    useEffect(() => {
    }, [])

    return (
        <View style={[s.jcc, s.flx_i, { backgroundColor: Colors.grayD2 }]}>

            <ScrollView >

                <View style={[s.mt2, s.mh3]}>
                    <View style={[s.jcsb, s.flx_row, s.aic]}>
                        <Text style={[s.mv2, s.f4, s.b, { color: 'purple' }]}>{'รายละเอียดแบบฟอร์ม'}</Text>
                        <TouchableOpacity style={[s.aic, s.br3, s.flx_row, { backgroundColor: 'red' }]} onPress={deleteFormRequest}>
                            <Text style={[s.f5, s.white, s.b, s.pv2, s.pl3]}>{'ลบ'}</Text>
                            <Image resizeMode={'contain'} style={[{ width: sizes.w2, height: sizes.h2 }, s.mh2]} source={require('~/src/assets/images/delete.png')} />
                        </TouchableOpacity>
                    </View>

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
                            <TouchableOpacity onPress={() => refPickerProjectThaiToEng.current?.show()} style={[{ flex: 0.6 }]}>
                                {txtThaiToEngInput}
                            </TouchableOpacity>
                            <Text style={[s.f6, s.black, s.b, s.pv2, s.ml3]}>{'หน้า'}</Text>
                        </View>
                        <Text style={[s.f6, s.black, s.b, s.pv2]}>{'ภาษาอังกฤษเป็นภาษาอังกฤษ โดยมีต้นฉบับภาษาอังกฤษ'}</Text>
                        <View style={[s.flx_row, s.flx_i]}>
                            <Text style={[s.f6, s.black, s.b, s.pv2, s.mr3]}>{'จำนวน'}</Text>
                            <TouchableOpacity onPress={() => refPickerProjectEngToThai.current?.show()} style={[{ flex: 0.6 }]}>
                                {txtEngToThaiInput}
                            </TouchableOpacity>
                            <Text style={[s.f6, s.black, s.b, s.pv2, s.ml3]}>{'หน้า'}</Text>

                        </View>

                    </View>

                    <Text style={[s.f6, s.black, s.b, s.pv2]}>{'2.การเรียบเรียงเอกสาร (Edit):'}</Text>

                    <Text style={[s.f6, s.black, s.b, s.pv2]}>{'โดยมีต้นฉบับภาษาอังกฤษ'}</Text>
                    <View style={[s.flx_row]}>
                        <Text style={[s.f6, s.black, s.b, s.pv2, s.mr3]}>{'จำนวน'}</Text>
                        <TouchableOpacity onPress={() => refPickerProjectComposeEng.current?.show()} style={[{ flex: 0.6 }]}>
                            {txtComposeEngInput}
                        </TouchableOpacity>
                        <Text style={[s.f6, s.black, s.b, s.pv2, s.ml3]}>{'หน้า'}</Text>

                    </View>

                    <Text style={[s.f6, s.black, s.b, s.pv2]}>{'ต้องการรับเอกสารที่ดำเนินการแล้วเสร็จในวันที่:'}</Text>
                    <TouchableOpacity onPress={() => setShow(true)} >
                        {txtDoneAtInput}
                    </TouchableOpacity>

                    <Text style={[s.f6, s.black, s.b, s.pv2]}>{'หมายเหตุ:'}</Text>
                    {txtNoteInput}

                    {show && (
                        <DateTimePicker
                            timeZoneOffsetInMinutes={-60}
                            value={new Date()}
                            mode={'date'}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                            minimumDate={new Date()}
                            dateFormat={'shortdate'}


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
                        titleStyle={[s.f5]}
                        contentContainerStyle={[s.br3]}
                    />
                    <ReactNativePickerModule
                        pickerRef={refPickerProjectThaiToEng}
                        value={selectedThaiToEng}
                        title={'จำนวนหน้า'}
                        items={thaiToEng}
                        onValueChange={(index) => {
                            setValThaiToEng(index)
                        }}
                        titleStyle={{ fontsize: 48 }}
                        contentContainerStyle={[s.h4]}
                    />
                    <ReactNativePickerModule
                        pickerRef={refPickerProjectEngToThai}
                        value={selectedEngToThai}
                        title={'จำนวนหน้า'}
                        items={engToThai}
                        onValueChange={(index) => {
                            setValEngToThai(index)
                        }}
                        titleStyle={[s.f5]}
                        contentContainerStyle={[s.br3]}
                    />
                    <ReactNativePickerModule
                        pickerRef={refPickerProjectComposeEng}
                        value={selectedComposeEng}
                        title={'จำนวนหน้า'}
                        items={composeEng}
                        onValueChange={(index) => {
                            setValComposeEng(index)
                        }}
                        titleStyle={[s.f5]}
                        contentContainerStyle={[s.br3]}
                    />

                    {saveButton()}

                </View>

            </ScrollView>
        </View>

    )
})

export default inject('loading', 'navigation', 'login', 'responses')(EditForm)