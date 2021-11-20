import React from 'react'
import Link from 'next/link'

const LinkBlock = ({ url }) => {
    console.log(url)

    return (
        <div className="w-5/6  bg-yellow-300 h-20 my-5 shadow-xl flex justify-center items-center cursor-pointer rounded-md">
            <Link href={url} passHref>
                <button className="text-3xl ">この商品をすぐ注文！</button>
            </Link>
        </div>
    )
}

export default LinkBlock
