import React from "react";

const Footer = () => {
    return (
        <footer className="text-secondary-dark mt-8">
            <div className="container w-4/5 border mx-auto">
                <div className="border flex flex-col gap-6 max-w-lg mx-auto px-20 py-12">
                    <div className="flex gap-2 justify-evenly">
                        <span className="w-10">
                            <a href="https://github.com/mayankchn" target="_blank"><img src="/github.png" alt="" className="w-full h-full aspect-square" /></a>
                        </span>
                        <span className="w-10">
                            <a href="https://www.linkedin.com/in/mayank-chauhan-864a90222/" target="_blank"><img src="/linkedin.png" alt="" className="w-full h-full aspect-square" /></a>
                        </span>
                        <span className="w-10">
                            <a href="https://www.instagram.com/grasshopper005/" target="_blank"><img src="/instagram.png" alt="" className="w-full h-full aspect-square" /></a>
                        </span>
                        <span className="w-10">
                            <a href="https://twitter.com/themayankchn5" target="_blank"><img src="/twitter.png" alt="" className="w-full h-full aspect-square" /></a>
                        </span>
                    </div>
                    <p className="self-center">Copyright ©2022 All rights reserved </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer