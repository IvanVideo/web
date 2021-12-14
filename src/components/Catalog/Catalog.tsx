import './Catalog.css';
import mint from '../../images/1.jpeg';
import chabrec from '../../images/2.jpg';
import mintNew from '../../images/3.jpg';
import cabrec2 from '../../images/4.jpg';


const Catalog = () => {
    return (
        <section className='catalog'>
            <div className='conteiner'>
                <h2 className='catalog__title'>Каталоги нашей продукции</h2>
                <div className='catalog__box'>
                    <div className='catalog__item'>
                        <img src={mint} className='catalog__img' />
                        <p className='catalog__name'>MounTea листья мяты</p>
                    </div>
                    <div className='catalog__item'>
                        <img src={chabrec} className='catalog__img img2' />
                        <p className='catalog__name'>MounTea листья мяты</p>
                    </div>
                    <div className='catalog__item'>
                        <img src={mintNew} className='catalog__img img3' />
                        <p className='catalog__name'>MounTea листья мяты</p>
                    </div>
                    <div className='catalog__item'>
                        <img src={cabrec2} className='catalog__img img4' />
                        <p className='catalog__name'>MounTea листья мяты</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Catalog;