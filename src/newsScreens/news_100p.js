import React, { Component, useState } from 'react';
import {
    View,
    Text, 
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';
import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from "react-native-popup-menu";
import Icon from 'react-native-vector-icons/Ionicons';

import img from '../img.png'
import { option } from 'yargs';

import ItemHeadline from '../components/itemHeadline';

function NewsPolitic() {
    return(
        <ScrollView>
            <View style={styles.headlineView}>
                {/* 헤드라인 뉴스, 새로고침, 전체 재생 */}
                <View style={styles.textAndButtons}>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <Text style={styles.headlineText}>헤드라인 뉴스</Text>
                        <TouchableOpacity><Icon name={'refresh-outline'} size={15} color={'#B7B7B7'}/></TouchableOpacity>
                    </View>
                    <View style={styles.playWholeButton}>
                        <Text style={{color:'#fff'}}>전체 재생</Text>
                    </View>
                </View>

                {/* 헤드라인 아이템 */}
                <ItemHeadline />
                <ItemHeadline />
                <ItemHeadline />
                <ItemHeadline />
                <ItemHeadline />
                
            </View>

            {/* 헤드라인 더보기 */}
            <TouchableOpacity>
                <View style={styles.moreButtonView}>
                    <Text style={styles.moreText}>헤드라인 더보기</Text>
                    <Icon name={'chevron-down-outline'} size={15} color={'#BEBEBE'}/>
                </View>
            </TouchableOpacity>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    headlineView: {
        marginTop: 10,
        backgroundColor: '#fff',
        paddingTop: 15,
        marginBottom: 10,
    },
    headlineText: {
        color: '#000',
        fontSize: 16,
        marginRight: 5,
        fontWeight: 'bold'
    },
    textAndButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom: 10,
        paddingHorizontal: 15
    },
    playWholeButton: {
        backgroundColor: '#4E2A84',
        borderRadius: 10,
        paddingVertical: 4,
        paddingHorizontal: 11
    },
    moreButtonView: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    moreText: {
        color: '#000',
        fontWeight: '400'
    }
});


export default NewsPolitic;
