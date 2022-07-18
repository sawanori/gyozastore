import React from 'react'
import Image from 'next/image'


const TopOrder = ({ content, src }) => {
    return (
        <div className="flex justify-center">
            <div className="text-xl lg:text-5xl flex sm:flex-row md:flex-col  sm:my-0 lg:my-7 font-zen">
                <h2>{content}</h2>
            </div>

        </div>
    )
}

export default TopOrder

