import {useEffect, useState} from "react";
import axios from "axios";
import PostModel from "../post/post-model";

const useGetPosts: () => PostModel[] = () => {
    const [posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {
        const getPosts = async () => {
            try {
                const postsRequest = await axios.get("http://localhost:5000/posts");
                setPosts(postsRequest.data);
            } catch (e) {
                alert(e);
            }
        }
        getPosts().then();
    }, []);

    return posts;
}

export default useGetPosts;