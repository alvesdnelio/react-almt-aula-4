import { getPosts, savePosts } from '../stores/storeAPI';

const URI_API = 'https://jsonplaceholder.typicode.com/';

export const serviceGetPosts = async (forceUpdate = false) => {
    try {
        let data = await getPosts();

        if(data.length === 0 || forceUpdate){
            console.log('cache: false');

            await fetch(`${URI_API}posts`)
                .then(res => res.json())
                .then(body => data = body)

            await savePosts(data);

            return data;
        } else {
            console.log('cache: true');

            return data;
        }
    } catch (error) {
        return error;
    }

}