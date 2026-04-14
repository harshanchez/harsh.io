import heroImg from "./assets/images/hero1.png";
import multimodalEmotionImg from "./assets/images/multimodal-emotion-recognition.png";
import therapAiImg from "./assets/images/TherapAI.png";
import gravityImg from "./assets/images/Gravity.png";
import doomImg from "./assets/images/Doom.png";

const logotext = "HARSH";
const meta = {
    title: "Harsh Vijay Singh Kalsi",
    description: "AI/ML Undergraduate | Python, C++, SQL | Machine Learning, Data Science, LLM Engineering | Chandigarh, India",
};

const introdata = {
    title: "I’m Harsh Vijay Singh Kalsi",
    animated: {
        first: "AI/ML Undergraduate",
        second: "Python • C++ • SQL • Machine Learning • LLMs",
        third: "I build AI-first & full-stack systems",
    },
    description:
        "AI-focused Computer Science (AI/ML) undergraduate with founder and co-founder experience, building AI-first and full-stack systems. I work across ML, data science, and LLM engineering—shipping in fast-paced, startup-style environments.",
    your_img_url: heroImg,
};

const dataabout = {
    title: "About me",
    aboutme:
        "I’m an AI-focused Computer Science undergraduate (AI/ML specialization) based in Chandigarh, India. I’ve built AI-first and full-stack products as a Founder and Co-Founder—working across machine learning, data science, LLM engineering, and real-time multimodal systems (CV, NLP, sensors). I enjoy product execution end-to-end: PRDs, APIs, data pipelines, and iterative experimentation.",
};
const worktimeline = [
    {
        jobtitle: "Co-Founder",
        where: "Fassionate • Chandigarh, India",
        date: "07/2025 — Present",
    },
    {
        jobtitle: "Freelance Programming",
        where: "Self • Chandigarh, India",
        date: "06/2019 — Present",
    },
    {
        jobtitle: "Founder",
        where: "TherapAI • Chandigarh, India",
        date: "01/2023 — 09/2024",
    },
    {
        jobtitle: "B.E. (Hons.) CSE (AI/ML)",
        where: "Chandigarh University • Mohali, IN-PB",
        date: "2026",
    },
];

const skills = [
    { name: "Python", value: 90 },
    { name: "C++", value: 80 },
    { name: "SQL (MySQL)", value: 80 },
    { name: "Machine Learning", value: 85 },
    { name: "Data Science", value: 80 },
    { name: "LLM Engineering", value: 85 },
    { name: "Computer Vision (OpenCV)", value: 75 },
    { name: "NLP", value: 70 },
    { name: "Apache Kafka", value: 65 },
    { name: "Apache Spark", value: 60 },
    { name: "Jupyter / Anaconda", value: 75 },
    { name: "Git / GitHub", value: 70 },
];

const services = [
    {
        title: "AI/ML Systems & Prototyping",
        description: "Building AI-first prototypes and applied ML systems (CV/NLP/LLMs) with a focus on measurable iteration and fast delivery.",
    },
    {
        title: "Data Pipelines & Automation",
        description: "Designing data workflows and automation pipelines using Python and SQL, optimized for performance and reliability.",
    },
    {
        title: "APIs & Full-Stack Foundations",
        description: "Developing clean APIs and backend systems for core product flows (onboarding, discovery, ranking) with a product-driven mindset.",
    },
];

const dataportfolio = [
    {
        img: multimodalEmotionImg,
        description: "Multimodal Emotion Recognition System – built end-to-end using OpenCV, MediaPipe, NLP, and Streamlit APIs to detect user emotions in real time.",
        link: "https://github.com/harshanchez/Multimodal-Emotion-Recognition-System",
    },
    {
        img: therapAiImg,
        description: "TherapAI – built using Python, OpenCV, multimodal emotion recognition, and integrated APIs to analyze user emotions and use AI to recommend music that helps soothe mood in real time.",
        link: "https://github.com/harshanchez/TherapAI",
    },
    {
        img: doomImg,
        description: "DOOM/Wolfenstein in Python – built a retro-style 3D FPS engine from scratch using Python, Pygame, math, and raycasting, including map logic, textured rendering, player movement, and collision handling.",
        link: "https://github.com/harshanchez/DOOM-Wolfenstein-on-Python",
    },
    {
        img: gravityImg,
        description: "Gravity and Black Hole Simulation in C++ – built with C++, OpenGL, and math libraries to simulate celestial mechanics from 2D physics to 3D models, using Newtonian gravity and visualizing spacetime curvature inspired by Einstein’s relativity.",
        link: "https://github.com/harshanchez/Gravity-and-Black-Hole-simulation-in-C-",
    },
];

// Place your resume at: /public/resume.pdf
// This will be served at: https://<your-domain>/resume.pdf
const resumeConfig = {
    label: "Resume",
    link: "/resume.pdf",
};

const contactConfig = {
    YOUR_EMAIL: "Harshanchez@outlook.com",
    YOUR_FONE: "8569819403",
    description: "Let’s build something great. I’m open to freelance work, internships and collaboration in software, data and AI.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_mpwp49h",
    YOUR_TEMPLATE_ID: "template_cmj2wg3",
    YOUR_USER_ID: "k48HRL9fqTq5UVlsS",
};

const socialprofils = {
    github: "https://github.com/harshanchez",
    linkedin: "https://www.linkedin.com/in/harsh-vijay-singh-kalsi-31a29424a",
    freelancer: "https://www.freelancer.com/u/Harshanchez",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    resumeConfig,
    contactConfig,
    socialprofils,
    logotext,
};