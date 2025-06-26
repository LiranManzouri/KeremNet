import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {PostModelArray} from "../../../../common/models/post-model";
import routes from '../routes.json'

const useGetPosts: () => [PostModelArray | undefined, () => void] = () => {
    const [posts, setPosts] = useState<PostModelArray>({})
    const [success, setSuccess] = useState<boolean>(true);
    const [shouldGetPosts, setShouldGetPosts] = useState<boolean>(true);

    const getPosts = useCallback(() => {
        setShouldGetPosts(prev => !prev);
    }, []);


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
    }, [shouldGetPosts]);

    if (!success) {
        return [undefined, getPosts];
    }
    return [posts, getPosts];
}

export default useGetPosts;