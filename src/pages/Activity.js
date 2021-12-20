import React from 'react';
import { Link } from "react-router-dom";
import data from "../data/Activity";
import style from "../style/activity.explore.module.css";

function Activity() {
    return (
    <>
    <div className={style.activityContainer}>
        <div className={style.activityHeader}>
            <Link to="/home">
                <img src="/images/arrow.png" alt="" className="arrow_icon" />
            </Link>
        </div>
    </div>    
    </>
    )
}

export default Activity
