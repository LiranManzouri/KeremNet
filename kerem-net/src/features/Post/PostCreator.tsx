import React, {FC} from "react";

interface Props {
    username: string;
    likes: number;
    uploadTime: Date;
}

const PostCreator: FC<Props> = ({username, likes, uploadTime}) => {
    return (
        <>

        </>
    );
}

export default PostCreator;