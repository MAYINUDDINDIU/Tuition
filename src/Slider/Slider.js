import { Carousel } from 'flowbite-react';
import React from 'react';
import slider from '../Assets/tution.jpg';
import slider1 from '../Assets/tution4.jpg';
const Slider = () => {
    return (
        <div>
            <div className="h-40 lg:px-12 lg:h-72 xl:h-96 2xl:h-96 rounded-none">
                <Carousel slideInterval={5000}>
                    <img
                        src={slider}
                        alt="..."
                    />
                    <img
                        src={slider1}
                        alt="..."
                    />

                </Carousel>
            </div>
        </div>
    );
};

export default Slider;