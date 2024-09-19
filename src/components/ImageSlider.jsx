import {PropTypes} from 'prop-types';
import { useState } from 'react';
import '../css/ImageSlider.css'


function ImageSlider({imageUrls}) {
    const [imageIndex, setImageIndex] = useState(0);
    const [mouseLast, setMouseLast] = useState(0);
    const dragSpeed = 500;


    const buttonNext = () => {
        if(imageIndex === imageUrls.length-1){
            return 0
        } else {
            return imageIndex+1
        }
    }
    const buttonPrev = () => {
        if(imageIndex === 0) {
            return imageUrls.length-1
        } else{
            return imageIndex-1
        }
    }
    const onDrag = (event) => {
        const {clientX} = event.touches[0]

        requestAnimationFrame(() => {
            const newIndex = imageIndex + (mouseLast - clientX)/dragSpeed
            if(newIndex >= 0 && newIndex <= imageUrls.length-1){
                setImageIndex(newIndex)
            }
        }) 
        setMouseLast(clientX)
    }
    const touchEnd = () => {
        setImageIndex(Math.round(imageIndex))
    }
    const touchStart = (event) => {
        const {clientX} = event.touches[0]
        setMouseLast(clientX)
    }

  return (
    <section className='imageslider'>

        <div onTouchMove={onDrag} onTouchStart={touchStart} onTouchEnd={touchEnd} className="imageslider--images">
            {imageUrls.map((url, i) => {
                return <img style={{translate:`${-100 * imageIndex}%` }} className="imageslider--images__image" key={i} src={url} />
            })}
        </div>
        <button onClick={() => setImageIndex(buttonNext)}>Next</button>
        <button onClick={() => setImageIndex(buttonPrev)}>Prev</button>
    </section>
  )
}

ImageSlider.propTypes = {
    imageUrls: PropTypes.array,
}

export default ImageSlider