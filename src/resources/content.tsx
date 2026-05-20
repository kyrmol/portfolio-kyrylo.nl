import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Kyrylo",
  lastName: "Moloshnikov",
  name: `Kyrylo Moloshnikov`,
  role: "DevSecOps Intern · Aspiring Cloud Security Engineer",
  avatar: "/images/avatar6.jpg",
  email: "kyrmol@outlook.com",
  location: "Europe/Amsterdam", // IANA timezone for Arnhem, Netherlands
  languages: ["English", "Dutch", "Ukrainian"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Minimal social links provided in CV
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kyrylo-moloshnikov",
    essential: true,
  },
  {
    name: "Phone",
    icon: "phone",
    link: "tel:+31643798373",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing work in web and .NET development`,
  headline: <>Building secure software — from web applications to DevSecOps pipelines</>,
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: (
    <>
      Interning at RiskStudio — securing CI/CD pipelines with SAST, SCA, and IaC scanning.
      Building full-stack apps with Next.js and Django. Aiming for Cloud Security Engineering.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Software developer with a growing focus on DevSecOps and Cloud Security. Currently
        interning at RiskStudio, where I work on integrating AI-assisted security tooling
        into CI/CD pipelines and building full-stack features with Next.js and Django.
        My goal is to transition into Cloud Security Engineering — combining development
        experience with a security-first mindset.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "RiskStudio",
        timeframe: "Feb 2026 – Present",
        role: "Software Developer (DevSecOps) Graduate Intern",
        achievements: [
          <>
            Researching and implementing AI-assisted security controls in the GitLab CI/CD
            pipeline: SAST, SCA, Infrastructure-as-Code scanning and secret detection.
          </>,
          <>
            Exploring how Generative AI and LLM integrations can support automated policy
            detection, security troubleshooting and pattern recognition.
          </>,
          <>
            Developing frontend features with Next.js and building backend services using
            Python and Django on a SaaS cybersecurity & supply chain risk management platform.
          </>,
        ],
        images: [],
      },
      {
        company: "ICT@Work",
        timeframe: "Sep 2024 – Feb 2025",
        role: "Software Developer Intern",
        achievements: [
          <>
            Built a Volunteers Web App (ASP.NET Core MVC + Entity Framework) allowing users to
            create accounts, explore volunteer events and sign up to participate.
          </>,
          <>
            Developed a Blazor Management Web App for admins using the MudBlazor component
            library to manage co-workers.
          </>,
          <>
            Explored .NET MAUI by building test mobile apps with C# and XAML; worked with GitHub
            for version control and team workflows.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "HAN University of Applied Sciences",
        description: (
          <>
            Bachelor of Applied Science — Computer Science (HBO-ICT: Cloud & Cyber Security)
          </>
        ),
      },
      {
        name: "Astrum College",
        description: (
          <>
            Secondary Vocational Education (MBO-4) — Software Development, 2023–2026
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "DevSecOps & Security",
        description: <></>,
        tags: [
          { name: "SAST" },
          { name: "SCA" },
          { name: "IaC Scanning" },
          { name: "Secret Detection" },
          { name: "GitLab CI/CD" },
          { name: "Docker", icon: "docker" },
          { name: "Security" },
        ],
        images: [],
      },
      {
        title: "Languages & Frameworks",
        description: <></>,
        tags: [
          { name: "Python", icon: "python" },
          { name: "Django" },
          { name: "C#", icon: "csharp" },
          { name: "ASP.NET Core", icon: "dotnet" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Next.js", icon: "nextjs" },
          { name: "React", icon: "react" },
        ],
        images: [],
      },
      {
        title: "Databases & Tools",
        description: <></>,
        tags: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Microsoft SQL Server", icon: "mssql" },
          { name: "Entity Framework", icon: "entityframework" },
          { name: "Git", icon: "git" },
          { name: "Infrastructure" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
