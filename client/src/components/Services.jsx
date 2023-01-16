import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/img6.jpg';
import img2 from '../assets/img7.jpg';
import img3 from '../assets/img8.jpg';

const NotableAlumni = () => {
  return (
    <div className='Services'>
        <Carousel infiniteLoop autoPlay interval={1000}>
            <div>
                <img src={img1} alt="Item1" />
                <p className='legend'>Vaijayani, 2021.</p>

            </div>

            <div>
                <img src={img2} alt="Item2" />
                <p className='legend'>Dignitories, Alumni Reunion 2021.</p>
            </div>

            <div>
                <img src={img3} alt="Item3" />
                <p className='legend'>Connect back with your batch mates and institute.</p>
            </div>

        </Carousel>
    </div>
  )
}

export default NotableAlumni;