import axios from "axios";

export const fetchProductListApi = async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_BASE_URL + "products");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchSignleProductApi = async (id: string) => {
    try {
        const response = await axios.get(import.meta.env.VITE_BASE_URL + `products/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}