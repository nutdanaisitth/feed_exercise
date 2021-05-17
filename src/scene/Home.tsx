/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useRef, useState, useEffect } from 'react'
import {
    View,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { observer, inject } from 'mobx-react'
// import Routes from '~/src/Routes'
import { sizes, Colors, s } from '~/src/themes'
import { Text } from '~/src/components/Text'
import colors from '../themes/colors'
import { CardView } from '../components/Cardview'
import SwipeablePanel from 'rn-swipeable-panel'
import { api } from '~/src/api'
import { Apis } from '~/src/common/apis'
import moment from 'moment'
import { route } from '../common/navigate'


const PROFILE_IMAGE_SIZE: number = sizes.h3 / 1.5

const Home = observer((props) => {


    useEffect(() => {
        getList(1, 'refresh')
    }, [props.responses.success])

    // useEffect(() => {
    //     getList(1, 'refresh')
    // }, [])


    const [resultList, setResultList] = useState([] as any);
    const [page, setPage] = useState(0);
    const [isNext, setIsNext] = useState(false);
    const [isLoading, setIsLoading] = useState(false);








    const renderItemVertical = (item) => {
        return (
            <TouchableOpacity style={[s.mh3, s.mb3, s.br4, { backgroundColor: 'white', borderColor: '#91627b', borderWidth: 2 }]} onPress={() => _gotoEditForm(item)}>
                <View style={[s.pa2, s.flx_row]}>
                    <View style={[ s.flx_row, s.jcsb, s.flx_i]}>
                        <View style={[s.flx_col, s.jcc, {}]}>
                            <View style={[s.flx_row]}>
                                <Image resizeMode={'contain'} style={[{ width: sizes.w1, height: sizes.h1, tintColor: colors.accent }]} source={require('~/src/assets/images/star.png')} />
                                <Text style={[s.f8, s.black, s.b, s.ml1]} ellipsizeMode='tail' numberOfLines={1}>{'ชื่อโครงการ'}</Text>
                            </View>
                            <Text style={[s.f5, s.black, s.b, s.mb1, s.ml3]}>{`${item.project_name}`}</Text>
                            <View style={[s.flx_row]}>
                                <Image resizeMode={'contain'} style={[{ width: sizes.w1, height: sizes.h1, tintColor: colors.accent }]} source={require('~/src/assets/images/star.png')} />
                                <Text style={[s.f8, s.black, s.b, s.ml1]} ellipsizeMode='tail' numberOfLines={1}>{'ชื่อ'}</Text>
                            </View>
                            <Text style={[s.f6, s.black, s.b, s.mb1, s.ml3]} ellipsizeMode='tail' numberOfLines={1}>{item.emp_name}</Text>
                            <View style={[s.flx_row]}>
                                <Image resizeMode={'contain'} style={[{ width: sizes.w1, height: sizes.h1, tintColor: colors.accent }]} source={require('~/src/assets/images/star.png')} />
                                <Text style={[s.f8, s.black, s.b, s.ml1]} ellipsizeMode='tail' numberOfLines={1}>{'สังกัด'}</Text>
                            </View>
                            <Text style={[s.f8, s.black, s.b, s.mb1, s.ml3]} ellipsizeMode='tail' numberOfLines={1}>{item.emp_dep}</Text>
                        </View>
                        <View style={[s.flx_col,]}>
                            <Text style={[s.f10, s.black_50, s.b, s.ml1]}>{`created at: (${moment(item.created_at).format('DD/MM/YYYY')})`}</Text>
                            <Text style={[s.f10, s.red_50, s.b, s.ml1, s.asfe]}>{`done at: (${moment(item.created_at).format('DD/MM/YYYY')})`}</Text>
                            <Text style={[s.f10, s.black, s.b, s.ml1, s.asfe]}>{`update at: (${moment(item.created_at).format('DD/MM/YYYY')})`}</Text>

                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        );
    }


    const _gotoEditForm = (item: any) => {
        route('EditForm', { 
            id: item.id,
            emp_name: item.emp_name, 
            emp_dep: item.emp_dep, 
            project_name: item.project_name, 
            name: item.name, 
            thai_to_eng_page: item.thai_to_eng_page, 
            eng_to_thai_page: item.eng_to_thai_page,
            compose_doc_page: item.compose_doc_page,
            done_at:item.done_item,
            note:item.note,
            created_at:item.created_at
         })

    }

    const _onEndReached = () => {
        // if (!isLoading && isNext) {
        //     getList(page + 1, '')
        // }
    }

    const getList = (pageCurrect: number, type: string) => {
        setIsLoading(true)
        api.get(Apis.paths.getList, {
            headers: {
                Authorization: "Bearer " + props.login.access_token
            },
            params: {
                page: pageCurrect
            }
        }).then(response => {
            console.log(response)
            if (type === 'refresh') {
                setIsLoading(false)
                setPage(response.data.current_page)
                setResultList(response.data.data)
                setIsNext(response.data.total !== response.data.current_page)
            }
            // else {
            //     setIsLoading(false)
            //     setPage(response.data.current_page)
            //     setResultList([...resultList, ...response.data.data])
            //     setIsNext(response.data.total !== response.data.current_page)


            // }
        })
    }

    const _handleRefresh = () => {
        getList(1, 'refresh')
    }


    return (
        <View style={{ flex: 1, backgroundColor: Colors.grayD2 }}>
            <View style={{ flex: 1 }}>
                <View style={[s.flx_row, s.jcsb, s.aic]}>
                    <Text style={[s.mv3, s.f4, s.mh3, s.b, { color: 'purple' }]}>{'หน้าหลัก'}</Text>
                    <TouchableOpacity style={[s.ma3, s.aic, s.br3, s.flx_row, { backgroundColor: 'red' }]} onPress={() => route('AddForm')}>
                        <Text style={[s.f5, s.white, s.b, s.pv2, s.pl3]}>{'เพิ่มรายการ'}</Text>
                        <Image resizeMode={'contain'} style={[{ width: sizes.w2, height: sizes.h2 }, s.mh2]} source={require('~/src/assets/images/add.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        style={[s.pv1, { marginBottom: sizes.h3 }]}
                        showsVerticalScrollIndicator={true}
                        ListFooterComponent={<View style={[s.pr3]} />}
                        ListHeaderComponent={<View style={[s.pl3]} />}
                        data={resultList}
                        refreshing={isLoading}
                        onRefresh={_handleRefresh}
                        onEndReached={_onEndReached}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => renderItemVertical(item)}
                    />
                </View>
            </View>


        </View>
    )
})

export default inject('loading', 'navigation', 'login', 'responses')(Home)