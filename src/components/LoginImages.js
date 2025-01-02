import Image from 'next/image';
import React, { useState } from 'react';

// Array of image objects
const img = [
    { src: '/topproducts/p1.jpg' },
    { src: '/topproducts/p2.jpg' },
    { src: '/topproducts/p3.jpg' },
    { src: '/topproducts/p1.jpg' },
    { src: '/topproducts/p2.jpg' },
    { src: '/topproducts/p3.jpg' },
    { src: '/topproducts/p1.jpg' },
    { src: '/topproducts/p2.jpg' },
    { src: '/topproducts/p3.jpg' },
    { src: '/topproducts/p1.jpg' },
    { src: '/topproducts/p2.jpg' },
    { src: '/topproducts/p3.jpg' },
];
const img1 = [
    { src: '/topproducts/p4.jpg' },
    { src: '/topproducts/p5.jpg' },
    { src: '/topproducts/p3.jpg' },
    { src: '/topproducts/p4.jpg' },
    { src: '/topproducts/p5.jpg' },
    { src: '/topproducts/p3.jpg' },
    { src: '/topproducts/p4.jpg' },
    { src: '/topproducts/p5.jpg' },
    { src: '/topproducts/p3.jpg' },
    { src: '/topproducts/p4.jpg' },
    { src: '/topproducts/p5.jpg' },
    { src: '/topproducts/p3.jpg' },
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
        <div>
            <div className="overflow-hidden w-full py-4">
                {/* Inject keyframes directly into the component */}
                <style>{keyframesStyle}</style>
                {/* Marquee Container */}
                <div style={{ overflow: 'hidden', width: '100%' }}>
                    <div style={marqueeStyle}>
                        {img.map((image, index) => (
                            <Image
                                key={index}
                                src={image.src}
                                alt={`Image ${index + 1}`}
                                width={100}
                                height={100}
                                style={{ borderRadius: '8px' }}
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
                        {img.map((image, index) => (
                            <Image
                                key={index}
                                src={image.src}
                                alt={`Image ${index + 1}`}
                                width={100}
                                height={100}
                                style={{ borderRadius: '8px' }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginImages;