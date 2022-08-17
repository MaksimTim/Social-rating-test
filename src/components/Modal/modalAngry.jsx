import React from 'react';
import s from './modal.module.css';
import wock from '../../assets/wock.png'

const ModalAngry = ({ vopros, socCredit, setSocCredit, visible, setVisible, currentQuest, setQuestion}) => {
    const rootClasses = [s.myModal]
    if (visible) {
        rootClasses.push(s.active)
    }

    const onClickYes = () => {
        setSocCredit(socCredit - 1000 * vopros.id);
        setQuestion(currentQuest + 1);
        setVisible(false);
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={s.myModalContent}>
                <img src={wock}/>
                <div>Вы уверены в своём выборе???</div>
                <button onClick={onClickYes}>Да</button>
                <button onClick={()=> setVisible(false)}>Нет</button>
            </div>

        </div>
    );
};

export default ModalAngry;