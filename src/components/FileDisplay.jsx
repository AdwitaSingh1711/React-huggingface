import React from 'react'

export default function FileDisplay(props){
    const {handleAudioReset, file, audioStream} = props
    return(
        <main className='flex-1 p-4 flex flex-col gap-3 text-center
        sm:gap-4 md:gap-5 justify-center pb-10'>
            <h1 className='font-semibold text-5xl sm:text-6xl md:text-6xl'>
                Your <span className='text-blue-400 bold'>Notes hehe</span>
            </h1>
        </main>
    )
}