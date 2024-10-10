import { useState } from 'react';
import request from "../Request";
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const initialValue = { userName: '', password: '' }
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialValue);
    const [errors, setErrors] = useState({});

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
                    localStorage.setItem("token", response.data.item);
                }
            } catch (error) {
                console.error("Login error:", error);
            }
        }
    };

    return { onChange, formData, handleSubmit, errors };
}

