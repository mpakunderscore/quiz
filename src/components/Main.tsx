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

            <div className={'title'}>HOST</div>

            <div>
                <div>NAME</div>
                <div className={'value'}>{hostName}</div>
            </div>

            <div className={'title'}>MAIN</div>

            <div>
                <div>SELECT GAME</div>
                <div className={'value'}>{game}</div>
            </div>

            <div className={'title'}>CURRENT GAME INFORMATION</div>

            <div>
                <div>NAME</div>
                <div className={'value'}>{game}</div>
            </div>
            <div>
                <div>DIFFICULTY</div>
                <div className={'value'}>{difficulty}</div>
            </div>
            <div>
                <div>STARTED</div>
                <div className={'value'}>{new Date().toLocaleString()}</div>
            </div>
            <div>
                <div>TIME</div>
                <div className={'value'}>{gameTime}</div>
            </div>
            <div>
                <div>PLAYERS</div>
                <div className={'value'}>{gamePlayers}</div>
            </div>

            <div className={'title'}>CURRENT GAME CONTROLS</div>

            <div>
                <div>START</div>
                <div className={'value'}>{}</div>
            </div>

            <div>
                <div>PAUSE</div>
                <div className={'value'}>{}</div>
            </div>

            <div>
                <div>FINISH</div>
                <div className={'value'}>{}</div>
            </div>

            <div className={'title'}>CURRENT GAME STATE</div>

            <div className={'block'}>
                <div>GAME INFORMATION</div>
                <div className={'text'}>{textAboutGame}</div>
                <div
                    className={'text'}>{'Welcome to the Global Knowledge Quest, where minds from across the world gather to challenge their intellect. Prepare to embark on a journey through knowledge, trivia, and puzzles. May the best brain win!'}</div>
            </div>
            <div>
                <div>INTRO</div>
                <div className={'value'}>{}</div>
            </div>
            <div>
                <div>LEVEL 1</div>
                <div className={'value'}>{}</div>
            </div>
            <div>
                <div>LEVEL 2</div>
                <div className={'value'}>{}</div>
            </div>
            <div>
                <div>LEVEL 3</div>
                <div className={'value'}>{}</div>
            </div>
            <div>
                <div>LEVEL 4</div>
                <div className={'value'}>{}</div>
            </div>

            <div>
                <div>FINAL</div>
                <div className={'value'}>{}</div>
            </div>

            <div>
                <div>RESULTS</div>
                <div className={'value'}>{}</div>
            </div>

            <div className={'title'}>GAMES</div>

            <div>
                <div>Main quiz</div>
                <div className={'value'}>{'10 min'}</div>
            </div>

            <div>
                <div>TV quiz</div>
                <div className={'value'}>{'20 min'}</div>
            </div>

            <div className={'title'}>HOST DATA</div>

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
                <div>HOSTS</div>
                <div className={'value'}>{4}</div>
            </div>

            <div className={'title'}>SETTINGS</div>

            <div>
                <div>LICENSE</div>
                <div className={'value'}>{license}</div>
            </div>
            <div>
                <div>STATUS</div>
                <div className={'value'}>{status}</div>
            </div>
            <div>
                <div>VERSION</div>
                <div className={'value'}>{version}</div>
            </div>
            <div>
                <div>UPDATE</div>
                <div className={'value'}>{}</div>
            </div>
            <div>
                <div>LAST SYNC</div>
                <div className={'value'}>{lastSyncDate}</div>
            </div>
            <div>
                <div>UNSYNCED GAMES</div>
                <div className={'value'}>{unsyncedGamesCount}</div>
            </div>
            <div>
                <div>AVAILABLE OFFLINE GAMES</div>
                <div className={'value'}>{availableGamesCount}</div>
            </div>

            <div className={'copyright'}>QUIZ CORPORATION</div>
        </div>)
}

export default Main;