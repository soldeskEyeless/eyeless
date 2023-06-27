import React, { Component, useState, useEffect } from 'react';
import Sound from 'react-native-sound';
import { Linking } from 'react-native'
import {
    View,
    Text, 
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import RNFS from 'react-native-fs';
import Papa from 'papaparse';

function Article() {
  const route = useRoute();
  const {title, date, main, reporter, media, image, logo, section, url, mp3FileName, s3Address} = route.params;
  
  const [csvData, setCsvData] = useState(null);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    const readCsvFile = async () => {
      // assets 폴더의 CSV 파일 경로 지정
      const filePath = 'article.csv';
  
      try {
        // 파일을 읽어들임
        const fileContents = await RNFS.readFileAssets(filePath, 'utf8');
    
        // 파일 내용을 파싱 (header 옵션을 true로 설정)
        Papa.parse(fileContents, {
          header: true,
          complete: (result) => {
            // 파싱 결과를 상태 변수에 저장
            setCsvData(result.data);
          }
        });
      } catch (error) {
        console.error("CSV 파일을 읽는데 실패했습니다.", error);
      }
    };
  
    readCsvFile();
  }, []);

  useEffect(() => {
    // URL로부터 음악 파일을 로드합니다.
    const soundInstance = new Sound(s3Address, null, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // Sound 인스턴스를 상태에 설정합니다.
      setSound(soundInstance);
    });
  
    // 컴포넌트가 언마운트될 때 Sound 인스턴스를 정리합니다.
    return () => {
      soundInstance.release();
    };
  }, []);
  
  const handlePlayPause = () => {
    if (isPlaying && sound) {
        sound.pause();
    } else if (sound) {
        sound.play((success) => {
            if (!success) {
                console.log('Sound did not play successfully');
            }
        });
    }
    setIsPlaying(!isPlaying);
  };

  const resetSound = () => {
    if (sound) {
        sound.stop(() => {
            sound.setCurrentTime(0);
        });
    }
  };


  const handleURLPress = () => {
    const articleURL = 'https://n.news.naver.com/mnews/article/016/0002155787?sid=102';
    Linking.openURL(articleURL);
  };

  return(
      <ScrollView style={{ backgroundColor: '#fff'}}>
      <View style={{ backgroundColor: '#fff', marginTop: 20}}>
        <View style={headStyles.container}>
          {csvData && csvData.length > 0 && (
            <View>
              <View style={{flexDirection:'row', justifyContent: 'space-between',}}>
                <Image 
                  // 로고 이미지 URL을 CSV 데이터에서 가져옵니다.
                  source={{uri: logo}}
                  resizeMode={"cover"}
                  style={headStyles.logoImageStyle}
                />
                <View style={{flexDirection:'row', justifyContent: 'space-between',}}>
                  <TouchableOpacity onPress={handlePlayPause}>
                    <Icon name={isPlaying ? 'pause' : 'play'} size={33} color={'#4E2A84'}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={resetSound}>
                    <Icon name={'reload-circle'} size={33} color={'#4E2A84'}/>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={headStyles.headline}>
                {/* 제목을 CSV 데이터에서 가져옵니다. */}
                {title}
              </Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={headStyles.date}>
                  {/* 날짜를 CSV 데이터에서 가져옵니다. */}
                  {date}
                </Text>
                <TouchableOpacity onPress={() => Linking.openURL(url)}>
                  {/* URL을 CSV 데이터에서 가져옵니다. */}
                  <Text style={headStyles.urlText}>기사원문 보기</Text>
                </TouchableOpacity>
              </View>
              <Text style={headStyles.reporter}>
                {/* 기자 이름을 CSV 데이터에서 가져옵니다. */}
                {reporter}
              </Text>
            </View>
          )}
        </View>

                      
        <View style={newsStyles.container}>
          {csvData && csvData.length > 0 && image !== "No elements found with the provided selector" && (
            <Image 
              // 이미지 URL을 CSV 데이터에서 가져옵니다.
              source={{uri: image}}
              resizeMode={"cover"}
              style={newsStyles.imageStyle}
            />
          )}
        </View>


          <View style={article.container}>
            {csvData && csvData.length > 0 && (
              <Text style={article.article}>
                {main}
              </Text>
            )}
          </View>


      </View>
      </ScrollView>
  )
}

const headStyles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingBottom: 20,
      padding: 10,
  },
  
  headline: {
      textAlign: 'justify',
      lineHeight: 30,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
      backgroundColor: '#fff',
      flexWrap: 'wrap'
  },

  date: {
      textAlign: 'left',
      fontSize: 12,
      color: '#929293',
      backgroundColor: '#fff',
  },

  urlText: {
      fontSize: 12,
      color: '#929293',
      backgroundColor: '#fff',
      borderBottomColor: 'black',
      borderBottomWidth: 0.5
  },

  reporter: {
      textAlign: 'left',
      fontSize: 12,
      color: 'black',
      backgroundColor: '#fff',
  },


  logoImageStyle: {
      width: 120,
      height: 40,
  },
});

const newsStyles = StyleSheet.create({
  container: {
    alignContent:"center",
    justifyContent:"center",
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  imageStyle: {
    width: 380,
    height: 240,
    alignContent:"center",
    justifyContent:"center"
  }
});

const article = StyleSheet.create({
  container: {
      marginTop: 25,
      marginBottom: 25,
      backgroundColor: '#fff'
  },

  article: {
      textAlign: 'justify',
      fontSize: 15,
      color: 'black',
      fontWeight: '500',
      lineHeight: 23,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      flexWrap: 'wrap'
  }
});

export default Article;