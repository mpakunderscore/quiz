import React, {FC, useContext, useEffect, useRef, useState} from "react";
declare let VERSION: string;
declare let GIT: string;

import '../css/components/block.css'
// import '../css/desktop/block.css'
// import '../css/desktop/media.css'

const Block = (props) => {

    // const values = []

    // console.log(props.values)

    const [isOpen, setOpen] = useState(false)

    const openValue = () => {
        // props.setHost(true)
    }

    return (
        <div className={'block'}>

            <div className={'title' + (isOpen ? ' active' : '')} onClick={() => setOpen(!isOpen)}>{props.block.title}</div>

            {isOpen && props.values.map((value, i) =>
                <div key={i} onClick={() => openValue()}>
                    <div>{value.title}</div>
                    <div>{value.value}</div>
                </div>
            )}

        </div>)
}

export default Block;