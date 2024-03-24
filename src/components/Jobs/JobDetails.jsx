import React, { useState } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"

export default function JobDetails() {
    const [open, setOpen] = useState(false);
    const [inputs, setInputs] = useState({});
    const { jobId } = useParams();
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        // Add logic to handle form submission, e.g., send data to the server
    };

    return (
        <div className="job-details-component">
            <div>
                <h3>Job Applications</h3>
                <Link to="../"> 
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </Link>
            </div>
            <div>
                <div className="job-info-left">
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className="job-info-right">
                    <p></p>
                    <p></p>
                    <div></div>
                </div>
                <button onClick={() => setOpen(prev => !prev)}>Update</button>
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
                        <input type="submit" value="Update"/>
                    </form>
                }
            </div>
        </div>
    )
}
