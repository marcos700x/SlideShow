import React, { Fragment, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

const SlideShow = ({ datos }) => {

    const [actual, setActual] = useState(0);
    const slideLength = datos.length;

    const nextSlide = () => {
        setActual(actual === slideLength - 1 ? 0 : actual + 1);
    }

    const prevSlide = () => {
        setActual(actual === 0 ? slideLength - 1 : actual - 1);
    }


    return (
        <div className='slideShow'>
            <button className='flechaIzquierda' onClick={prevSlide} >
                <AiOutlineArrowLeft size={'1.5rem'} />
            </button>
            <button className='flechaDerecha' onClick={nextSlide}>
                <AiOutlineArrowRight size={'1.5rem'} />
            </button>
            {datos.map((slide, index) =>

                <Fragment key={index}>
                    {index === actual ?
                        <div className='slide' style={{ backgroundImage: `url(${slide.imagen})` }} >
                            {
                                slide.titulo || slide.subtitulo ? 
                                <div className="textSlide">
                                {slide.titulo ? <h1>{slide.titulo}</h1> : null}
                                {slide.subtitulo ? <p>{slide.subtitulo}</p> : null}
                                </div>
                                : null
                            }
                            
                        </div>
                        : null}
                </Fragment>


            )}
            
        </div>
    )
}

export default SlideShow