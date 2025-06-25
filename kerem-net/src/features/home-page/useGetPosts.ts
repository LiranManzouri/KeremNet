import {useEffect, useState} from "react";
import axios from "axios";
import PostModel from "../../../../common/models/post-model";
import routes from '../routes.json'

const useGetPosts: () => PostModel[] = () => {
    const [posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {
        const getPosts = async () => {
            try {
                const postsRequest = await axios.get(routes.postsRoute);
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