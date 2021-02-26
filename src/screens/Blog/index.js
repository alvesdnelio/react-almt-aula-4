import React, { useEffect, useState } from 'react';
import { View, RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { Paragraph, Button } from 'react-native-paper';

export default function Blog({ navigation })
{
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
    }, []);

    return (
        <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >
            <Paragraph>
                Lista de Blogs 🎉
            </Paragraph>
            <Button onPress={() => navigation.navigate('TabBlog')}>
                Visualizar blog
            </Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});