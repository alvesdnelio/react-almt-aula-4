import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { Platform, Text, View, StyleSheet, Dimensions } from 'react-native';

export default function Geolocation() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS === 'android' && !Constants.isDevice) {
                setErrorMsg(
                    'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
                );
                return;
            }

            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Carregando..';
    let locationMaps;
    let locationMapsLatitude;
    let locationMapsLongitude;
    let renderMap;
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
        locationMaps = {latitude: location.coords.latitude, longitude: location.coords.longitude};

        if(location.coords.latitude !== undefined && location.coords.longitude !== undefined){
            renderMap = <MapView 
                style={styles.map} 
                initialRegion={{ 
                    latitude: location.coords.latitude, 
                    longitude: location.coords.longitude, 
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421, 
                }} >
                    <MapView.Marker
                        key='1'
                        coordinate={{
                            latitude: location.coords.latitude, 
                            longitude: location.coords.longitude 
                        }}
                        title='ALMT'
                        description='E agora seu gremista sofredor' />
                </MapView>
        }else{
            renderMap = <Text> Sem mapa renderizado </Text>
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>{text}</Text>
            { renderMap }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
