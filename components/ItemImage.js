import React from 'react'
import Image from 'next/image'

const ItemImage = ({ src }) => {
    return (
        <article className='flex justify-center items-center'>
            <div >
                <Image
                    src={src}
                    width={800}
                    height={500}
                />
            </div>
        </article>
    )
}

export default ItemImage
