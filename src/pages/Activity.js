import React from 'react';
import { Link } from "react-router-dom";
import data from "../data/Activity.json";
import style from "../style/activity.module.css";
import SubHeader from "../components/SubHeader";

function Activity() {
    const { id, image, title, description, time } = data;

    return (
    <>
    <div className={style.activityContainer}>
        <SubHeader pageTitle="Activity" />

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
