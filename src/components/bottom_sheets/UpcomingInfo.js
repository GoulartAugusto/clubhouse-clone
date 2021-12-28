import React from 'react'
import style from "../../style/upcoming.module.css";
import data from "../../data/UpcomingCard02.json";
import { AiOutlineBell, AiOutlineCopy, AiOutlineTwitter } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import {Link} from "react-router-dom"



function UpcomingInfo(props) {
    const [ time, title, description, images ] = data;

    return (
        <>
        <div className={style.UpcomingSheetContainer}>
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
        <p><a href="">
            <FiShare /> share <AiOutlineTwitter />Tweet <AiOutlineCopy />Copy Link <AiOutlineCopy />Add to Call
        </a></p>
        <button onClick={"/home"} className={style.JoinBtn}>Join the room in progress</button>
        </div>
        </>

    )
}

export default UpcomingInfo
