import React from "react"
import Header from "../components/Header"
import LoginForm from "../components/LoginForm"
import logo from "../assets/job-cache-logo.png"

export default function Login() {
    return (
        <div className="login-page">
            <Header 
                icon={logo}
                secondButtonText={"LOGIN"}
                thirdButtonText={"SIGN UP"}  
            />
            <LoginForm />
        </div>
    )
}
