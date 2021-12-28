import React, {useState} from 'react'
import style from "../style/invite.module.css"
import { Link } from "react-router-dom"
import PhoneInput from 'react-phone-number-input';


function Invite() {
    const [value, setValue] = useState();

    return (
        <div className={style.InviteContainer}>
            <div className={style.header}>
                <Link to="/home"><img src="/images/arrow.png" /></Link>
                <h2>Invite a friend to Join the App</h2>
            </div>
        <div>
            <h1>If you know someone who would like to use this app
                insert the number of this person and invite them to join in
            </h1>
        </div>
        <div className={style.PhoneNumber}>
        <PhoneInput international value={value} onChange={setValue} />
        </div>
        <button className={style.CodeBtn}>Send Invite Code</button>
        </div>
    )
}

export default Invite
