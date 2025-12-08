import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Kyrylo",
  lastName: "Moloshnikov",
  name: `Kyrylo Moloshnikov`,
  role: "Software Developer ",
  avatar: "/images/avatar6.jpg",
  email: "kyrmol@outlook.com", // email not provided
  location: "Europe/Amsterdam", // IANA timezone for Arnhem, Netherlands
  languages: ["English", "Dutch"],
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
  headline: <>Building practical web solutions with .NET and modern web tech</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Skilled in HTML, CSS, JavaScript, TypeScript and C#. Experienced building web
      applications using ASP.NET Core, Blazor and Entity Framework. Looking to apply
      technical skills and passion for problem-solving in a development team.
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
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Software developer focused on building practical web
        applications with modern technologies. Enjoy solving real-world
        problems by combining backend services and clear user interfaces.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ICT@Work",
        timeframe: "2024 - 2025",
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
        name: "ROC A12",
        description: <>Software Engineering / Development — Arnhem Regio, Netherlands (2026)</>,
      },
      {
        name: "Harvard University",
        description: <>CS50: Introduction to Computer Science</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages & Frameworks",
        // description intentionally left empty to display only labels/tags
        description: <></>,
        tags: [
          { name: "Python", icon: "python" },
          { name: "C#", icon: "csharp" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Django" },
          { name: "FastAPI" },
          { name: "ASP.NET Core", icon: "dotnet" },
        ],
        images: [],
      },
      {
        title: "Frontend & UI",
        description: <></>,
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Bootstrap", icon: "bootstrap" },
          { name: "TypeScript", icon: "typescript" },
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
          { name: "Docker", icon: "docker" },
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
