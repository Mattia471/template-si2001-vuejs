import axios from "axios";

export default class UsersService{
    static async getAll() {
        return await axios.get("https://jsonplaceholder.typicode.com/users")
    }
}