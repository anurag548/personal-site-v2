export const links = [
    {
        name: "Home",
        hash: "#home",
      },
      {
        name: "About",
        hash: "#about",
      },
      {
        name: "Projects",
        hash: "#projects",
      },
      {
        name: "Skills",
        hash: "#skills",
      },
      {
        name: "Experience",
        hash: "#experience",
      },
      {
        name: "Contact",
        hash: "#contact",
      },
] as const;


export const experiencesData = [
    {
      title: "Graduated bootcamp",
      location: "Miami, FL",
      description:
        "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    //   icon: React.createElement(LuGraduationCap),
      date: "2019",
    },
    {
      title: "Front-End Developer",
      location: "Orlando, FL",
      description:
        "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    //   icon: React.createElement(CgWorkAlt),
      date: "2019 - 2021",
    },
    {
      title: "Full-Stack Developer",
      location: "Houston, TX",
      description:
        "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    //   icon: React.createElement(FaReact),
      date: "2021 - present",
    },
  ] as const;
  
export type PersonalData = {
    name: string;
    selfDescription: string;
    resume: string;
    about:string;
    // socials: Array<Socials>;
    
}

export type Socials = {
  name: string,
  url: string
}

  export const projectsData = [
    {
      title: "CorpComment",
      description:
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
      techStack: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
      githubLink: "",
      projectLink: "",
      thumbImageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "rmtDev",
      description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
      techStack: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
      githubLink: "",
      projectLink: "",
      thumbImageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Word Analytics",
      description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        techStack: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      githubLink: "",
      projectLink: "",
      thumbImageUrl: "https://via.placeholder.com/150",
    },
  ] as const;

export const skillsData = [
  {
    name: "Next.js",
    icon: "React",
  },
  {
    name: "Flutter",
    icon: "Flutter",
  },
  {
    name: "TypeScript",
    icon: "TypeScript",
  },
  {
    name: "Tailwind",
    icon: "Tailwind",
  },
  {
    name: "PostgreSQL",
    icon: "PostgreSQL",
  },
  {
    name: "Framer",
    icon: "Framer",
  },
  {
    name: "Redux",
    icon: "Redux",
  },
  {
    name: "Git",
    icon: "Git",
  },


 ] as const;
