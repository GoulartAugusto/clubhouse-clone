import React from 'react'
import SwipeableBottomSheet from "react-swipeable-bottom-sheet"
import style from "../style/bottomSheet.module.css"
function BottomSheet(props) {
    return (
        
            <SwipeableBottomSheet
            open={props.sheetVisible}
            onChange={() => {
                props.setSheetVisible(!props.SheetVisible);
                props.setItemsVisible(true);
            }}
            fullScreen={props.sheetTitle == "room detail" ? true: false}
            >
                <div
                className={style.BottomSheetContainer}
                style={{
                    backgroundColor: props.sheetTitle == 'profile' ? 'transparent' : ''
                }}></div>
            </SwipeableBottomSheet>
        
    )
}

export default BottomSheet
