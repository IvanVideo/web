import React from 'react';
import './WhyWe.css';
import item1 from '../../images/item1.svg';
import item2 from '../../images/item2.svg';
import item3 from '../../images/item3.svg';

const WhyWe = () => {
    return (
        <section className='we'>
            <h4 className='we__title'>Почему стоит работать именно с нами?</h4>
            <img src={item1}/>
            <img src={item2}/>
            <img src={item3}/>
            <ul>
                <li><h5>Всегда свежая обжарка</h5>
                    Подбор степени обжарки под каждый сорт кофе. Всегда свежая обжарка</li>
                <li><h5>Лучшие цены на продукцию</h5> 
                    Благодаря крупным объемам производства мы даем лучшие цены на нашу продукцию</li>
                <li><h5>Консультации 24/7</h5> 
                    Наши специалисты готовы всегда помочь
                    и подсказать вам с выбором кофе или другой продукции.</li>
            </ul>
        </section>
    );
}

export default WhyWe;