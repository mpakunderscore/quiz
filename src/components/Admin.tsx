import React, {FC, useContext, useEffect, useRef, useState} from "react";
declare let VERSION: string;
declare let GIT: string;

import '../css/components/main.css'
// import '../css/desktop/block.css'
// import '../css/desktop/media.css'

const Main: FC<{}> = ({}) => {


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

    return (
        <div className={'main'}>

            <div className={'title'}>ADMIN</div>

            <div>
                <div>NAME</div>
                <div className={'value'}>{hostName}</div>
            </div>

            <div className={'title'}>GAMES</div>

            <div>
                <div>Main quiz</div>
                <div className={'value'}>{''}</div>
            </div>

            <div>
                <div>TV quiz</div>
                <div className={'value'}>{''}</div>
            </div>

            <div className={'title'}>HOSTS</div>

            <div>
                <div>Host 1</div>
                <div className={'value'}>{'ONLINE / 0.1.1'}</div>
            </div>

            <div>
                <div>Host 2</div>
                <div className={'value'}>{'OFFLINE 3 days / 0.1.0'}</div>
            </div>

            <div className={'title'}>HOST DATA</div>

            <div>
                <div>NAME</div>
                <div className={'value'}>{'Super Business Raccoon'}</div>
            </div>

            <div>
                <div>ADDRESS</div>
                <div className={'value'}>{'Street 1, Northern California, USA'}</div>
            </div>

            <div>
                <div>PHONE</div>
                <div className={'value'}>{'+1 555 555 5555'}</div>
            </div>

            <div>
                <div>GAMES LIBRARY</div>
                <div className={'value'}>{3}</div>
            </div>

            <div>
                <div>GAMES PLAYED</div>
                <div className={'value'}>{gameCount}</div>
            </div>

            <div>
                <div>PLAYERS</div>
                <div className={'value'}>{playersCount}</div>
            </div>
            <div>
                <div>ADMINS</div>
                <div className={'value'}>{4}</div>
            </div>

            <div>
                <div>MAC</div>
                <div className={'value'}>{}</div>
            </div>
            <div>
                <div>IP6</div>
                <div className={'value'}>{}</div>
            </div>
            <div>
                <div>IP</div>
                <div className={'value'}>{}</div>
            </div>
            <div>
                <div>INNER IP</div>
                <div className={'value'}>{}</div>
            </div>
            <div>
                <div>STATUS</div>
                <div className={'value'}>{status}</div>
            </div>
            <div>
                <div>VERSION</div>
                <div className={'value'}>{version}</div>
            </div>

            <div className={'title'}>HOST UPDATE</div>

            <div>
                <div>VERSION</div>
                <div className={'value'}>{version}</div>
            </div>

            <div className={'title'}>SETTINGS</div>

            <div>
                <div>STATUS</div>
                <div className={'value'}>{status}</div>
            </div>
            <div>
                <div>VERSION</div>
                <div className={'value'}>{version}</div>
            </div>

            <div className={'copyright'}>QUIZ CORPORATION</div>
        </div>)
}

export default Main;