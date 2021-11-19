import React from 'react'
import Link from 'next/link'

const LinkBlock = () => {

    return (
        <div className="w-5/6  bg-yellow-300 h-20 my-5 shadow-xl flex justify-center items-center cursor-pointer rounded-md">
            <Link href="https://store.shopping.yahoo.co.jp/icchyaga/1003.html?sc_i=shp_pc_store-item_rcmditm">
                <button className="text-3xl ">この商品をすぐ注文！</button>
            </Link>
        </div>
    )
}

export default LinkBlock
