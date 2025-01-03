import Image from 'next/image';
import React, { useState } from 'react';

// Array of image objects
const img = [
    { src: '/loginpage/1.png' },
    { src: '/loginpage/2.png' },
    { src: '/loginpage/3.png' },
    { src: '/loginpage/4.png' },
    { src: '/loginpage/5.png' },
    { src: '/loginpage/6.png' },
    { src: '/loginpage/7.png' },
    { src: '/loginpage/8.png' },
    { src: '/loginpage/9.png' },
    { src: '/loginpage/10.png' },
    { src: '/loginpage/1.png' },
    { src: '/loginpage/2.png' },
    { src: '/loginpage/3.png' },
    { src: '/loginpage/4.png' },
    { src: '/loginpage/5.png' },
    { src: '/loginpage/6.png' },
    { src: '/loginpage/7.png' },
    { src: '/loginpage/8.png' },
    { src: '/loginpage/9.png' },
    { src: '/loginpage/10.png' },

];
const img1 = [
    { src: '/loginpage/11.png' },
    { src: '/loginpage/12.png' },
    { src: '/loginpage/13.png' },
    { src: '/loginpage/14.png' },
    { src: '/loginpage/15.png' },
    { src: '/loginpage/16.png' },
    { src: '/loginpage/17.png' },
    { src: '/loginpage/18.png' },
    { src: '/loginpage/19.png' },
    { src: '/loginpage/20.png' },
    { src: '/loginpage/11.png' },
    { src: '/loginpage/12.png' },
    { src: '/loginpage/13.png' },
    { src: '/loginpage/14.png' },
    { src: '/loginpage/15.png' },
    { src: '/loginpage/16.png' },
    { src: '/loginpage/17.png' },
    { src: '/loginpage/18.png' },
    { src: '/loginpage/19.png' },
    { src: '/loginpage/20.png' },

];

const LoginImages = () => {
    const [speed, setSpeed] = useState(15);

    const marqueeStyle = {
        display: 'flex',
        animation: `marquee ${speed}s linear infinite`,
        gap: '1rem', // Spacing between images
    };

    const keyframesStyle = `
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
    `;
    return (
        <>
            <div className="relative">
                <div className="overflow-hidden w-full py-4">
                    {/* Inject keyframes directly into the component */}
                    <style>{keyframesStyle}</style>
                    {/* Marquee Container */}
                    <div style={{ overflow: 'hidden', width: '100%' }}>
                        <div style={marqueeStyle}>
                            {img.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    alt={`Image ${index + 1}`}
                                    className='bg-orange-300'
                                    style={{ borderRadius: '8px', width: "6rem" }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden w-full py-4">
                    {/* Inject keyframes directly into the component */}
                    <style>{keyframesStyle}</style>
                    {/* Marquee Container */}
                    <div style={{ overflow: 'hidden', width: '100%' }}>
                        <div style={marqueeStyle}>
                            {img1.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    alt={`Image ${index + 1}`}
                                    className='bg-orange-300'

                                    style={{ borderRadius: '8px', width: "6rem" }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#FF7700] to-transparent"></div>
                </div>
            </div>
        </>
    );
};

export default LoginImages;
