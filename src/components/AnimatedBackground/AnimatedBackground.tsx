import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export const AnimatedBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Efeito para detectar o movimento do mouse
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                zIndex: -1, // Coloca o fundo atrás de outros elementos
            }}
        >
            <svg
                className="BgAnimation__svg"
                viewBox="0 0 602 602"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <g opacity="0.15">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
                        stroke="url(#paint0_radial)"
                        id="path_0"
                        strokeWidth="2" // Aumente a espessura da linha
                    />
                    <path
                        d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
                        stroke="url(#paint1_radial)"
                        id="path_1"
                        strokeWidth="2" // Aumente a espessura da linha
                    />
                    <path
                        d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
                        stroke="url(#paint2_radial)"
                        id="path_2"
                        strokeWidth="2" // Aumente a espessura da linha
                    />
                </g>
                {/* Efeito de luz que segue o mouse */}
                <circle
                    cx={mousePosition.x}
                    cy={mousePosition.y}
                    r="100" // Tamanho da luz
                    fill="url(#lightGradient)"
                    style={{
                        pointerEvents: "none", // Ignora interações do mouse
                        transition: "cx 0.1s, cy 0.1s", // Suaviza o movimento
                    }}
                />
                <defs>
                    <radialGradient
                        id="lightGradient"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
                        <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                    </radialGradient>
                    <radialGradient
                        id="paint0_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(301 301) rotate(90) scale(300)"
                    >
                        <stop offset="0.333333" stopColor="#FBFBFB" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient
                        id="paint1_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(301 301) rotate(90) scale(300)"
                    >
                        <stop offset="0.333333" stopColor="#FBFBFB" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient
                        id="paint2_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(301 301) rotate(90) scale(300)"
                    >
                        <stop offset="0.333333" stopColor="#FBFBFB" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </Box>
    );
};