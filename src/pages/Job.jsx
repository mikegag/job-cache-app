import React from "react"
import Header from "../components/Header"
import JobList from "../components/Jobs/JobList"
import { Outlet } from "react-router-dom"


export default function Job() {
    return (
        <div className="job-page">
            <Header 
                secondButtonText={"MOTIVATE"}
                thirdButtonText={"LOG OUT"}  
            />
            <div className="job-info-section">
                <JobList />
            </div>
        </div>
    )
}

