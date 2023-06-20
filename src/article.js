import React, { Component, useState } from 'react';
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

function Article() {
  const handleURLPress = () => {
    const articleURL = 'https://n.news.naver.com/mnews/article/016/0002155787?sid=102';
    Linking.openURL(articleURL);
};

  return(
      <ScrollView style={{ backgroundColor: 'white', marginTop: 10}}>
      <View style={{ backgroundColor: 'white', marginTop: 10}}>
          <View style={headstyles.container}>
              <Image 
                  source={{uri:'https://mimgnews.pstatic.net/image/upload/office_logo/055/2020/09/15/logo_055_6_20200915154015.png'}}
                  resizeMode={"cover"}
                  style={headstyles.logoimageStyle}
              />
              <Text style={headstyles.headline}>업종따라 다른 최저임금, 35년 만에 가능할까…"폐업 고민 vs 낙인효과"</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={headstyles.date}>2023.06.13. 오후 7:14</Text>
                  <TouchableOpacity onPress={handleURLPress}>
                      <Text style={headstyles.urltext}>기사원문 보기</Text>
                  </TouchableOpacity>
              </View>
              <Text style={headstyles.reporter}>박자연 기자</Text>
          </View>
                      
          <View style={newstyles.container}>
              <Image 
                  source={{uri:'https://imgnews.pstatic.net/image/001/2023/06/14/AKR20230614078500017_01_i_P4_20230614123312290.jpg?type=w647'}}
                  resizeMode={"cover"}
                  style={newstyles.imageStyle}
              />
          </View>

          <View style={article.container}>
          <Text style={article.article}>'군위군 청사 모습. 국민DB경북 군위군 대구시 편입 준비가 마무리 단계에 왔다. 대구시는 14일 편입에 따른 변동사항 등을 시 각 부서와 공유하는 최종 보고회를 개최했다.군위군은 ‘경상북도와 대구광역시 간 관할구역 변경에 관한 법률’에 따라 7월1일부터 대구시로 편입된다. 군위 편입은 대구경북신공항 이전지(군위·의성) 결정의 전제 조건으로 추진된 것이다.편입 후 대구시는 전국 특·광역시 중 면적 전국 1위 타이틀을 가지게 된다. 전체 행정구역은 군위군의 1읍·7면이 더해져 7구·2군·7읍·10면·133동 체제로 개편된다. 군위군 인구 2만3219명이 더해져 대구 인구는 238만251명으로 늘어난다.군위군민들도 대도시 교육의 실질적 혜택을 누릴 수 있게 된다. 군위군은 1학군으로 편입되며 내년부터 군위지역 중학생들은 대구 관내 고등학교로 진학할 수 있다. 서민자녀 교육바우처 지원, 대구통합도서관 서비스 등도 이용할 수 있다. 소방·경찰 관할도 대구로 바뀐다.농업 행정은 확대된다. 군위군 편입으로 대구 농업인구는 5만9183명(14% 증가)이 된다. 광역시 중에서 가장 많다. 경지면적도 기존 6917㏊에 군위군 6867㏊를 더해 1만3784㏊로 늘어난다. 대중교통 체계는 시내버스(급행) 노선 2개가 신설되고 마을버스가 도입된다. 택시요금체계와 상·하수도 요금 부과체계 등도 통합된다.기존 군위군이 추진한 보훈수당 등 복지사업은 축소되지 않도록 지원할 예정이다. 대구시 복지사업은 편입 후 군위군민까지 대상자를 확대한다. 군위군 농민수당, 기존 일반농산어촌지역 혜택 등을 계속 받을 수 있도록 조치할 방침이다.대구시·경북도·군위군은 이달 말 부단체장들이 참석하는 편입 기념 상생·화합 간담회를 통해 최종 조율을 마친다. 편입 기념식은 7월 3일 열린다.김종한 대구시 행정부시장은 “127년간 경북도 식구였던 군위군이 7월 대구의 새로운 식구가 돼 대구시 군위군 시대를 맞는다”고 말했다.한편 대구시와 대구시관광협회는 군위 대구 편입에 맞춰 7~12월 월 8회 대구시티투어 군위군 테마코스를 운영한다. 군위군은 아름다운 자연경관을 갖춘 지역으로 화본역, 한밤마을, 삼국유사테마파크 등 다양한 관광자원을 보유하고 있다.' </Text>
          </View>
      </View>
      </ScrollView>
  )
}

const headstyles = StyleSheet.create({
  container: {
      width: 410,
      height: 180,
      backgroundColor: '#fff'
  },
  
  headline: {
      width: 406,
      textAlign: 'left',
      margin: 10,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      backgroundColor: '#fff',
      marginLeft: 10,
      flexWrap: 'wrap'
  },

  date: {
      textAlign: 'left',
      fontSize: 12,
      color: 'black',
      backgroundColor: '#fff',
      marginLeft: 10
  },

  urltext: {
      fontSize: 12,
      color: 'black',
      backgroundColor: '#fff',
      marginRight: 10,
      borderBottomColor: 'black',
      borderBottomWidth: 0.5
  },

  reporter: {
      textAlign: 'left',
      fontSize: 12,
      color: 'black',
      fontWeight: 'bold',
      backgroundColor: '#fff',
      marginLeft: 10
  },


  logoimageStyle: {
      width: 80,
      height: 40,
      marginLeft: 10
  }
});

const newstyles = StyleSheet.create({
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
      width: 410,
      marginTop: 25,
      marginBottom: 25,
      backgroundColor: '#fff'
  },

  article: {
      textAlign: 'left',
      fontSize: 15,
      color: 'black',
      fontWeight: 'bold',
      backgroundColor: '#fff',
      marginLeft: 10,
      flexWrap: 'wrap'
  }
});

export default Article;