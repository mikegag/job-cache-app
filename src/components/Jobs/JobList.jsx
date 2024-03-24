import React from "react"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"

export default function JobList() {

    // logic that loops through database

    const containerStyling = {
        margin:"4em auto 1em auto"
    }

    const infoContainerStyling = {
        display:"flex",
        flexDirection:"row"
    }

    const iconStyling = {
        margin:"auto 0 auto auto",
        cursor:"pointer"
    }

    const mainTitleStyling = {
        margin:"auto auto auto 0",
        textAlign:"left",
        fontWeight:"500"
    }

    const applicationContainerStyling = {
        background:"#fcf7eb",
        borderRadius:"10px",
        border:"0.5px solid #303e4d",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        margin:"1.5em auto",
        overflow:"scroll",
        maxHeight:"430px"
    }

    const applicationStyling = {
        background:"#fcf7eb",
        borderBottom:"0.5px solid #303e4d",
    }

    const linkStyling = {
        textDecoration:"none",
        margin:"auto 0 auto auto",
        color:"#303e4d"
    }

    return (
        <div className="job-list-component" style={containerStyling}>
            <div style={infoContainerStyling}>
                <h3 style={mainTitleStyling}>Job Applications</h3>
                <Link to="newJob" style={linkStyling}>
                    <FontAwesomeIcon icon={faPlusCircle} style={iconStyling} />
                </Link>
            </div>
            <div style={applicationContainerStyling}>
                <div style={applicationStyling}>
                    <p style={{margin:"1em"}}>example 1</p>
                </div>
                <div style={applicationStyling}>
                    <p style={{margin:"1em"}}>example 2</p>
                </div>
            </div>
        </div>
    )
}
