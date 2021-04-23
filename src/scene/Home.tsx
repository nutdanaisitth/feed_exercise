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
import { sizes, s } from '~/src/themes'
import { Text } from '~/src/components/Text'
import colors from '../themes/colors'
import { CardView } from '../components/Cardview'
import { api } from '~/src/api'
import { Apis } from '~/src/common/apis'
import Search from 'react-native-search-box'
import _ from 'lodash'
import axios from 'axios'






const Home = observer((props) => {

    let refSearch: Search = useRef<Search>()
    let cancel
    const CancelToken = axios.CancelToken;

    // let refFlatlist: any = useRef<FlatList>()


    useEffect(() => {
        refSearch.onFocus()
    }, [])


    const [resultList, setResultList] = useState([] as any);



    const renderItemVertical = (item) => {
        return (
            <TouchableOpacity style={[s.mh3, s.mv2, s.br4, s.bg_gray_40,]}>
                <View style={[s.flx_row,]}>
                    <CardView style={[{ height: sizes.h3 * 1.2, width: sizes.w3 * 1.2, overflow: 'hidden' }]}>
                        <Image resizeMode={'cover'} style={[{ flex: 1 }]} source={{ uri: item.owner.avatar_url }} />
                    </CardView>
                    <View style={[s.mh2, s.flx_col, s.jcc, s.flx_i]}>
                        <View style={[s.flx_row, s.aic]}>
                            <Text style={[s.f4, s.white, s.b, s.flx_i]} ellipsizeMode='tail' numberOfLines={1}>{item.full_name}</Text>
                            <Text style={[s.f8, s.gray_60, s.b, s.ml1, s.mt1]}>{item.length}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }




    const getList = (qSearch: string) => {
        // Cancel previous request
        if (cancel !== undefined) {
            cancel()
        }
        api.get(Apis.paths.getList, {
            params: {
                q: qSearch
            },
            cancelToken: new CancelToken(function executor(c) {
                cancel = c;
            })
        }).then(response => {
            var result = response.data.items
            if (result.length > 10) {
                setResultList(_.slice(result, 0, 10))
            } else
                setResultList(result)
        }).catch((error) => {
            if (axios.isCancel(error)) {
                console.log("Request canceled");
            }
        })
    }

    const onChangeText = (text: string) => {
        return new Promise<void>((resolve, reject) => {
            if (text.length > 2) {
                setTimeout(() => {
                    getList(text)
                },
                    300);
            }
            resolve();
        });
    }

    const onSearch = (searchText: string) => {
        return new Promise<void>((resolve, reject) => {
            if (searchText.length > 2) {
                getList(searchText)
            }
            resolve();
        });
    }

    const onCancel = () => {
        return new Promise<void>((resolve, reject) => {
            resolve();
        });
    }

    const checkListEmpty = () => {
        if (resultList.length == 0) {
            return (
                <View style={[s.flx_i, s.aic, s.jcc]}>
                    <Text style={[s.mv2, s.f3, s.mh3, s.gray_40, s.b]}>{'No data found.'}</Text>
                </View>
            )
        }
        else {
            return (
                <FlatList
                    style={[s.pv1, { marginBottom: sizes.h3 }]}
                    indicatorStyle={'white'}
                    ListFooterComponent={<View style={[s.pr3]} />}
                    ListHeaderComponent={<View style={[s.pl3]} />}
                    data={resultList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => renderItemVertical(item)}
                />
            )
        }

    }


    return (
        <View style={{ flex: 1, backgroundColor: colors.gray69 }}>
            <View style={{ flex: 1 }}>
                <View style={[s.flx_row, s.jcsb, s.aic]}>
                    <Text style={[s.mv2, s.f4, s.mh3, s.white, s.b]}>{'Search Github'}</Text>
                </View>
                <View style={[s.mh3, s.mb3]}>
                    <Search
                        ref={(ref) => refSearch = ref}
                        onSearch={onSearch}
                        onChangeText={onChangeText}
                        onCancel={onCancel}
                        backgroundColor={colors.primaryRed}
                        inputStyle={[s.br3]}
                        borderRadius={sizes.br3}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    {checkListEmpty()}
                </View>
            </View>

        </View>
    )
})

export default inject('loading', 'navigation')(Home)