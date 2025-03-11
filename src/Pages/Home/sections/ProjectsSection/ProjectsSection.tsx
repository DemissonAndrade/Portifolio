import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "User Registration",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "src/assets/cadastro.jpg",
            description: "This project is a secure API for user registration and authentication. It allows new users to register, log in and access protected routes using JWT tokens (JSON Web Token). The system ensures data security with password encryption using bcrypt and follows good authentication practices.",
            technologies:"JavaScript, MongoDB",
            websiteURL: "https://trello.com/",
            codeURL: "https://github.com/DemissonAndrade/",
        },
        {
            title: "Sales Dashboard",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "src/assets/DsVendas.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
            technologies: "Technologies: TypeScript, MySql, Spring Tools ",
            websiteURL: "https://trello.com/",
            codeURL: "https://github.com/DemissonAndrade",
        },

        {
            title: "Robot Aviator",
            subtitle: "Jul 2019 - May 2019",
            srcImg: "src/assets/aviator.jpg",
            description:"This code is a Node.js application that combines several technologies and libraries to create a real-time prediction system based on data collected from the web. Puppeteer: A library for controlling the Chrome/Chromium browser programmatically. It is used to scrape data from a web page. Express: A framework for Node.js that makes it easy to create web servers and APIs. HTTP: Node.js native module for creating HTTP servers. WebSocket (ws): A library for implementing real-time bidirectional communication between the client and the server. TensorFlow.js (tfjs-node): A machine learning library that allows you to train and run models directly in Node.", 
            technologies: "JavaScript, Puppeteer, Express, WebSocket ws, TensorFlowjs tfjs-node",
            websiteURL: "",
            codeURL: "https://github.com/DemissonAndrade",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
