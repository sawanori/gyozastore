import React, { useState } from 'react'
import Link from 'next/link'
import Button from './Button'
import { Link as Scroll } from "react-scroll"

const Header = () => {
    const [isOpen, setIsOpen] = useState(true)
    const classOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className="md:text-xs  lg:text-xl ">
            <nav className="flex item-center justify-between flex-wrap bg-gray-800 text-white  p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <span className="md:text-xs lg:text-xl tracking-tight">宮崎ギョウザ製造直売所</span>
                </div>
                <div className="block md:hidden lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-400 hover:text-white hover:border-white" onClick={classOpen}>
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div >
                        <ul className={`md:flex md:justify-end ${isOpen ? "hidden" : ""}`}>

                            <li className="border-b md:border-none">
                                <Scroll to="no1" smooth={true} duration={600} offset={-30}>
                                    <a className="block px-8 py-2 my-4 hover:bg-gray-600 rounded">
                                        いっちゃが餃子とは
                                    </a>
                                </Scroll>
                            </li>

                            <li className="border-b md:border-none">
                                <Scroll to="no2" smooth={true} duration={600} offset={-30}>
                                    <a className="block px-8 py-2 my-4 hover:bg-gray-600 rounded">
                                        こだわり
                                    </a>
                                </Scroll>
                            </li>

                            <li className="border-b md:border-none">
                                <Scroll to="no3" smooth={true} duration={600} offset={-30}>
                                    <a className="block px-8 py-2 my-4 hover:bg-gray-600 rounded">
                                        美味しさのルーツ
                                    </a>
                                </Scroll>
                            </li>


                            <li className="border-b md:border-none">
                                <Scroll to="no4" smooth={true} duration={600} offset={-30}>
                                    <a className="block px-8 py-2 my-4 hover:bg-gray-600 rounded">
                                        美味しい作り方
                                    </a>
                                </Scroll>
                            </li>

                            <li className="border-b md:border-none">
                                <Scroll to="no4" smooth={true} duration={600} offset={-30}>
                                    <a className="block px-8 py-2 my-4 hover:bg-gray-600 rounded">
                                        購入はこちら
                                    </a>
                                </Scroll>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav >
        </header >
    )
}

export default Header
