import React from "react";
import Project from "./Project";

const ProjectsPage = () => {

    return (
        <section className="mt-8 py-8 text-secondary-dark" id="projects">
            <div className="container w-4/5 mx-auto border">
                <div className="px-2 py-5 flex flex-col items-center gap-7 bg-white">
                    <p className="text-lg font-medium">PROJECTS</p>
                    <a href="https://thecodeyogishop.netlify.app/" target="_blank"><Project
                        imgUrl="/proj1/1.png"
                        title="The CodeYogi Shop"
                        year={2022}
                        topic="React, Tailwind"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    />
                    </a>
                    {<a href="https://assignment-17-mayankchauhan8.codeyogi-batch-2.repl.co/" target="_blank"><div className="hidden sm:flex"><Project
                        imgUrl="/proj2/3.png"
                        title="Length Unit Converter"
                        year={2022}
                        topic="HTML, Tailwind, JS"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    /></div></a>}
                    {<a href="https://trackmood.netlify.app/" target="_blank"><div className="hidden sm:flex"><Project
                        imgUrl="/proj3/1.png"
                        title="Mood Tracker"
                        year={2023}
                        topic="Redux, React, Tailwind"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    /></div></a>}
                </div>
            </div>
        </section>
    )
}

export default ProjectsPage;