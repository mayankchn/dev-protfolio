import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import NavItems from "./NavItems";
import { RxCrossCircled } from "react-icons/rx"

const Navbar = () => {
    const [burger, setBurger] = useState(false)

    function handleBurger() {
        console.log('burder clicked...')
        setBurger((prevBurger) => {
            return !prevBurger
        })
    }

    return (
        <nav className="bg-back-default text-secondary-dark">
            <div className="container w-4/5 mx-auto">
                <div className="flex justify-end py-5 sm:hidden">
                    {!burger && <GiHamburgerMenu
                        className="text-3xl"
                        onClick={handleBurger}
                    ></GiHamburgerMenu>}
                    {
                        burger && <ul className="flex flex-col text-xl font-medium gap-8">
                            <li><RxCrossCircled
                                className="text-3xl"
                                onClick={handleBurger}
                            ></RxCrossCircled></li>
                            <li><a href="#about" className="hover:text-btn-default">About</a></li>
                            <li><a href="#projects" className="hover:text-btn-default">Projects</a></li>
                            <li><a href="#skills" className="hover:text-btn-default">Skills</a></li>
                            <li><a href="#contact" className="hover:text-btn-default">Contact</a></li>
                        </ul>
                    }
                </div>
                <NavItems />
            </div>
        </nav>
    )
}
export default Navbar;