import React from "react";

const Skills = () => {
    return (
        <section className="mt-8 bg-back-default py-8 text-secondary-dark" id="skills">
            <div className="container w-4/5 mx-auto">
                <div className="px-2 py-5 flex flex-col items-center gap-2 bg-white">
                    <p className="text-lg font-medium">SKILLS</p>
                    <div className="flex flex-col items-center gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                        <div className="border flex flex-col gap-1 items-center max-w-xs p-2 sm:max-w-sm">
                            <img src="/react_icon.png" alt="" className="w-full h-full object-cover aspect-square" />
                            <span className="font-bold">REACT</span>
                        </div>
                        <div className="border flex flex-col gap-1 items-center max-w-xs p-2 sm:max-w-sm">
                            <img src="/tailwind_icon.png" alt="" className="w-full h-full object-cover aspect-square" />
                            <span className="font-bold">TAILWIND CSS</span>
                        </div>
                        <div className="border flex flex-col gap-1 items-center max-w-xs p-2 sm:max-w-sm">
                            <img src="/typescript_icon.png" alt="" className="w-full h-full object-cover aspect-square" />
                            <span className="font-bold">TYPESCRIPT</span>
                        </div>
                        <div className="border flex flex-col gap-1 items-center max-w-xs p-2 sm:max-w-sm">
                            <img src="redux_icon.png" alt="" className="w-full h-full object-cover aspect-square" />
                            <span className="font-bold">REDUX</span>
                        </div>
                        <div className="border flex flex-col gap-1 items-center max-w-xs p-2 sm:max-w-sm">
                            <img src="git.png" alt="" className="w-full h-full object-cover aspect-square" />
                            <span className="font-bold">GIT</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills;