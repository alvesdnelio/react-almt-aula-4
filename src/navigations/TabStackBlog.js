import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BlogPosts from '../screens/BlogPosts';
import BlogAlbums from '../screens/BlogAlbums';
import BlogPhotos from '../screens/BlogPhotos';
import BlogComments from '../screens/BlogComments';

const Tab = createBottomTabNavigator();

export default function TabStackBlog()
{
    return (
        <Tab.Navigator
            initialRouteName="BlogPosts"

            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'BlogPosts':
                            iconName = 'bookmarks-outline';
                            break;

                        case 'BlogAlbums':
                            iconName = 'albums-outline';
                            break;

                        case 'BlogPhotos':
                            iconName = 'images-outline';
                            break;
                        case 'BlogComments':
                            iconName = 'chatbubbles-outline';
                            break;
                    
                        default:
                            iconName = 'help-circle-outline';
                            break;
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}

            tabBarOptions = {{
                activeTintColor: '#3498db',
                inactiveTintColor: '#2c3e50',
            }}
        >
            <Tab.Screen 
                name="BlogPosts" 
                component={BlogPosts} 
                options={{ title: 'Publicações' }}
            />
            <Tab.Screen 
                name="BlogComments" 
                component={BlogComments} 
                options={{ title: 'Comentarios' }}
            />
            <Tab.Screen 
                name="BlogAlbums" 
                component={BlogAlbums} 
                options={{title: 'Albuns' }}
            />
            <Tab.Screen 
                name="BlogPhotos"
                component={BlogPhotos} 
                options={{ title: 'Fotos' }}
            />
        </Tab.Navigator>
    )
}