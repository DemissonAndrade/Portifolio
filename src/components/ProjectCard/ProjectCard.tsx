import { Typography, styled } from "@mui/material";

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string;
    technologies: string;
    websiteURL: string;
    codeURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
}) => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        objectFit: "contain",
        height: "80vw",
        padding: "10px 0",
        [theme.breakpoints.up('md')]: {
            height: "45vh",
        },
    }));

    const StyledCard = styled("div")(({ theme }) => ({
        borderRadius: "3px",
        border: `0.5px solid ${theme.palette.primary.contrastText}`,
        backgroundColor: "transparent",
        color: theme.palette.primary.contrastText,
        padding: "20px",
        transition: "background-color 0.3s ease", // Transição suave
        '&:hover': {
            backgroundColor: theme.palette.primary.light, // Cor ao passar o mouse
        },
    }));

    return (
        <StyledCard>
            <Typography variant="h5">{title}</Typography>
            <Typography>{subtitle}</Typography>
            <StyledImg src={srcImg} />
            <Typography>{description}</Typography>
            <Typography fontWeight={600} pt={2}>{technologies}</Typography>
        </StyledCard>
    );
};

export default ProjectCard;