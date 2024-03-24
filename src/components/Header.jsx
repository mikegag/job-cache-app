import React from "react"
import { Link } from "react-router-dom";
import { faFolder } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(props) {
    const containerStyling = {
        display:"flex",
    }
    const firstLinkStyling = {
        margin:"auto auto auto 0"
    }
    const secondLinkStyling = {
        margin:"auto 1em auto auto"
    }
    const thirdLinkStyling = {
        margin:"auto 0"
    }
    const buttonStyling = {
        padding: "0.35em 0.85em 0.3em 0.85em",
        border: "1px solid #303E4D",
        background: "#FFC445",
        color: "#303E4D",
        borderRadius:"20px",
        cursor:"pointer"
    }
    const secondButtonStyling = {
        padding: "0.35em 0.85em 0.3em 0.85em",
        border: "1px solid #303E4D",
        background: "#FFC445",
        color: "#303E4D",
        borderRadius:"20px",
        cursor:"pointer"
    }
    const thirdButtonStyling = {
        padding: "0.35em 0.85em 0.3em 0.85em",
        border: "1px solid #303E4D",
        background: "#FFC445",
        color: "#303E4D",
        borderRadius:"20px",
        cursor:"pointer"
    }
    const logoStyling = {
        border:"none",
        padding:"0",
        margin:"auto auto auto 0",
        height:"50px",
        cursor:"pointer"
    }
    const imageStyling = {
        width:"50px"
    }

    return (
        <div className="header-component" style={containerStyling}>
           {props.icon? 
                (
                <Link to={"/"} style={firstLinkStyling}>
                    <button 
                        style={logoStyling}
                        aria-label={`button that redirects to Home page `}>
                            <img src={props.icon} alt="JobCache logo" style={imageStyling}/>
                    </button> 
                </Link>
                )
            : 
                (   
                <Link to={"/job"} style={firstLinkStyling}>
                    <button 
                        aria-label={`button that redirects to Jobs page`}
                        style={buttonStyling}> 
                            <FontAwesomeIcon icon={faFolder} /> JOBS 
                    </button> 
                </Link>
                )
            }
            <Link 
                to={props.secondButtonText ? `/${props.secondButtonText.replace(/\s/g, "").toLowerCase()}` : "/"}
                style={secondLinkStyling}>
                <button aria-label={`button that redirects to ${props.secondButtonText} page`} style={secondButtonStyling}>
                    {props.secondButtonText}
                </button>
            </Link>
            <Link 
                to={props.secondButtonText ? `/${props.thirdButtonText.replace(/\s/g, "").toLowerCase()}` : "/"}
                style={thirdLinkStyling}>
                <button aria-label={`button that redirects to ${props.thirdButtonText} page`} style={thirdButtonStyling}>
                    {props.thirdButtonText}
                </button>
            </Link>
        </div>
    )
}

