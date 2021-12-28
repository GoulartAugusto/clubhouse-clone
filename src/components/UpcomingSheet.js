import React from 'react'
import SwipeableBottomSheet from "react-swipeable-bottom-sheet"
import style from "../style/upcomingsheet.module.css"
import UpcomingInfo from './bottom_sheets/UpcomingInfo'

function UpcomingSheet(props) {

    return (

    <SwipeableBottomSheet

    open={props.sheetVisible}
    onChange={() => {
        props.setSheetVisible(!props.sheetVisible);
        props.setItemsVisible(true);
    }}
    fullScreen={props.sheetTitle == "upcoming detail" ? true: false}
    >
        <div
            className={style.upcomingsheetContainer}
            style={{
                backgroundColor: props.sheetTitle == 'profile' ? 'transparent' : ''
            }}
        >
            <UpcomingInfo />
        </div>


        
    </SwipeableBottomSheet>


)

}

export default UpcomingSheet