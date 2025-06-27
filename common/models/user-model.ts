interface UserInfo {
    username: string;
    password: string;
    some_info: string;
    image: string;
}

interface UserModelArray {
    [username: string]: UserInfo;
}

export default UserModelArray;