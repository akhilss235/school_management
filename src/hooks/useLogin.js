import { useEffect, useState } from 'react';
import request from "../Request";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"
export const useLogin = () => {
    const initialValue = { userName: '', password: '' }
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialValue);
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({})
    const token = localStorage.getItem("token")

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        
        if (errors[name]) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
        }
    };

    const handleCheckErrors = () => {
        const errors = {};
        if (!formData.userName) errors.userName = "Username is required";
        if (!formData.password) errors.password = "Password is required";
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validateErrors = handleCheckErrors();
        setErrors(validateErrors);
        if (Object.keys(validateErrors).length === 0) {
            try {
                const response = await request.post("/login", formData);
                if (response.status === 201) {
                    setFormData(initialValue)
                    navigate("/dashboard");
                    localStorage.setItem("token", response?.data?.item);
                }else{
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        form: response?.data.message || "Login failed. Please try again."
                    }));
                }
            } catch (error) {
                console.error("Login error:", error);
            }
        }
    };

    useEffect(()=>{
        if(token){
            const handleGetUser = async()=>{
                try {
                    const response = await request.get("getUser") 
                    setUser(response?.data?.data)
        
                } catch (error) {
                    console.log("error at fetching user data", error)
                    toast.error(error.response.data.message)
                }
            }
            handleGetUser()
        }
    },[])


    return { onChange, formData, handleSubmit, errors, user };
}

