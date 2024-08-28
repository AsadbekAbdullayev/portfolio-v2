"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "July 2023 — Present",
    currentPosition: "Frontend developer",
    place: "IT INVESTMENT CENTER",
    previousPositions: [""],
    description: `Created CI/CD pipelines using Docker and GitLab , automating build, test, and deployment stages. This automation improved
development speed, reduced errors, and ensured consistent deployment across environments.
• Led a team by using Jira, Asana, and Slack for efficient project management and communication. This approach enhanced
collaboration, ensured projects stayed on schedule, and maintained a productive and engaged team environment.
• Successfully reduced build file storage by 120% using Vite, leading to more efficient storage management and faster deployment
times.
`,
    skills: [
      "Docker",
      "Husky",
      "Jira",
      "Asana",
      "Vite",
      "HTML",
      "Project Management",
      "Planning",
    ],
  },
  {
    timeline: "Jan 2022 — July 2023",
    currentPosition: "Frontend developer",
    place: "DIGITAL ONE",
    previousPositions: [""],
    description: `Implemented throttling and debouncing for efficient event handling, and used custom hooks to smooth out UI updates, resulting
in improved performance. I used virtualization techniques with Ant Design Table and AG Grid for minimized DOM updates,
reduced memory usage, and significantly enhanced application performance
• Applied memoization techniques in a CRM application to prevent UI blocking, resulting in a performance improvement of 60%
• Focused on maintaining high code quality by integrating ESLint for consistent linting across the codebase. Additionally,
implemented thorough testing using Jest to ensure functionality and prevent regressions, resulting in a more reliable and
maintainable application.
`,
    skills: [
      "Styled-component",
      "Daisy UI",
      "Bootstrap",
      "Ant Design",
      "Webpack",
      "Redux",
      "Redux-Toolkit",
      "React-query",
      "Bitbucket",
      "ESLint",
      "Unit Testing",
      "Jest",
    ],
  },
  {
    timeline: "May 2021 - Dec 2021",
    currentPosition: "Teacher assistent and frontend developer",
    place: "WEBBRAIN ACADEMY",
    previousPositions: [""],
    description: `Worked with a cross-functional team of 14 people, including mobile, frontend, and backend engineers, designers, and QA. Successfully taught and mentored over 50 students, providing hands-on guidance in frontend development and web technologies. Optimized frontend components using techniques like lazy loading and code splitting, reducing page load time by 25% and
improving overall site performance.`,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Typescript",
      "React",
      "React Context",
      "Next",
      "Tailwind CSS",
      "MUI",
      "Git",
      "Github",
      "Gitlab",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-primary font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-foreground group"
          href="/am-resume-2024.pdf"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
