import React from 'react';
import s from "./modal.module.css";
import johnCena from '../../assets/johnCena.png'

const ModalGood = ({visible, setVisible, setQuestion, currentQuest}) => {
    const rootClasses = [s.myModal]
    if (visible) {
        rootClasses.push(s.active)
    }

    const onClickYes = () => {
        setVisible(false);
        setQuestion(currentQuest + 1);
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={s.myModalContent}>
                <img src={johnCena}/>
                <div>Отлично!!!</div>
                <button onClick={()=> onClickYes()}>Xi! Удар!</button>
            </div>
        </div>
    );
};

export default ModalGood;