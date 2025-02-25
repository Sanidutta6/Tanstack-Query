import axios from "axios"

interface LoginApiParams {
    username: string,
    password: string
}

export const loginApi = async ({ username, password }: LoginApiParams) => {
    try {
        const response = await axios.post(import.meta.env.VITE_BASE_URL + "auth/login", { username, password });

        if (response.status === 200) {
            return response.data
        } else {
            throw new Error(response.statusText || "Something Went Wrong")
        }
    } catch (error: any) {
        console.log(error.message)
    }
}