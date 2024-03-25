import React, {FC, useContext, useEffect, useRef, useState} from "react";
declare let VERSION: string;
declare let GIT: string;

import '../css/components/main.css'
import Block from "./Block";
// import '../css/desktop/block.css'
// import '../css/desktop/media.css'

const Admin: FC<{}> = ({}) => {


    const [fontLoaded, setFontLoaded] = useState(false)
    useEffect(() => {
        document.fonts.ready.then(() => {
            setTimeout(() => setFontLoaded(true), 1000)
        });
    }, [])

    // console.log(fontLoaded)



    const lastSyncDate = new Date().toLocaleString()
    const unsyncedGamesCount = 0

    const version = VERSION
    const status = 'ONLINE'

    const availableGamesCount = 10

    const game = 'Main quiz'
    const gameTime = '21:13'
    const gamePlayers = 5

    const gameCount = 319
    const playersCount = 34

    const license = 'Super Business Raccoon'

    const hostObject = {status}

    const textAboutGame = ''

    const hostName = 'Host NAME'

    const difficulty = 'HARD'

    const hostData = [
        {
            title: 'NAME',
            value: 'Super Business Raccoon'
        },
        {
            title: 'ADDRESS',
            value: 'Street 1, Northern California, USA'
        },
        {
            title: 'PHONE',
            value: '+1 555 555 5555'
        },{
            title: 'GAMES LIBRARY',
            value: ''
        },
        {
            title: 'GAMES PLAYED',
            value: ''
        },
        {
            title: 'PLAYERS',
            value: ''
        },
        {
            title: 'ADMINS',
            value: ''
        },
        {
            title: 'MAC',
            value: ''
        },
        {
            title: 'IP',
            value: ''
        },
        {
            title: 'STATUS',
            value: ''
        },
        {
            title: 'VERSION',
            value: ''
        }
    ]

    const getHosts = async () => {
        const response = await fetch("/api/hosts");
        const hosts = await response.json();
        console.log()
        const hostsValues = hosts.map((host) => ({title: host.uuid, value: host.status.version}))
        setHosts(hostsValues)
        // console.log(hosts)
    }

    const [hosts, setHosts] = useState([])
    const [host, setHost] = useState(false)

    useEffect(() => {
        getHosts()
    }, []);

    const [settings, setSettings] = useState([
        {title: 'VERSION', value: VERSION},
        {title: 'GIT', value: GIT}
    ])

    return (
        <div className={'main'}>

            <Block block={{title: 'ADMIN'}} values={[
                {
                    title: 'NAME',
                    value: hostName
                }
            ]}/>

            <Block block={{title: 'GAMES'}} values={[
                {
                    title: 'Main quiz',
                    value: ''
                },
                {
                    title: '2nd quiz',
                    value: ''
                }
            ]}/>

            <Block block={{title: 'HOSTS'}} values={hosts} setHost={setHost}/>

            {host ? <Block block={{title: 'HOST DATA'}} values={hostData}/> : null}

            <Block block={{title: 'SCENARIOS'}} values={settings}/>

            <Block block={{title: 'SETTINGS'}} values={settings}/>

            <div className={'copyright'}>QUIZ CORPORATION</div>
        </div>)
}

export default Admin;