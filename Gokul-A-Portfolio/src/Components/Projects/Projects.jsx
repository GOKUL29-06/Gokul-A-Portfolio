import React from 'react';
import { FaGithub, FaReact, FaJava, FaDatabase } from 'react-icons/fa';  // React, Java, and Database icons
import { SiSpringboot, SiMysql, SiTailwindcss, SiBootstrap } from 'react-icons/si'; // Spring Boot, MySQL, Tailwind, and Bootstrap
import './Project.css';  // Ensure the path is correct to your CSS file
import Project1 from "../../assets/project-1.png"; // Correctly import the image
import Project2 from "../../assets/project-2.png"; // Correctly import the image

const ProjectCard = ({ image, projectName, description, githubLink }) => {
  return (
    <section >

      <div className="card text-center mb-4  shadow-sm" id='projects' style={{ width: '18rem', marginBottom: '30px', }}>
        <img src={image} className="card-img-top" alt={`${projectName} Thumbnail`} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body" style={{ minHeight: '250px' }}>
          <h5 className="card-title text-truncate" style={{ fontWeight: 'bold', fontSize: '1rem' }}>{projectName}</h5>
          <p className="card-text" style={{ fontSize: '0.77rem', color: '#555', }}>
            {description}
          </p>
          <a href={githubLink} className="btn btn-primary mt-2" target="_blank" rel="noopener noreferrer">
            <FaGithub className="me-2" /> View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projectData = [
    {
      image: Project2,  // Use the imported image directly
      projectName: 'Online Hotel Booking System',
      description: (
        <div>
          <FaReact style={{ color: '#61dafb' }} /> React
          <SiSpringboot style={{ color: '#6DB33F', marginLeft: '10px' }} /> Spring Boot
          <SiMysql style={{ color: '#4479A1', marginLeft: '10px' }} /> MySQL
          <SiTailwindcss style={{ color: '#38B2AC', marginLeft: '10px' }} /> Tailwind CSS
          <SiBootstrap style={{ color: '#7952B3', marginLeft: '10px' }} /> Bootstrap
        </div>
      ),
      githubLink: 'https://github.com/GOKUL29-06/Online-Hotel-Booking-System.git',
    },
    {
      image: Project1,
      projectName: 'Employee Management System',
      description: (
        <div>
          <FaReact style={{ color: '#61dafb' }} /> React
          <SiSpringboot style={{ color: '#6DB33F', marginLeft: '10px' }} /> Spring Boot
          <SiMysql style={{ color: '#4479A1', marginLeft: '10px' }} /> MySQL
          <SiTailwindcss style={{ color: '#38B2AC', marginLeft: '10px' }} /> Tailwind CSS
        </div>
      ),
      githubLink: 'https://github.com/GOKUL29-06/Employee-Management-System.git',
    },
    // {
    //   image: 'https://via.placeholder.com/300',
    //   projectName: 'Project Gamma',
    //   description: (
    //     <div>
    //       <FaReact style={{ color: '#61dafb' }} /> React
    //       <SiSpringboot style={{ color: '#6DB33F', marginLeft: '10px' }} /> Spring Boot
    //       <SiMysql style={{ color: '#4479A1', marginLeft: '10px' }} /> MySQL
    //     </div>
    //   ),
    //   githubLink: 'https://github.com/username/project-gamma',
    // }
  ];

  return (
    <section className='project section' id='projects'>

      <div className="container  mt-5" >
        <h2 className="text-center mb-4" style={{ textAlign: 'center', marginBottom: '4rem' }}>My Projects</h2>
        <div className="row">
          {projectData.map((project, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4" key={index}>
              <ProjectCard
                image={project.image}
                projectName={project.projectName}
                description={project.description}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
