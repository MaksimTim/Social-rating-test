import './app.scss';
import place from './assets/place.png';
import XiJinpin from './assets/XiJin.png';
import Taiwan from './assets/Taiwan.png';
import bear from './assets/bear.png';
import final2 from './assets/final2.png';
import final1 from './assets/final1.png';
import final3 from './assets/final3.png';

import ModalAngry from "./components/Modal/modalAngry";
import {useState} from "react";
import ModalGood from "./components/Modal/modalGood";

const questions = [
    {id: 1, img: XiJinpin, title: 'Вам нравится Си Цзиньпин?', ans1: 'Да', ans2: 'Нет'},
    {id: 2, img: place, title: 'Что случилось на прощади Тяньаньмэнь 1989 г?', ans1: 'Ничего', ans2: 'Бойня'},
    {id: 3, img: bear, title: 'Почему вам тоже не нравится этот мультфильм?', ans1: 'Это мерзкий капиталистичеий бургер свинья. удар!', ans2: 'Мне он вообще-то нравится'},
    {id: 4, img: Taiwan, title: 'Кому принадлежит Тайвань?', ans1: 'Великому Китаю!', ans2: 'Тайвань и есть настоящий китай!'},

]

function App() {
    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)
    const [currentQuest, setCurrentQuest] = useState(0)
    const [socCredit, setSocCredit] = useState(0)

    const vopros = questions[currentQuest]

    const leftClick = () => {
        setModal2(true)
        setSocCredit(socCredit + 200 * vopros.id)
    }
    const rightClick = () => {
        setModal(true)
    }

    if (currentQuest > 3) {
        let finalImg = final3
        if (socCredit > 1500) {
            finalImg = final2
        } else if (socCredit < 0) {
            finalImg = final1
        }
        return <div className="wrapper">
            Ваш социальный рейтинг: {socCredit}
            <img src={finalImg} alt='socialImage'/>
        </div>
    }

    return (
        <div className="App">
            <ModalAngry vopros={vopros} socCredit={socCredit} setSocCredit={setSocCredit} visible={modal} setVisible={setModal} currentQuest={currentQuest} setQuestion={setCurrentQuest}/>
            <ModalGood visible={modal2} setVisible={setModal2} currentQuest={currentQuest} setQuestion={setCurrentQuest}/>
            <div className="wrapper">
                <div className="questions">
                    <div className="header">Ваш социальный рейтинг: {socCredit}</div>
                    <div className="image"><img src={vopros.img} alt='imageVoprosa'/></div>
                    <div className="question">{vopros.title}</div>
                </div>
                <div className="answers">
                    <div onClick={leftClick}>{vopros.ans1}</div>
                    <div onClick={rightClick}>{vopros.ans2}</div>
                </div>
            </div>

        </div>
    );
}

export default App;
