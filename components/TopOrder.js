import React from 'react'

const TopOrder = ({content}) => {
    return (
        <div className="flex justify-center">
            <div className="text-xl lg:text-5xl flex flex-col  sm:my-0 lg:my-7 font-zen">
                <h2>{content}</h2>
            </div>

        </div>
    )
}

export default TopOrder

