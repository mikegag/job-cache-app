import React from "react"
import Header from "../components/Header"
import mainImage from "../assets/man-on-rocket.svg"
import logo from "../assets/job-cache-logo.png"

export default function Home() {
    const imageStyling = {
        width:"310px",
        margin:"3em auto 1em auto"
    }
    const mainTitleStyling = {
        textAlign:"center",
        margin:"1.5em auto 0.1em auto",
        fontWeight:"900"
    }
    const subtitleStyling = {
        textAlign:"center",
        margin:"1em auto",
        padding: "0 0.5em",
        fontWeight:"600"
    }
    const infoSectionStyling = {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    }
    const lineStyling = {
        width:"80px",
        height:"5px",
        borderRadius:"20px",
        background:"#ffc445"
    }

    return (
        <div className="home-page">
            <Header 
                icon={logo}
                secondButtonText={"LOGIN"}
                thirdButtonText={"SIGN UP"}  
            />
            <div className="home-info-section" style={infoSectionStyling}>
                <h1 style={mainTitleStyling}>JobCache</h1>
                <div style={lineStyling}></div>
                <h2 style={subtitleStyling}>Effortless Organization for Your Job Applications.</h2>
                <img 
                    src={mainImage} 
                    alt="man holds a briefcase while standing on rocket as it flys into the sky" 
                    className="main-image"
                    style={imageStyling}
                />
            </div>
        </div>
    )
}

