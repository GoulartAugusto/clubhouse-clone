import React, { useState } from 'react';
import style from "../style/upcoming.module.css";
import data from "../data/UpcomingCard.json";
import { AiOutlineBell, AiOutlineCalendar } from "react-icons/ai";
import {Link} from "react-router-dom"


function Upcoming() {
    const { time, title, description, images } = data;

    return (

        <>
        <div className={style.header}>
            <Link to="/home"><img src="/images/arrow.png" /></Link>
            <h2>UPCOMING FOR YOU</h2>
            <button>
                <AiOutlineCalendar size={30} />
            </button>    
        </div>

        <div className={style.UpcomingContainer}>

        <div className={style.todayBar}> TODAY</div>

        

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


        </div>
        </>
    )
}

export default Upcoming
