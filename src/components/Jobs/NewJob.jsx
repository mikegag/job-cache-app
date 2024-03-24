import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"

export default function NewJob() {
    const [open, setOpen] = useState(false)
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        setInputs(prevState => ({ ...prevState, [name]: value }))
    }
  
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(inputs)
        //server logic
    }

    return (
        <div className="new-job-component">
           <div>
                <h3>Job Applications</h3>
                <Link to="/job">
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </Link>
            </div>
            <div>
                <div className="job-info-left">
                    <p>Position</p>
                    <p>@Company</p>
                    <p>Company Website</p>
                </div>
                <div className="job-info-right">
                    <p>Job ID</p>
                    <p>Application Date</p>
                    <div>Status</div>
                </div>
                <button onClick={() => setOpen(prev => !prev)}>Add Job</button>
                {open &&
                    <form onSubmit={handleSubmit}>
                        <label> Position
                            <input 
                                type="text" 
                                name="position"
                                value={inputs.position || ""} 
                                onChange={handleChange}
                            />
                        </label>
                        <label> Company
                            <input 
                                type="text" 
                                name="company"
                                value={inputs.company || ""} 
                                onChange={handleChange}
                            />
                        </label>
                        <label> Company Website
                            <input 
                                type="url" 
                                name="website"
                                value={inputs.website || ""} 
                                onChange={handleChange}
                            />
                        </label>
                        <label> Job ID
                            <input 
                                type="text" 
                                name="jobID"
                                value={inputs.jobID || ""} 
                                onChange={handleChange}
                            />
                        </label>
                        <label> Application Date
                            <input 
                                type="date" 
                                name="date"
                                value={inputs.date || ""} 
                                onChange={handleChange}
                            />
                        </label>
                        <label> Status
                            <input 
                                type="text" 
                                name="status"
                                value={inputs.status || ""} 
                                onChange={handleChange}
                            />
                        </label>
                        <input type="submit" placeholder="Login"/>
                    </form>
                }
            </div>
        </div>
    )
}
