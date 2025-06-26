import {useEffect, useState} from "react";
import axios from "axios";
import {PostModelArray} from "../../../../common/models/post-model";
import routes from '../routes.json'

const useGetPosts: () => PostModelArray | undefined = () => {
    const [posts, setPosts] = useState<PostModelArray>({})
    let [success, setSuccess] = useState<boolean>(true);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const postsRequest = await axios.get<PostModelArray>(routes.postsRoute);
                setPosts(postsRequest.data);
            } catch (e) {
                setSuccess(false);
            }
        }
        getPosts();
    }, []);

    if (!success) {
        return undefined;
    }
    return posts;
}

export default useGetPosts;