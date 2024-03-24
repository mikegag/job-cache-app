import React from "react"
import Header from "../components/Header"
import SignUpForm from "../components/SignUpForm"
import logo from "../assets/job-cache-logo.png"

export default function SignUp() {
    return (
        <div className="signup-page">
            <Header 
                icon={logo}
                secondButtonText={"LOGIN"}
                thirdButtonText={"SIGN UP"}  
            />
            <SignUpForm />
        </div>
    )
}
