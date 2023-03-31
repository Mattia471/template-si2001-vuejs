import axios from "axios";

export default class TodosService{
    static async getAll() {
        return await axios.get("https://jsonplaceholder.typicode.com/todos")
    }
}