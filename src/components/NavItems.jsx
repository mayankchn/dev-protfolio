import React from "react";

const NavItems = () => {
    return (
        <ul className="text-secondary-dark">
            <div className="container w-4/5 mx-auto">
                <div className="hidden sm:flex sm:justify-end sm:items-center sm:gap-8 sm:py-5 sm:text-xl sm:font-medium">
                    <li><a href="#about" className="hover:text-btn-default">About</a></li>
                    <li><a href="#projects" className="hover:text-btn-default">Projects</a></li>
                    <li><a href="#skills" className="hover:text-btn-default">Skills</a></li>
                    <li><a href="#contact" className="hover:text-btn-default">Contact</a></li>
                </div>
            </div>
        </ul>
    )
}
export default NavItems;