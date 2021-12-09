import React from 'react';
import './Main.css';
import element from '../../images/Vector.png';

const Main = () => {
    return (
        <section className='main'>
            <div className='main__conteiner'>
                <h1 className='main__title'>Свежеобжаренный кофе</h1>
                <p className='main__description'>Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.</p>
                    <p className='main__description-too'>Мы обжариваем кофе каждые выходные.</p>
                <button className='main__button'>Посмотреть каталог</button>
            </div>
            <img src={element} className='main__element' />
        </section>
    );
}

export default Main;