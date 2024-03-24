import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons"

export default function SignUpForm() {
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    const containerStyling = {
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center"
    }

    const mainTitleStyling = {
        textAlign: "center",
        fontSize:"1.75rem",
        textDecoration:"underline",
        margin: "2em auto 1.5em auto",
    }

    const inputStyling = {
        margin:"1em auto 3em 0",
        fontSize:"0.9rem",
        padding:"1.25em 1.25em 1.25em 2.5em",
        width:"270px",
        borderRadius:"10px",
        background:"#fcf7eb",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        border:"0.5px solid #303e4d"
    }

    const iconStyling = {
        position: "absolute", 
        top: "37%", 
        left: "10px", 
        transform: "translateY(-50%)",
        opacity:"70%"
    }

    const buttonStyling = {
        background: "#303e4d",
        margin:"3em auto 1em auto",
        width: "270px",
        padding: "0.6em 2em",
        border: "none",
        borderRadius: "10px",
        color: "#fffdf8",
        fontFamily: "montserrat, sans-serif",
        fontSize:"1.25rem",
        cursor:"pointer"
    }

    return (
        <div className="signup-form-component" style={containerStyling}>
            <h3 style={mainTitleStyling}>Create an Account</h3>
            <form onSubmit={handleSubmit} style={containerStyling}>
                <label> Username
                    <div style={{position: "relative" }}>
                        <FontAwesomeIcon icon={faUser} style={iconStyling}/>
                        <input
                            style={inputStyling}
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={inputs.username || ""}
                            onChange={handleChange}
                        />
                    </div>
                </label>
                <label> Email
                    <div style={{position: "relative" }}>
                        <FontAwesomeIcon icon={faEnvelope} style={iconStyling}/>
                        <input
                            style={inputStyling}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={inputs.email || ""}
                            onChange={handleChange}
                        />
                    </div>
                </label>
                <label> Password
                    <div style={{position: "relative" }}>
                        <FontAwesomeIcon icon={faLock} style={iconStyling}/>
                        <input
                            style={inputStyling}
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={inputs.password || ""}
                            onChange={handleChange}
                        />
                    </div>
                </label>
                <input type="submit" value="Sign Up" style={buttonStyling} />
            </form>
        </div>
    )
}
