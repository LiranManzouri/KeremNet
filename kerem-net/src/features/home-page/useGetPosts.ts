import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {PostModelArray} from "../../../../common/models/post-model";
import routes from '../routes.json'
import {AlertInfo} from "../../App";

const useGetPosts: (setShowAlert: AlertInfo) => [PostModelArray | undefined, () => void] = (alertInfo) => {
    const [posts, setPosts] = useState<PostModelArray>({})
    const [success, setSuccess] = useState<boolean>(true);
    const [shouldGetPosts, setShouldGetPosts] = useState<boolean>(true);

    const getPosts = useCallback(() => {
        setShouldGetPosts(true);
    }, []);


    useEffect(() => {
        const getPosts = async () => {
            try {
                const postsRequest = await axios.get<PostModelArray>(routes.postsRoute);
                setPosts(postsRequest.data);
                setSuccess(true);
            } catch (e) {
                setSuccess(false);
                alertInfo.setShowAlert(true);
                if (alertInfo.alertMessage === '') {
                    alertInfo.setAlertMessage('Error getting the posts!');
                }
            }
        }
        getPosts();
        setShouldGetPosts(false);
    }, [shouldGetPosts]);

    if (!success) {
        return [undefined, getPosts]
    }

    return [posts, getPosts];
}

export default useGetPosts;