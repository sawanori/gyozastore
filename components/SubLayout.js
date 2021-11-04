import React from 'react'
import Image from 'next/image'
const SubLayout = ({ title, content, src }) => {
    return (
        <div className='flex flex-wrap lg:flex-row-reverse'>
            <article className='w-full lg:w-2/5'>
                <Image
                    src={src}
                    layout="responsive"
                    width={400}
                    height={300}
                />
            </article>
            <aside className='w-full lg:w-3/5 flex flex-col justify-center'>
                <h1 className="text-3xl bg-yellow-300 max-w-xl text-center">{title}</h1>
                <p className="m-10 sm:text-sm md:text-xl leading-9" >
                    {content}
                </p>
            </aside>
        </div>
    )
}

export default SubLayout
