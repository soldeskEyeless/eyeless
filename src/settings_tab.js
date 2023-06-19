import React, { Component, useState } from 'react';
import {
    View,
    Text, 
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

function TabSettingsScreen() {
    const [selectedValue, setSelectedValue ] = useState("10 minutes");
    const [selectedValue1, setSelectedValue1 ] = useState("10 fontsize");
    const fontSize = parseInt(selectedValue1);

    return(
        <View>
            <Text style={{textAlign: 'left', marginLeft: 10, marginTop: 10, marginBottom: -5, fontSize: 20}}>시간</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{textAlign: 'left', marginLeft: 10, marginTop: -10, fontSize: 20, fontWeight: 'bold',color: 'black'}}>자동 새로고침 시간</Text>
              <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 160 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="10 mins" value="10" style={{fontSize: 20}}/>
                <Picker.Item label="20 mins" value="20" style={{fontSize: 20}}/>
                <Picker.Item label="30 mins" value="30" style={{fontSize: 20}}/>
                <Picker.Item label="40 mins" value="40" style={{fontSize: 20}}/>
                <Picker.Item label="50 mins" value="50" style={{fontSize: 20}}/>
                <Picker.Item label="60 mins" value="60" style={{fontSize: 20}}/>
                <Picker.Item label="70 mins" value="70" style={{fontSize: 20}}/>
              </Picker>
            </View>
            <View style={{ borderBottomColor: '#D6D6D6', borderBottomWidth: 1, }} />
            <Text style={{textAlign: 'left', margin: 10, marginTop: 20, marginBottom: -5, fontSize: 20, }}>글자</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{textAlign: 'left', margin: 10, fontSize: 20, fontWeight: 'bold', color: 'black'}}>글자 크기</Text>
              <Picker
                selectedValue={selectedValue1}
                style={{ height: 70, width: 130 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
              >
                <Picker.Item label="작게" value="15" style={{fontSize: 15}} />
                <Picker.Item label="중간" value="20" style={{fontSize: 20}} />
                <Picker.Item label="크게" value="25" style={{fontSize: 25}} />
              </Picker>
            </View>
            <View style={{ borderBottomColor: '#D6D6D6', borderBottomWidth: 1, }} />
            <Text style={{textAlign: 'left', margin: 10, marginTop: 20, marginBottom: -5, fontSize: 20}}>버전</Text>
            <Text style={{textAlign: 'left', margin: 10, fontSize: 20, fontWeight: 'bold',color: 'black'}}>Version 1.0.0</Text>
        </View>
    )
}

export default TabSettingsScreen;