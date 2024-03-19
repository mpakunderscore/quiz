import React, {useEffect, useState} from 'react'
import Main from "./components/Main"

import './css/index.css'
import './css/main/colors.css'
import './css/main/fonts.css'
import './css/main/general.css'
import Admin from "./components/Admin";

function App() {

    // App on mobile phones and the website on desktop. Future there will be a website everywhere and app on /app
    const isMobile = window.innerWidth <= 600

    return <Admin/>

    // return <Main/>
}

export default App