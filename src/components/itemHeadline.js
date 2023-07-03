import React, { Component, useState, useEffect } from 'react';
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
import { useNavigation } from '@react-navigation/native';

import img from '../defaultImage.png'
import Article from '../article';

import Sound from 'react-native-sound';

function ItemHeadline({ title, date, main, reporter, media, image, logo, section, url, mp3FileName, s3Address }){
  const [menuVisible, setMenuVisible] = useState(false);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const showMenu = () => setMenuVisible(true);
  const hideMenu = () => setMenuVisible(false);

  const handleMenuOptionSelect = (option) => {
      if (option === "다음에 재생") {
          alert('다음에 재생');
      } else if (option === "재생목록 추가") {
          alert('재생목록 추가');
      }

      hideMenu();
  };

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

  const navigation = useNavigation();

  const handleItemPress = () => {
    navigation.navigate('Article', {title, date, main, reporter, media, image, logo, section, url, mp3FileName, s3Address} );
  }

  const resetSound = () => {
    if (sound) {
        sound.stop(() => {
            sound.setCurrentTime(0);
        });
    }
  };  


  return(
    <TouchableOpacity onPress={handleItemPress}>
      <View style={styles.newsItemView}>
        {image !== "No elements found with the provided selector" ? (
          <Image source={{uri: image}} style={styles.img}></Image>
        ): (
          <Image source={img} style={styles.img}></Image>
        )}
        <View style={{flex:2}}>
          <MenuProvider skipInstanceCheck>
            <View style={styles.textAndMenu}>
              <Text style={styles.itemTextHeadline}>{title}</Text>  
              <View>
                  <TouchableOpacity onPress={showMenu}>
                      <Menu visible={menuVisible} onBackdropPress={hideMenu}>
                          <MenuTrigger>
                          <Icon name='ellipsis-vertical' size={18} color='#b7b7b7'/>
                          </MenuTrigger>
                          <MenuOptions customStyles={menuOptionsStyles}>
                              <MenuOption onSelect={() => handleMenuOptionSelect('다음에 재생')} text='다음에 재생'/>
                              <MenuOption onSelect={() => handleMenuOptionSelect('재생목록 추가')} text='재생목록 추가'/>
                          </MenuOptions>
                      </Menu>
                  </TouchableOpacity>
              </View>
            </View>
          </MenuProvider>
        <View style={styles.pressAndPlay}>
            <Text style={styles.itemTextPress}>{media}</Text>
              <View style={{flexDirection:'row', justifyContent: 'space-between',}}>
              <TouchableOpacity onPress={handlePlayPause}>
                <Icon name={isPlaying ? 'pause' : 'play'} size={30} color={'#4E2A84'}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={resetSound}>
                <Icon name={'reload-circle'} size={30} color={'#4E2A84'}/>
              </TouchableOpacity>
            </View>
        </View>
        </View>
      </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  
  newsItemView: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#D9D9D9',
    borderBottomWidth: 1,
  },
  img: {
    width: 106,
    height: 73,
    resizeMode: 'contain',
    marginRight: 5
  },
  itemTextPress: {
    fontSize: 13
  },
  textAndMenu: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTextHeadline: {
    color: '#000',
    fontWeight: '600',
    fontSize: 14,
    flex: 1
  },
  pressAndPlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  }
});

const menuOptionsStyles = {
  optionsContainer: {
    position: 'absolute',
    left: 0,
    width: 100,
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
}

export default ItemHeadline;