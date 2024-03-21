import React, {FC, useContext, useEffect, useRef, useState} from "react";
declare let VERSION: string;
declare let GIT: string;

import '../css/components/block.css'
// import '../css/desktop/block.css'
// import '../css/desktop/media.css'

const Block = (props) => {

    // const values = []

    // console.log(props.values)

    return (
        <div className={'block'}>

            <div className={'title'}>{props.block.title}</div>

            {props.values.map((value, i) =>
                <div key={i}>
                    <div>{value.title}</div>
                    <div className={'value'}>{value.value}</div>
                    <div>{value.uuid}</div>
                    {/*<div>{value.id}</div>*/}
                    {value.status ? <div>{value.status.version}</div> : ''}
                </div>
            )}

        </div>)
}

export default Block;