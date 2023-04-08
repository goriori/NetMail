import React from "react";
import {ProgressBar} from 'react-bootstrap'
import './progress.css'
const ProgressDisk = ()=> {
    return(
        <div className="progress_disk mt-4 ">
           <ProgressBar now={60} id="progress_element"/>
           <p className="description_disk">Заполнено 10 из 15 ГБ</p>
        </div>
    )
}

export default ProgressDisk