import React from 'react'
import Image from 'next/image'

const BasicLayout = ({ children, content, src }) => {
    return (
        <div className='flex flex-wrap'>
            <article className='w-full lg:w-2/5 '>
                <div >
                    <Image
                        src={src}
                        layout="responsive"
                        width={400}
                        height={300}
                    />
                </div>
            </article>
            <aside className='w-full lg:w-3/5 flex justify-ceter items-center'>
                <div>
                    <p className="sm:text-sm md:text-xl p-5 lg:m-16 leading-10 text-left ">
                        {content}
                    </p>
                </div>
            </aside>

        </div>
    )
}

export default BasicLayout
