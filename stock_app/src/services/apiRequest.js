import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { fetchStart } from "../features/authSlice"
import { useDispatch } from "react-redux"


export const login = async (userData) => {

    // const BASE_URL = "https://10117.fullstack.clarusway.com"
    const dispatch = useDispatch()
    dispatch(fetchStart())

    try {
        const data = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, userData)
        toastSuccessNotify("Login işlemi başarılı")
        console.log(data)
        return data
    } catch (error) {
        toastErrorNotify("Login işlemi başarısız")
        console.log(error)
        
    }
    
}