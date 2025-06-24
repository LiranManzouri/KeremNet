import {Dispatch, SetStateAction, useEffect, useState} from "react";
import PostModel from "../post/post-model";

const useGetPosts: () => [PostModel[], Dispatch<SetStateAction<PostModel[]>>] = () => {
    const [posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {

        const getPosts = async () => {
            const postsRequest = await fetch(
                "http://localhost:5000/posts",
                {
                    method: "get",
                    headers: {
                        "Content-Type": "application/json"
                    },
                }
            );

            const postsReceived = await postsRequest.json();
            setPosts(postsReceived);
        }

        getPosts().catch(e => alert(e));

    }, []);

    return [posts, setPosts];
}

export default useGetPosts;