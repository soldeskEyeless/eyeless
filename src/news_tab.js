import React, { Component } from 'react';
import {
    View,
    Text, 
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 

import NewsPolitic from './newsScreens/news_100p';
import NewsEconomy from './newsScreens/news_101e';
import NewsSociety from './newsScreens/news_102s';
import NewsCulture from './newsScreens/news_103c';
import NewsWorld from './newsScreens/news_104w';
import NewsIT from './newsScreens/news_105i';
import { TabBar } from 'react-native-tab-view';

const Tab = createMaterialTopTabNavigator();

function TabNewsScreen() {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#4E2A84',
                tabBarInactiveTintColor: '#000',
                tabBarIndicatorStyle: {
                    backgroundColor: '#4E2A84',
                },
                tabBarLabelStyle: {textTransform: 'none'}
            }}
        >
            <Tab.Screen name="정치" component={NewsPolitic} />
            <Tab.Screen name="경제" component={NewsEconomy}/>
            <Tab.Screen name="사회" component={NewsSociety}/>
            <Tab.Screen name="생활/문화" component={NewsCulture}/>
            <Tab.Screen name="세계" component={NewsWorld}/>
            <Tab.Screen name="IT/과학" component={NewsIT}/>
        </Tab.Navigator>
    )
}

export default TabNewsScreen;