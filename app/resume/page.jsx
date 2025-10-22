"use client";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {
    SiExpress,
    SiMongodb,
    SiNextdotjs,
    SiTailwindcss,
} from "react-icons/si";

// about data
const about = {
    title: "About Me",
    description:
        "I am a passionate web developer with experience in building dynamic and responsive web applications. I love to learn new technologies and improve my skills.",
    info: [
        { fieldName: "Name", value: "Rizowan Mahmud Rafi" },
        { fieldName: "Email", value: "rizowanrafi71@gmail.com" },
        { fieldName: "Phone", value: "+8801403498822" },
        { fieldName: "Address", value: "Rajshahi, Bangladesh" },
        { fieldName: "Language", value: "Bangla,English,Hindi" },
    ],
};

// experience data
const experience = {
    icon: "/assets/assets/badge.svg",
    title: "My Experience",
    description:
        "I have worked on various projects using different technologies. Here are some of the technologies I have experience with:",
    items: [
        {
            organization: "RUET Career Club",
            role: "Web Developer",
            duration: "Aug 2023 - Jan 2024",
        },
    ],
};

// education data
const education = {
    icon: "/assets/assets/cap.svg",
    title: "My Education",
    description:
        "I have completed my education from reputed institutions. Here are the details of my educational background:",
    items: [
        {
            organization: "RUET",
            role: "BSC in CSE",
            duration: "Jan 2023 - Current",
        },
        {
            organization: "Programming Hero",
            role: "Complete Web Development Course",
            duration: "June 2024 - Dec 2025",
        },
    ],
};

// skills data
const skills = {
    title: "My Skills",
    description: "Here are some of the skills I possess:",
    skillsList: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3 /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss />,
        },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Express.js", icon: <SiExpress /> },
    ],
};

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className=" min-h-[80vh] flex xl:px-12 px-4 items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto ">
                <Tabs
                    defaultValue="skills"
                    className="flex flex-col xl:flex-row gap-8"
                >
                    <TabsList
                        className={
                            "flex flex-col text-white w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
                        }
                    >
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content  */}
                    <div className="min-h-[70vh] w-full ">
                        <TabsContent value="experience" className={"w-full"}>
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold text-white">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className={"h-[400px] "}>
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="text-white bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col  justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accentDefault">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.role}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accentDefault"></span>
                                                        <p className="text-white/60">
                                                            {item.organization}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="education"
                            className={"w-full h-full"}
                        >
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold text-white">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className={"h-[400px] "}>
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="text-white bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col  justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accentDefault">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.role}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accentDefault"></span>
                                                        <p className="text-white/60">
                                                            {item.organization}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className={"w-full"}>
                            <div className="flex flex-col gap-[30px] text-white">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-1">
                                    {skills.skillsList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider
                                                    delayDuration={100}
                                                >
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full  h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                                                            <div className="text-6xl cursor-pointer group-hover:text-accentDefault transition-all duration-300 ">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize text-xl">
                                                                {skill.name}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="about"
                            className={
                                "w-full text-center text-white xl:text-left"
                            }
                        >
                            <div className="flex flex-col gap-[30px] ">
                                <h3 className="text-4xl font-bold ">
                                    {about.title}
                                </h3>
                                <p className="w-max-[600px] text-white/60 mx-auto xl:mx-0 ">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((info, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">
                                                    {info.fieldName}:
                                                </span>
                                                <span className="text-xl">
                                                    {info.value}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
