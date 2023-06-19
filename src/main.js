import React, { Component } from 'react';
import {
    View,
    Text, 
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import TabNewsScreen from './news_tab';
import TabSettingsScreen from './settings_tab';

const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {
    let iconName, iconSize, iconColor;

    if (focused === true) {
        iconSize=32;
        iconColor='#4E2A84';
    }
    else {
        iconSize = 32;
        iconColor = '#D9D9D9';
    }

    if (name === '뉴스') {
        iconName = 'newspaper-outline';
    } else if (name === '설정') {
        iconName = 'settings-outline';
    }

    return <Icon name={iconName} size={iconSize} color={iconColor}/>
}
function MainScreen() {
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => (
                    TabBarIcon(focused, route.name)
                ),
                tabBarShowLabel: true,
                tabBarActiveBackgroundColor: '#fff',
                tabBarInactiveBackgroundColor: '#fff',
                tabBarActiveTintColor: '#4E2A84',
                tabBarInactiveTintColor: '#D9D9D9',
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 10
                },
                headerShown: false
            })}
        >
            <Tab.Screen name="뉴스" component={TabNewsScreen}/>
            <Tab.Screen name="설정" component={TabSettingsScreen}/>
        </Tab.Navigator>
    )
}

export default MainScreen;