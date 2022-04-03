import axios from "axios";

export default axios.create({
    baseURL: "https://crudcrud.com/api/7ec24337561c43a5a0852fe6e00a5de4",
    headers: {
        "Content-type": "application/json"
    }
});