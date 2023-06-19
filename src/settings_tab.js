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
    const [selectedValue, setSelectedValue] = useState("5 minutes");

    return(
        <View>
            <Text style={{textAlign: 'left', margin: 10, fontSize: 20}}>시간</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{textAlign: 'left', margin: 10, fontSize: 20, fontWeight: 'bold'}}>자동 새로고침 시간</Text>
              <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="10 minutes" value="10 minutes" />
                <Picker.Item label="20 minutes" value="20 minutes" />
                <Picker.Item label="30 minutes" value="30 minutes" />
                <Picker.Item label="40 minutes" value="40 minutes" />
                <Picker.Item label="50 minutes" value="50 minutes" />
                <Picker.Item label="60 minutes" value="60 minutes" />
                <Picker.Item label="70 minutes" value="70 minutes" />
              </Picker>
            </View>
        </View>
    )
}

export default TabSettingsScreen;