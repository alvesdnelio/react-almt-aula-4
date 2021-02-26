import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {IconButton, Button} from 'react-native-paper';

function Home({navigation})
{
    return (
        <View style={styles.container}>
            <Text> Olá mundo </Text>
            <Text> Este é apenas um exemplo </Text>
            <Button icon="camera" onPress={() => navigation.navigate('Details')} mode="text">
                Saiba mais
            </Button>
            <Button icon="notifications-outline" onPress={() => navigation.navigate('Notifications')} mode="outlined">
                Notificações
            </Button>
            <Button icon="location-outline" onPress={() => navigation.navigate('Geolocations')} mode="contained">
                Geolocalizações
            </Button>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});