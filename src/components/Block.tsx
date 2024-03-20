import React, {FC, useContext, useEffect, useRef, useState} from "react";
declare let VERSION: string;
declare let GIT: string;

import '../css/components/block.css'
// import '../css/desktop/block.css'
// import '../css/desktop/media.css'

const Block = (props) => {

    // const values = []

    return (
        <div className={'block'}>

            <div className={'title'}>{props.block.title}</div>

            {props.values.map(value =>
                <div>
                    <div>{value.title}</div>
                    <div className={'value'}>{value.value}</div>
                </div>
            )}

        </div>)
}

export default Block;