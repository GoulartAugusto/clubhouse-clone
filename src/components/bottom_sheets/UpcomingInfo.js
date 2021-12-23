import React from 'react'
import style from "../../style/bottomSheet.module.css";
import data from "../../data/UpcomingCard.json";
import { AiOutlineBell } from "react-icons/ai";
import style from "../../style/explore.module.css";

function UpcomingInfo(props) {
    const { time, title, description, images } = data;
    return (
        <>
        <div className={style.switch_Line}></div>
        <div className={style.SubjectsInfo}>

        {data.map((item) => (

            <div>
                <h6> {item.time}
                <AiOutlineBell size={25} className={style.bell}/>
                </h6>
                <h5> {item.title}</h5>
                <span id="user_span"><img src="/images/user-img.jpg" />
                <img src="/images/user-img2.jpg" />
                <img src="/images/user-img.jpg" />
                <img src="/images/user-img2.jpg" />
                </span>
                <p>{item.description}</p>
            </div>
        ))}



        </div>
        
        </>
    )
}

export default UpcomingInfo
