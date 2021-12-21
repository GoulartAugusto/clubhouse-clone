import React from 'react';
import { Link } from "react-router-dom";
import data from "../data/Activity.json";
import style from "../style/activity.explore.module.css";

function Activity() {
    const { id, image, title, description, time } = data;

    return (
    <>
    <div className={style.activityContainer}>
        <div className={style.activityHeader}>
            <Link to="/home">
                <img src="/images/arrow.png" alt="" className={style.arrow_icon} />
            </Link>
        <div>
            <p>Activity</p>
        </div>
        </div>
        <div>
            <div className={style.infoContainer}>
                {data.map((item) => (
                    <div className={style.activityCard}>

                            <img src="/images/user-img.jpg" alt="" />

                            <h6>
                            <strong>{item.title} </strong>
                            {item.description}
                            </h6>

                            <p>
                            {item.time}
                            </p>

                    </div>
                ))}
            </div>
        </div>
    </div>    
    </>
    )
}

export default Activity
