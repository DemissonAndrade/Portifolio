import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/material';

// Estilo para os links do menu
export const StyledNavLink = styled("a")(() => ({
    textDecoration: "none",
    color: "inherit",
    fontWeight: 500,
    fontSize: "1rem",
    transition: "color 0.3s ease",
    '&:hover': {
        color: "#90caf9", // Cor ao passar o mouse
    },
}));

// Estilo para a Toolbar mobile
export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        display: "flex",
        justifyContent: "end",
    },
    [theme.breakpoints.up('md')]: {
        display: "none",
    },
}));

// Estilo para a Toolbar desktop
export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        display: "none",
    },
    [theme.breakpoints.up('md')]: {
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
    },
}));

// Estilo para o AppBar com efeito de transparência e blur
export const StyledAppBar = styled(AppBar)(() => ({
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo semi-transparente
    backdropFilter: "blur(10px)", // Efeito de desfoque
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "none",
}));

// Links do menu
const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
];

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    // Função para abrir o menu mobile
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    // Função para fechar o menu mobile
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Função para rolar suavemente até uma seção
    const handleSmoothScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            handleClose();
        }
    };

    // Efeito para detectar o scroll da página
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <StyledAppBar
                position="fixed"
                sx={{
                    backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.5)",
                    boxShadow: isScrolled ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none",
                }}
            >
                <StyledMobileToolbar>
                    <IconButton
                        size="large"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {menuItems.map((item) => (
                            <MenuItem key={item.id} onClick={() => handleSmoothScroll(item.id)}>
                                <StyledNavLink>{item.label}</StyledNavLink>
                            </MenuItem>
                        ))}
                    </Menu>
                </StyledMobileToolbar>
                <StyledDesktopToolbar variant="regular">
                    {menuItems.map((item) => (
                        <MenuItem key={item.id} onClick={() => handleSmoothScroll(item.id)}>
                            <StyledNavLink>{item.label}</StyledNavLink>
                        </MenuItem>
                    ))}
                </StyledDesktopToolbar>
            </StyledAppBar>
        </Box>
    );
}