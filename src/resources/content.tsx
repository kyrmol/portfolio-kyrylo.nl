import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Kyrylo",
  lastName: "Moloshnikov",
  name: `Kyrylo Moloshnikov`,
  role: "DevOps Engineer · Software Developer",
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
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kyrylo-moloshnikov",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing DevOps, cloud and secure delivery work`,
  headline: <>Building reliable software — from CI/CD automation to cloud infrastructure</>,
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: (
    <>
      DevOps-focused engineer building CI/CD automation, secure delivery workflows and cloud
      infrastructure skills. Interested in reliable platforms, Linux, networking and automation.
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
        Software developer with a strong focus on DevOps, CI/CD pipelines, cloud infrastructure,
        Linux, networking and secure delivery. Currently interning at RiskStudio, where I work on
        pipeline tooling and full-stack features with Next.js and Django. I am looking for DevOps,
        cloud or platform-focused roles where I can automate delivery, improve reliability and keep
        learning from critical infrastructure environments.
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
        role: "Software Developer / DevOps Graduate Intern",
        achievements: [
          <>
            Working on GitLab CI/CD pipeline improvements and automation with attention to secure
            delivery and reliable engineering workflows.
          </>,
          <>
            Applying DevOps habits such as version-controlled changes, repeatable checks and
            troubleshooting across pipeline and application code.
          </>,
          <>
            Exploring how AI-assisted tooling can support pipeline checks, troubleshooting and
            engineering workflows.
          </>,
          <>
            Developing frontend features with Next.js and building backend services using Python and
            Django on a SaaS risk management platform.
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
            Developed a Blazor Management Web App for admins using the MudBlazor component library
            to manage co-workers.
          </>,
          <>
            Explored .NET MAUI by building test mobile apps with C# and XAML; worked with GitHub for
            version control and team workflows.
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
          <>Bachelor of Applied Science — Computer Science (HBO-ICT: Cloud & Cyber Security)</>
        ),
      },
      {
        name: "Astrum College",
        description: <>Secondary Vocational Education (MBO-4) — Software Development, 2023–2026</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "DevOps, Cloud, Networking & Security",
        description: <></>,
        tags: [
          { name: "CI/CD Pipelines", icon: "cicd" },
          { name: "GitLab CI/CD", icon: "gitlab" },
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "Docker", icon: "docker" },
          { name: "AWS", icon: "aws" },
          { name: "Secure Delivery", icon: "security" },
          { name: "Linux", icon: "linux" },
          { name: "Networking", icon: "infrastructure" },
          { name: "Monitoring", icon: "tooling" },
          { name: "Infrastructure", icon: "infrastructure" },
        ],
        images: [],
      },
      {
        title: "Languages & Frameworks",
        description: <></>,
        tags: [
          { name: "Python", icon: "python" },
          { name: "Bash", icon: "cicd" },
          { name: "Django", icon: "django" },
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
          { name: "Infrastructure", icon: "infrastructure" },
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
