import React, { useEffect, useState } from 'react';
import { View, RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { Paragraph } from 'react-native-paper';

export default function BlogAlbum()
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
                Album de fotos do post
            </Paragraph>
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