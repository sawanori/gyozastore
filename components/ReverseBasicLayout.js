import React from 'react'
import Image from 'next/image'

const ReverseBasicLayout = ({ content, src }) => {
    return (
        <div className='flex flex-wrap  lg:flex-row-reverse'>
            <article className='w-full lg:w-2/5'>
                <Image
                    src={src}
                    layout="responsive"
                    width={400}
                    height={300}
                />
            </article>
            <aside className='w-full lg:w-3/5 flex justify-ceter items-center'>
                <p className="sm:text-sm md:text-xl p-5 lg:m-16 leading-10 text-left">
                    {content}
                </p>
            </aside>

        </div>
    )
}

export default ReverseBasicLayout
