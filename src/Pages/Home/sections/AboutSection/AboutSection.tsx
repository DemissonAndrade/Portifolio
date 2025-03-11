import { Box, Card, Container, Grid, Typography, styled } from "@mui/material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        transition: "all 0.3s ease", // Transição suave para todas as propriedades
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.primary.contrastText,
            transform: "scale(1.05)", // Efeito de zoom
            boxShadow: theme.shadows[4], // Sombra
        }
    }));

    const skillsSet = [
        "Javascript", "Typescript", "React", "Next", "Git", "HTML", "CSS", "Cypress", "AWS", "GCP", "Material UI", "Figma"
    ];

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center">About me</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experience</Typography>
                                <Typography textAlign="center">1+ years</Typography>
                                <Typography textAlign="center">Frontend Development</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Education</Typography>
                                <Typography textAlign="center">Systems Development Analyst</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        I have always been passionate about technology, but life took me on a different path. 15 years ago, I started working as a locksmith at a medium-sized company. At first, it was just a temporary job, a way to earn a living, but time passed and I became an experienced professional in the field. I mastered the manufacture of gates, railings and metal structures with precision and dedication. My work was valued, and I built a solid career within the company. However, the desire to change fields never disappeared. Whenever I had free time, I explored the world of technology, watched videos about programming, read articles and dreamed of working in systems development. It was then that I decided to take an important step: I enrolled in the IESB Systems Analysis and Development course. During my years of study, I divided my time between working at the locksmith and studying. It was not easy to reconcile the heavy work routine with classes and academic projects, but I persisted. I learned about programming languages, databases, web development and information security. Each new piece of knowledge I acquired motivated me even more to move forward. Now that I have graduated and have a solid foundation in the technology field, I feel that the time has come to make a career change. I know that my experience as a locksmith has given me valuable skills, such as discipline, teamwork and problem-solving, which can be applied in the world of technology. My goal is to enter the software development market, seeking opportunities that allow me to grow and specialize even further. Even though I am afraid of change, I understand that it is never too late to follow a new path. I am preparing myself for the market, improving my portfolio and participating in courses and projects to gain practical experience. Determined and motivated, I believe that, just as I used to shape iron to create solid structures, I am now shaping my own future to build a new career in technology.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <AnimationComponent moveDirection={index % 2 === 0 ? "right" : "left"}>
                                    <StyledCard>{skill}</StyledCard>
                                </AnimationComponent>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default AboutSection;