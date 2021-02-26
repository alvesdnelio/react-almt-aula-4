import React, { useEffect, useState } from 'react';
import { View, RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { serviceGetPosts } from '../../infra/services/serviceAPI'

export default function BlogPosts()
{

    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        console.log('Open Tab');
        const get = async () => {
            await serviceGetPosts().then((res) => {
                console.log(res);
            });
        }

        get();

    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        serviceGetPosts(true).then((res) => {
            setRefreshing(false);
            console.log(res);
        })
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
                Blog Post
            </Paragraph>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});