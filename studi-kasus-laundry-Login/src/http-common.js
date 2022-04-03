import axios from "axios";

export default axios.create({
    baseURL: "https://crudcrud.com/api/7106da4297244eebbfd1f992b5af22ea",
    headers: {
        "Content-type": "application/json"
    }
});