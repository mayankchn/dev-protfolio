import React from "react";

const About = () => {
    return (
        <main className="mt-8 text-secondary-dark" id="about">
            <div className="container w-4/5 mx-auto">
                <div className="flex flex-col gap-5 border items-center py-8 px-2 sm:flex sm:flex-row sm:justify-between sm:items-start lg:px-20">
                    <div className="w-1/2 sm:order-2 sm:w-60">
                        <img src="/manku.jpg" alt="lalisa" className="w-full h-full aspect-square object-cover rounded-full" />
                    </div>
                    <div className="flex flex-col items-center gap-7 sm:w-1/2 sm:order-1 sm:gap-10">
                        <h1 className="text-3xl font-bold leading-10 w-4/5 mx-auto sm:text-start text-center sm:w-full lg:text-5xl">Hi, I'm Mayank, Frontend Developer</h1>
                        <p className="text-base font-base">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <button className="bg-btn-default text-white font-semibold px-4 py-2 sm:self-start sm:font-bold lg:text-xl">Download Resume</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default About;