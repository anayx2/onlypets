'use client'

import React, { useState } from 'react'
import ReactPlayer from 'react-player'

const TipsbyExperts = () => {
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Tips by Experts
                </h2>
                <p className="text-gray-600">
                    You cannot go wrong with these!
                </p>
            </div>

            <div className="relative max-w-[90%] mx-auto rounded-3xl overflow-hidden">
                {/* React Player */}
                <ReactPlayer
                    url="/homepagevideo.mp4" // Local or external video URL
                    playing={isPlaying}
                    controls={true} // Enables built-in controls
                    width="100%"
                    height="100%"
                    className="rounded-3xl"
                    onPlay={handlePlay}
                    onPause={handlePause}
                />

                {/* Play/Pause Overlay */}
                {!isPlaying && (
                    <div
                        className="absolute inset-0 bg-black/30 flex items-center justify-center"
                        onClick={() => setIsPlaying(true)} // Start playing when overlay is clicked
                    >
                        <button
                            className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center"
                            aria-label="Play video"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="white"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
                                />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TipsbyExperts
