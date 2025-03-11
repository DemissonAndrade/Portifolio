import { Box, Container, IconButton, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {
    return (
        <Box pt={2} pb={2} sx={{ position: "relative", zIndex: 1000, pointerEvents: "auto" }}>
            <Container maxWidth="sm">
                <Box display="flex" alignItems="center" justifyContent="space-around" pb={1}>
                    {/* Ícone do GitHub */}
                    <IconButton
                        aria-label="GitHub"
                        onClick={() => window.open("https://github.com/demissonAndrade", "_blank")}
                    >
                        <GitHubIcon />
                    </IconButton>

                    {/* Ícone do LinkedIn */}
                    <IconButton
                        aria-label="LinkedIn"
                        onClick={() => window.open("https://www.linkedin.com/in/demissonAndrade/", "_blank")}
                    >
                        <LinkedInIcon />
                    </IconButton>

                    {/* Ícone de E-mail */}
                    <IconButton
                        aria-label="Email"
                        href="mailto:example@example.com"
                        target="_blank"
                    >
                        <EmailIcon />
                    </IconButton>
                </Box>
                <Typography textAlign="center">
                    © 2025 Demisson Andrade - All rights reserved
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;