import React from 'react'
import Image from 'next/image'
const MainLayout = ({ title, content, src }) => {
    return (
        <div className='flex flex-wrap '>
            <article className='w-full lg:w-1/5'>
                <Image
                    src={src}
                    layout="responsive"
                    width={300}
                    height={200}
                />
            </article>
            <aside className='w-full lg:w-4/5 flex flex-col justify-center'>
                <p className="m-10 sm:text-sm md:text-xl leading-9" >
                    {content}
                </p>
            </aside>
        </div>
    )
}

export default MainLayout
