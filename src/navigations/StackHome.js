import React from 'react';
import { IconButton, Colors, Button } from 'react-native-paper';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import NotificationScreen from '../screens/Notifications';
import GeolocationsScreen from '../screens/Geolocations';

const Stack = createStackNavigator();

export default function StackHome({ navigation }) {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Home'
            component={HomeScreen} 
            options={{ 
                title: 'Home',
                headerLeft: () => (
                    <IconButton
                        icon="menu"
                        color={Colors.red500}
                        size={20}
                        onPress={() => navigation.openDrawer() }
                    />
                ),
            }}
        />
        
        <Stack.Screen 
            name='Details' 
            component={DetailsScreen} 
            options={{ 
                title: 'Detalhes',
                headerRight: () => (
                    <Button
                        title="Detalhes"
                        onPress={() => alert('Esto é um botão!')}
                    />
                ),
            }}
        />

        <Stack.Screen 
            name='Notifications' 
            component={NotificationScreen} 
            options={{ 
                title: 'Notificações',
                headerRight: () => (
                    <Button
                        title="Notificações"
                    />
                ),
            }}
        />

        <Stack.Screen 
            name='Geolocations' 
            component={GeolocationsScreen} 
            options={{ 
                title: 'Geo Localizações',
                headerRight: () => (
                    <Button
                        title="Geo Localizações"
                        onPress={() => alert('Esto é um botão!')}
                    />
                ),
            }}
        />
    </Stack.Navigator>
  );
}
