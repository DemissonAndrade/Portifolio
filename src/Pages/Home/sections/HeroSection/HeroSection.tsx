
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/avatar.jpg";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";


const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        [theme.breakpoints.up('xs')]: {
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px",
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            alignItems: "center",
            paddingTop: "100px",
            height: "100vh"
        },
    }));
    const StyledImg = styled("img")(({ theme }) => ({
        height: "50%",
        width: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "50%"
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position={"relative"}>
                                <Box style={{ position: "relative", zIndex: 1, color: "white" }}>
                                  <AnimatedBackground />
                                </Box>
                                <Box position={"relative"} textAlign={"center"}>
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2} >Demisson Andrade</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center" >Full Stack Developer</Typography>

                        </Grid>
                    </Grid>
                </Container>

            </StyledHero>

        </>
    )
}

export default Hero
