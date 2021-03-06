import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';
import {Home} from '../screens';
import {COLORS, icons} from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='ראשי'
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                        source={icons.cutlery}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height:25,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                        />
                        )
                }}
                />
                <Tab.Screen
                name='חיפוש'
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                        source={icons.search}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height:25,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                        />
                        )
                }}
                />

                <Tab.Screen
                name='בשבילך'
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                        source={icons.like}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height:25,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                        />
                        )
                }}
                />
                <Tab.Screen
                name='משתמש'
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                        source={icons.user}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height:25,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                        />
                        )
                }}
                />
        </Tab.Navigator>
    )
}
export default Tabs;