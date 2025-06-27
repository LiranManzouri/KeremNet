import UserModelArray from "../../common/models/user-model";
import userModel from "../../common/models/user-model";

enum StatusCodes {
    SUCCESS,
    WRONG_USER_INFO,
    USER_ALREADY_EXISTS,
}

const messages = {
    [StatusCodes.SUCCESS]: 'Success',
    [StatusCodes.WRONG_USER_INFO]: 'Wrong user info',
    [StatusCodes.USER_ALREADY_EXISTS]: 'User already exists',
};


class LoginController {
    users: UserModelArray;

    constructor() {
        try {
            const loadUsers = async () => {
                this.users = (await import('../users.json')).default;
            }
            loadUsers();
        } catch (e) {
            console.log('Error reading the users.json');
        }
    }

    addNewUser = (req, res) => {
        const {username, password, some_info, image} = req.body;

        if (username in this.users) {
            res.status(400).send(messages[StatusCodes.USER_ALREADY_EXISTS]);
        }

        this.users[username] = {
            username: username,
            password: password,
            some_info: some_info,
            image: image,
        }

        res.status(200).send(messages[StatusCodes.SUCCESS]);
    }


    getUserByInfo = (req, res) => {
        const username = req.params.username;
        const password = req.params.password;

        if (!(username in this.users) || this.users[username].password !== password) {
            res.status(400).send(messages[StatusCodes.WRONG_USER_INFO])
            return;
        }

        res.status(200).json(this.users[username]);
    }


}

export default LoginController;