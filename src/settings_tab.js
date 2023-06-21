import React, { Component, useState } from 'react';
import {
    View,
    Text, 
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

import { SelectList } from 'react-native-dropdown-select-list'





function TabSettingsScreen() {
    const [selected, setSelected] = React.useState("");
    const [selected2, setSelected2] = React.useState("");

    const data = [
        {key:'1',value:'10분'},
        {key:'2',value:'20분'},
        {key:'3',value:'30분'},
        {key:'4',value:'40분'},
        {key:'4',value:'50분'},
        {key:'4',value:'60분'},
      ];
 
    const data2 = [
        {key:'1', value:'작게'},
        {key:'2', value:'보통'},
        {key:'3', value:'크게'},
    ];
  

    return(
        <View style={{padding: 15}}>
            <Text style={{textAlign: 'left', fontSize: 17}}>시간</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{textAlign: 'left', fontSize: 18, color: '#000'}}>자동 새로고침 시간</Text>

              <SelectList 
                setSelected={setSelected} 
                data={data} 
                save="value"
                defaultOption={{key:'3',value:'30분'}}   //default selected option
                />

            </View>
            <View style={{ borderBottomColor: '#D6D6D6', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{textAlign: 'left', fontSize: 17, }}>글자</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{textAlign: 'left', fontSize: 18, color: '#000'}}>글자 크기</Text>
              
              <SelectList 
                setSelected={setSelected2} 
                data={data2} 
                save="value"
                defaultOption={{key:'2', value:'보통'}}   //default selected option
                />

            </View>
            <View style={{ borderBottomColor: '#D6D6D6', borderBottomWidth: 1, marginBottom: 10}} />
            <Text style={{textAlign: 'left', fontSize: 17}}>버전</Text>
            <Text style={{textAlign: 'left', fontSize: 18, color: '#000', marginTop: 15}}>Version 1.0.0</Text>
        </View>
    )
}

export default TabSettingsScreen;