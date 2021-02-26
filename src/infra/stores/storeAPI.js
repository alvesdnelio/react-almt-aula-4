import AsyncStorage from '@react-native-async-storage/async-storage';

const TABLE_POSTS = '@posts';

export const getPosts = async () => {
    const data = await AsyncStorage.getItem(TABLE_POSTS);

    return data != null ? JSON.parse(data) : [];
}

export const savePosts = async (data) => {
    const dataParsed = JSON.stringify(data);

    await AsyncStorage.setItem(TABLE_POSTS, dataParsed);
}