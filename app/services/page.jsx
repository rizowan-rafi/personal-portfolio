"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import WorkSliderBtn from "@/components/WorkSliderBtn";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        num: "01",
        category: "full stack",
        title: "MedMarket",
        description:
            "MedMarket 🏥 – An online medical marketplace where users can buy and sell healthcare products and services. It features user-friendly product browsing, secure authentication, role-based access for users and admins, order management, and integrated payment functionality for smooth and secure transactions.",
        stack: [
            "react",
            "nodejs",
            "express js",
            "mongodb",
            "tailwindcss",
            "stripe",
        ],
        image: "/assets/assets/work/thumb1.png",
        live: "https://medmarket-cd00e.web.app/",
        github: "https://github.com/rizowan-rafi/MedMarket-client",
    },
    {
        num: "02",
        category: "full stack",
        title: "Gig Flow",
        description:
            "Micro-Task and Earning Platform 💰 - A task-based earning platform where users complete small tasks to earn money. It features role-based access for Workers, Buyers, and Admins, secure authentication, a coin-based reward system, and payment integration.",
        stack: [
            "react",
            "express js",
            "firebase",
            "stripe",
            "tailwindcss",
            "nodejs",
            "mongodb",
        ],
        image: "/assets/assets/work/thumb2.jpeg",
        live: "https://gigflow-client.web.app/",
        github: "https://github.com/rizowan-rafi/Gig-flow",
    },
    {
        num: "03",
        category: "frontend",
        title: "Portfolio Website",
        description:
            "A sleek and modern portfolio website built with Next.js and Tailwind CSS, featuring smooth Framer Motion animations and an elegant Shadcn UI design system. It highlights personal projects, skills, and experience with a focus on performance, responsive design, and engaging user interaction.",
        stack: ["nextjs", "tailwindcss", "framer-motion", "shadecn ui"],
        image: "/assets/assets/work/thumb3.png",
        live: "#",
        github: "#",
    },
];

const Services = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
            }}
            className="text-white min-h-[80vh] flex flex-col  justify-center py-12 px-4 xl:px-12"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
                        <div>
                            <div className="flex flex-col gap-[30px] h-[50%]">
                                <div className="text-8xl leading-none font-extrabold  text-white/30 ">
                                    {project.num}
                                </div>
                                <div className="flex flex-col gap-[30px]">
                                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accentDefault transition-all during-500 capitalize">
                                        {project.category} project
                                    </h2>
                                    <p className="text-white/60 text-lg">
                                        {project.description}
                                    </p>
                                    <ul className="grid grid-cols-3 xl:flex gap-4">
                                        {project.stack.map((tech, idx) => (
                                            <li
                                                key={idx}
                                                className="text-xl text-accentDefault"
                                            >
                                                {" "}
                                                {tech}{" "}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="border border-white/20"></div>
                                    <div className="cursor-pointer flex items-center gap-4">
                                        <Link
                                            href={project.live}
                                            target="_blank"
                                        >
                                            <TooltipProvider
                                                delayDuration={100}
                                            >
                                                <Tooltip>
                                                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex  justify-center items-center group">
                                                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accentDefault"></BsArrowUpRight>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>Live project</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </Link>
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                        >
                                            <TooltipProvider
                                                delayDuration={100}
                                            >
                                                <Tooltip>
                                                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex  justify-center items-center group">
                                                        <BsGithub className="text-white text-3xl group-hover:text-accentDefault"></BsGithub>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>Github repo</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide className="w-full" key={index}>
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className="object-cover "
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            <WorkSliderBtn
                                containerStyles={
                                    "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                }
                                btnStyles={
                                    "bg-accentDefault rounded-full hover:bg-accentHover text-primaryColor text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                }
                            ></WorkSliderBtn>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Services;
