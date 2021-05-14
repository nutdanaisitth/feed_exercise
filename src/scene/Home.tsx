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

    let refSwipeable: SwipeablePanel = useRef<SwipeablePanel>()
    let refFlatlist: any = useRef<FlatList>()


    useEffect(() => {
        openPanel()
        // getList(1, 'refresh')
    }, [])


    const [isPanelActive, setIsPanelActive] = useState(false);
    const [resultList, setResultList] = useState([] as any);
    const [page, setPage] = useState(0);
    const [isNext, setIsNext] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLarge, setisLarge] = useState(false);
    const [expand, setExpand] = useState('Expand');




    const openPanel = () => {
        setIsPanelActive(true);
    };

    const closePanel = () => {

        setIsPanelActive(false);
        setTimeout(() => {
            openPanel();
        }, 1000);
    };

    const onPressExpand = () => {
        if (!isLarge) {
            refSwipeable._animateToLargePanel()
            setisLarge(true)
            setExpand('Minimize')
        } else {
            refSwipeable._animateToSmallPanel()
            setisLarge(false)
            setExpand('Expand')
            refFlatlist.scrollToOffset({ animated: true, offset: 0 })

        }
    }
    const renderItemHorizontal = (item) => {
        return (
            <TouchableOpacity  onPress={() => _gotoMovieDetail(item)}>
                <View style={[{ width: sizes.w3 * 1.7 }]}>
                    <View style={[s.mv1, s.flx_col]}>
                        <CardView style={[{ height: sizes.h4, overflow: 'hidden' }]}>
                            <Image resizeMode={'cover'} style={[{ flex: 1 }]} source={{ uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path }} />
                        </CardView>
                        <View style={[s.flx_row, s.mt3, s.aic]}>
                            <Text style={[s.f4, s.white, s.b, s.flx_i]} ellipsizeMode='tail' numberOfLines={1}>{item.title}</Text>
                            <Text style={[s.f8, s.gray_60, s.b, s.ml1, s.mt1]}>{`(${moment(item.release_date).format('YYYY')})`}</Text>
                        </View>
                        <View style={[s.flx_row, s.aic]}>
                            <Image resizeMode={'contain'} style={[{ width: sizes.w1, height: sizes.h1, tintColor: colors.accent }]} source={require('~/src/assets/images/star.png')} />
                            <Text style={[s.f16, s.gray_60, s.b, s.ml2]}>{item.vote_average}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    const renderItemVertical = (item) => {
        return (
            <TouchableOpacity style={[s.mh3]} onPress={() => _gotoMovieDetail(item)}>
                <View style={[s.mv1, s.flx_row]}>
                    <CardView style={[{ height: sizes.h3 * 1.4, width: sizes.w3 * 1.2, overflow: 'hidden' }]}>
                        <Image resizeMode={'cover'} style={[{ flex: 1 }]} source={{ uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path }} />
                    </CardView>
                    <View style={[s.mh2, s.flx_col, s.jcc, s.flx_i]}>
                        <View style={[s.flx_row, s.aic]}>
                            <Text style={[s.f4, s.white, s.b, s.flx_i]} ellipsizeMode='tail' numberOfLines={1}>{item.title}</Text>
                            <Text style={[s.f8, s.gray_60, s.b, s.ml1, s.mt1]}>{`(${moment(item.release_date).format('YYYY')})`}</Text>
                        </View>
                        <View style={[s.flx_row, s.aic]}>
                            <Image resizeMode={'contain'} style={[{ width: sizes.w1, height: sizes.h1, tintColor: colors.accent }]} source={require('~/src/assets/images/star.png')} />
                            <Text style={[s.f16, s.gray_60, s.b, s.ml2]}>{item.vote_average}</Text>
                        </View>
                        <View style={[s.flx_row, s.aic]}>
                            <Text style={[s.f16, s.gray_60, s.flx_i]} numberOfLines={1} ellipsizeMode='tail'>{item.overview}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    const _renderSeparator = () => {
        return (
            <View style={[s.pl4]} />
        )
    }

    const _gotoMovieDetail = (item: any) => {
        route('MovieDetail', { title: item.title, poster_path: item.poster_path, release_date: item.release_date, vote_average: item.vote_average, overview: item.overview, backdrop_path: item.backdrop_path })

    }

    const _onEndReached = () => {
        if (!isLoading && isNext) {
            // getList(page + 1, '')
        }
    }

    // const getList = (pageCurrect: number, type: string) => {
    //     setIsLoading(true)
    //     api.get(Apis.paths.getList, {
    //         params: {
    //             api_key: 'c1618550083ac39008a92222d9c8a6a9',
    //             language: 'en-US',
    //             page: pageCurrect
    //         }
    //     }).then(response => {
    //         if (type === 'refresh') {
    //             setIsLoading(false)
    //             setPage(response.data.page)
    //             setResultList(response.data.results)
    //             setIsNext(response.data.total_pages !== response.data.page)
    //         } else {
    //             setIsLoading(false)
    //             setPage(response.data.page)
    //             setResultList([...resultList, ...response.data.results])
    //             setIsNext(response.data.total_pages !== response.data.page)


    //         }
    //     })
    // }

    const _handleRefresh = () => {
        // getList(1, 'refresh')
    }

    return (
        <View style={{ flex: 1, backgroundColor: Colors.black }}>
            <View style={{}}>
                <View style={[s.flx_row, s.mh3, s.mt3, s.mb2, s.jcsb, s.aic]}>
                    <Text style={[s.mv2, s.f3, s.white, s.b]}>{'Movies'}</Text>
                    {/* <Image
                        style={{
                            borderColor: Colors.white,
                            borderRadius: sizes.br5,
                            height: PROFILE_IMAGE_SIZE,
                            width: PROFILE_IMAGE_SIZE,
                            borderWidth: 1,
                            overflow: 'hidden'
                        }}
                        source={require('~/src/assets/images/test.png')}>
                    </Image> */}
                </View>
                <Text style={[s.mv2, s.f4, s.mh3, s.white, s.b]}>{'In theatre'}</Text>
                <FlatList
                    style={[s.pv1,]}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    ListFooterComponent={<View style={[s.pr3]} />}
                    ListHeaderComponent={<View style={[s.pl3]} />}
                    ItemSeparatorComponent={_renderSeparator}
                    data={resultList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => renderItemHorizontal(item)}
                />
            </View>
            <SwipeablePanel
                callback={(value) => {
                    if (value > 125) {
                        setisLarge(true)
                        setExpand('Minimize')
                    }
                    else {
                        setisLarge(false)
                        setExpand('Expand')
                        if (refFlatlist != null) {
                            refFlatlist.scrollToOffset({ animated: true, offset: 0 });
                        }
                    }
                }}
                ref={(ref) => refSwipeable = ref}
                isActive={isPanelActive}
                onClose={() => closePanel()}
                fullWidth={true}>
                <View style={{ flex: 1 }}>
                    <View style={[s.flx_row, s.jcsb, s.aic]}>
                        <Text style={[s.mv1, s.f4, s.mh3, s.white, s.b]}>{'Trending'}</Text>
                        <TouchableOpacity onPress={onPressExpand}>
                            <Text style={[s.mv1, s.f10, s.mh3, s.sky_blue]}>{`(${expand})`}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            ref={(ref) => (refFlatlist = ref || undefined)}
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
            </SwipeablePanel>


        </View>
    )
})

export default inject('loading', 'navigation')(Home)