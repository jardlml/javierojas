import React from "react";

export const Experience = () => {
  const OpenInNew = "/assets/icons/open_in_new.svg";
  const Folder = "/assets/icons/folder.svg";

  return (
    <section className="">
      <div>
        <h1 className="section-title">Experience</h1>
      </div>
      <div className="experience__element">
        <header className="experience__header-container">
          <span><img className="experience__icon-folder" src={Folder} alt="External Link" /></span>
          <a href="https://www.rubits.works/" aria-label="External Link" target="_blank" rel="noopener noreferrer">
            <img className="experience__icon-external-link" src={OpenInNew} alt="External Link" />
          </a>
        </header>
        <h3>Rubits Works Spa.</h3>
        <p>
          Internship, support in the front-end development of the Rubits Works
          website.
        </p>
        <div>
          <footer className="experience__footer">
            <span>React.js</span>
            <span>Tailwind</span>
          </footer>
        </div>
      </div>
      
    </section>
  );
};