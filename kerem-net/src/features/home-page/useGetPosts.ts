import {useEffect, useState} from "react";
import axios from "axios";
import {PostModelArray} from "../../../../common/models/post-model";
import routes from '../routes.json'

const useGetPosts: () => PostModelArray = () => {
    const [posts, setPosts] = useState<PostModelArray>({})

    useEffect(() => {
        const getPosts = async () => {
            try {
                const postsRequest = await axios.get<PostModelArray>(routes.postsRoute);
                setPosts(postsRequest.data);
            } catch (e) {
                alert(e);
            }
        }
        getPosts();
    }, []);

    return posts;
}

export default useGetPosts;