import { Github, Linkedin, Mail } from "lucide-react";

export const profile = {
    name: "Leonardo Pérez",
    title: "Desarrollador fullstack",
};

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/leopalatto20",
        icon: Github,
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/leonardo-perez-palatto",
        icon: Linkedin,
    },
    {
        name: "Email",
        url: "mailto:leopalatto20@gmail.com",
        icon: Mail,
    },
];

export const projects = [
    {
        id: 1,
        title: "Beholder",
        description:
            "Sistema de control parental no invasivo basado en IA para monitorear interacciones en línea de los niños. Con el cual ganamos el primer lugar en HackPuebla 2025.",
        tags: ["Next.js", "Gemini", "Google Cloud", "FastApi", "MongoDB"],
        demoUrl: "https://devpost.com/software/beholder-smart-parental-control",
        repoUrl: "https://github.com/han-lovers/beholder",
        image: "/medium.png",
    },
    {
        id: 2,
        title: "oFraud",
        description:
            "Plataforma de divulgación y prevención de fraudes en línea. Con el objetivo de ayudar a los usuarios a comprar de manera segura.",
        tags: ["Next.js", "NestJs", "SwiftUI", "MySQL", "Cybersecurity"],
        demoUrl: "#",
        repoUrl: "https://github.com/BARBoFraud",
        image: "/logo_red.png",
    },
    {
        id: 3,
        title: "IdentifEye",
        description:
            "Sistema de identificación y recomendación de productos dentro de un catálogo mediante una red neuronal. Con el cual ganamos el reto Liverpool en HackMX 2024.",
        tags: [
            "OpenCV",
            "scikit-learn",
            "React",
            "Firebase",
            "Google Cloud",
            "Flask",
        ],
        demoUrl: "#",
        repoUrl: "https://github.com/han-lovers/IdentifEye",
        image: "/IMG_0571.jpg",
    },
    {
        id: 4,
        title: "Operación Escape",
        description:
            "Videojuego educativo para enseñar matemáticas a niños, con el objetivo de mostrarle áreas de oportunidad a sus profesores. Desarrollado para una escuela local.",
        tags: ["Unity", "Next.js", "FastApi", "Docker", "MySQL"],
        demoUrl:
            "https://tecmx-my.sharepoint.com/:v:/r/personal/sergio_ruiz_loza_tec_mx/Documents/CLASES/TC2005B/202511/442/Ciclo2/TEAM_1/OperacionEscapeVideo.mp4?csf=1&web=1&e=7izrba&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
        repoUrl: "https://github.com/leopalatto20/OperacionEscape",
        image: "/operacion.png",
    },
    {
        id: 5,
        title: "Evergreen",
        description:
            "Plataforme basada en IA para facilitar que una persona pueda plantar un árbol. Proyecto con el que ganamos Guadalahacks 2024.",
        tags: ["OpenCV", "Yolo", "streamlit", "Pandas", "Numpy"],
        demoUrl: "https://devpost.com/software/ever-green-qt89uf",
        repoUrl: "https://github.com/han-lovers/evergreen",
        image: "/small.png",
    },
];
