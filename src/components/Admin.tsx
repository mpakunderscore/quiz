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

    const version = VERSION + ' ' + GIT
    const status = 'ONLINE'

    const availableGamesCount = 10

    const game = 'Main quiz'
    const gameTime = '21:13'
    const gamePlayers = 5

    const gameCount = 319
    const playersCount = 34

    const license = 'Super Business Raccoon'

    const hostObject = {status}

    const quizShow = {
        "name": "Ultimate Brain Challenge",
        "host": "Alex Smart",
        "location": "Downtown Convention Center",
        "date": "2024-03-20",
        "time": "19:00",
        "categories": [
            {
                "name": "General Knowledge",
                "questions": [
                    {
                        "level": "easy",
                        "question": "What is the capital of France?",
                        "options": ["Paris", "London", "Berlin", "Madrid"],
                        "answer": "Paris"
                    },
                    {
                        "level": "medium",
                        "question": "In what year did the Titanic sink?",
                        "options": ["1912", "1905", "1898", "1923"],
                        "answer": "1912"
                    }
                ]
            },
            {
                "name": "Science and Nature",
                "questions": [
                    {
                        "level": "easy",
                        "question": "What is the chemical symbol for gold?",
                        "options": ["Au", "Ag", "Ge", "Hg"],
                        "answer": "Au"
                    },
                    {
                        "level": "medium",
                        "question": "What planet is known as the Red Planet?",
                        "options": ["Mars", "Jupiter", "Saturn", "Venus"],
                        "answer": "Mars"
                    }
                ]
            },
            {
                "name": "Pop Culture",
                "questions": [
                    {
                        "level": "easy",
                        "question": "Who is known as the 'King of Pop'?",
                        "options": ["Elvis Presley", "Michael Jackson", "Justin Bieber", "Prince"],
                        "answer": "Michael Jackson"
                    },
                    {
                        "level": "medium",
                        "question": "Which movie won the Oscar for Best Picture in 2020?",
                        "options": ["Parasite", "Joker", "1917", "Once Upon a Time in Hollywood"],
                        "answer": "Parasite"
                    }
                ]
            }
        ],
        "rules": {
            "timeLimitPerQuestion": "30 seconds",
            "pointsPerQuestion": {
                "easy": 10,
                "medium": 20,
                "hard": 30
            },
            "penaltyForWrongAnswer": "No points deducted",
            "finalRound": {
                "questions": 5,
                "timeLimitPerQuestion": "45 seconds",
                "pointsPerQuestion": 50,
                "mustAnswerAllQuestions": true
            }
        }
    }

    const textAboutGame = ''

    const hostName = quizShow.host

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

            <Block block={{title: 'HOSTS'}} values={hosts}/>

            {host ? <Block block={{title: 'HOST DATA'}} values={hostData}/> : null}

            <Block block={{title: 'SETTINGS'}} values={[{title: 'VERSION', value: version}]}/>

            <div className={'copyright'}>QUIZ CORPORATION</div>
        </div>)
}

export default Admin;