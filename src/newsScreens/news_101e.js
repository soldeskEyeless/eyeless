import React, { Component, useState, useEffect } from 'react';
import {
    View,
    Text, 
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Button,
    ActivityIndicator
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

import Papa from 'papaparse';
import RNFS from 'react-native-fs';

import { fetchCSV } from '../fetchCSV';

function NewsEconomy() {
    const [csvData, setCsvData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleRefresh = async () => {
        setIsLoading(true);

        try {
            await readCsvFile();
            console.log('새로고침 완료');
        } catch (error) {
            console.log('새로고침 실패: ', error);
        }
        setIsLoading(false);
    }
    const readCsvFile = async () => {
        // assets 폴더의 CSV 파일 경로 지정
        const filePath = await fetchCSV();
    
        try {
            // 파일을 읽어들임
            const fileContents = await RNFS.readFile(filePath, 'utf8');
        
            // 파일 내용을 파싱 (header 옵션을 true로 설정)
            Papa.parse(fileContents, {
                header: true,
                encoding: 'ISO-8859-1',
                complete: (result) => {
                // section 필드가 100인 데이터만 필터링하여 저장
                const filteredData = result.data.filter(item => item.section === '101');
                setCsvData(filteredData);
                }
            });
            } catch (error) {
            console.error("CSV 파일을 읽는데 실패했습니다.", error);
            }
        };

    useEffect(() => {
        readCsvFile();
    }, []);

    return(
        <ScrollView>
            <View style={styles.headlineView}>
                {/* 헤드라인 뉴스, 새로고침, 전체 재생 */}
                <View style={styles.textAndButtons}>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <Text style={styles.headlineText}>헤드라인 뉴스</Text>
                        <TouchableOpacity onPress={handleRefresh}>
                            {isLoading ? <ActivityIndicator size="small" color='#b7b7b7'/>:
                                <Icon name={'refresh-outline'} size={15} color={'#B7B7B7'}/>
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.playWholeButton}>
                        <Text style={{color:'#fff'}}>전체 재생</Text>
                    </View>
                </View>

                {/* csv에 맞게 아이템 보여주기 */}
                <View>
                    {csvData && csvData.length > 0 && 
                        csvData.map((item, index) => (
                            <ItemHeadline
                                key={index}
                                title={item.title}
                                date={item.date}
                                main={item.main}
                                reporter={item.reporter}
                                media={item.media}
                                image={item.image}
                                logo={item.logo}
                                section={item.section}
                                url={item.url}
                            />
                        ))
                    }
                </View>
            </View>
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


export default NewsEconomy;
