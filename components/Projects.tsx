"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/itskills.jpg",
    title: "IT SKILLS",
    description: `ITSkills is an innovative project designed to nurture the knowledge and skills of young programmers through AI-driven learning and testing methodologies. Our platform serves as a comprehensive resource for programmers to test their skills, enhance their knowledge, and prepare for real-world challenges in the field of IT.`,
    skills: [],
    link: "https://itskills.uz/",
  },
  {
    imagePath: "/gotix.png",
    title: "GO TICKET",
    description: `Goticket.uz is an online platform designed for booking transportation tickets across Uzbekistan. It allows users to conveniently search for and purchase tickets for various modes of transportation, including buses, trains, and flights. The platform offers a user-friendly interface where customers can view available routes, compare prices, and select seats. Additionally, Goticket.uz provides real-time updates on ticket availability and ensures secure online payment options, making it a comprehensive solution for travelers in Uzbekistan looking to book their journeys quickly and efficiently.`,
    skills: [],
    link: "https://goticket.uz/",
  },
  {
    imagePath: "/trailer.png",
    title: "DASHBOARD TRAILER PRIME",
    skills: [],
    description: `Trailer Prime is a robust logistics app tailored for truck drivers and fleet managers. It provides real-time data and monitoring capabilities, ensuring efficient operations and improved decision-making. With features like real-time tracking, route optimization, and driver performance monitoring, Trailer Prime streamlines logistics processes, reduces costs, and enhances visibility. Simplify your logistics with Trailer Prime.`,
    link: "https://dashboard.trailer-test.nightwell-logistics.com/",
  },
  {
    imagePath: "/oxus.png",
    title: "OXUS UNIVERSITY",
    skills: [],
    description: `Oxus University's Learning Management System (LMS) is a cutting-edge platform designed to enhance the learning experience for students, faculty, and staff. With user-friendly interfaces, robust features, and intuitive navigation, our LMS provides a dynamic and interactive environment for delivering educational content, facilitating collaboration, and fostering academic success.`,
    link: "https://oxusuniversity.uz/",
  },
  {
    imagePath: "/game.png",
    title: "GAMEFEST",
    skills: [],
    description: `Game Fest is the ultimate celebration for gamers, animation enthusiasts, and anyone seeking an amazing entertainment experience. Dive into a world where gaming meets artistry, where pixels come to life, and where excitement knows no bounds.`,
    link: "https://gamefest.uz/",
  },
  {
    imagePath: "/extra.png",
    title: "EXTRA UI",
    skills: [],
    description: `Extra UI is my pet project, my own UI library for React, stands alongside industry giants like Ant Design and Material-UI (MUI). Crafted with JavaScript and Styled Components, Extra UI offers a rich selection of customizable components, seamless integration, and optimized performance, empowering developers to create stunning web applications with ease`,
    link: "https://extra-ui.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
