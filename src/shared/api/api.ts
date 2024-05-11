import axios from "axios";

export async function getUsers() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}