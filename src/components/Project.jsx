import React from "react";

const Project = ({ imgUrl, title, year, topic, description }) => {
    return (
        <article className="text-secondary-dark">
            <div className="flex flex-col gap-4 max-w-sm border-b-2 border-secondary-light pb-4 sm:flex-row sm:max-w-6xl sm:max-h-60 lg:gap-5 lg:max-h-72">
                <div className="sm:w-1/2 lg:w-1/3">
                    <img src={imgUrl} alt="" className="w-full h-full object-cover aspect-square" />
                </div>
                <div className="flex flex-col gap-4 sm:w-1/2">
                    <h2 className="font-bold text-2xl lg:text-3xl">{title}</h2>
                    <div className="flex gap-5">
                        <span className="font-black rounded-2xl text-white bg-secondary-dark px-3 lg:text-xl">{year}</span>
                        <span className="text-secondary-light lg:text-xl">{topic}</span>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </article>
    )
}
export default Project;