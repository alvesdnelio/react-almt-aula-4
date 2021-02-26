import React from 'react';
import { IconButton, Colors, Button } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import BlogScreen from '../screens/Blog';
import TabStackBlogScreen from '../navigations/TabStackBlog';

const Stack = createStackNavigator();

export default function StackBlog({ navigation }) {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Blogs'
            component={BlogScreen} 
            options={{ 
                title: 'Lista de blogs',
                headerLeft: () => (
                    <IconButton
                        icon="menu"
                        color={Colors.red500}
                        size={20}
                        onPress={() => navigation.openDrawer()}
                    />
                ),
            }}
        />
        <Stack.Screen 
            name='TabBlog'
            component={TabStackBlogScreen} 
            options={{ 
                title: 'Blog',
            }}
        />
    </Stack.Navigator>
  );
}
