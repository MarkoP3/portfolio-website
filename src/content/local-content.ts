const content = {
  metadata: {
    title: { en: "Marko Puzović | Software Engineer" },
    description: { en: "Software engineer passionate about .NET and Azure."},
    openGraph: {
      title: { en: "Marko Puzović | Software Engineer"},
      description: { en: "Software engineer passionate about .NET and Azure." },
      url: { en: "https://markopuzovic.site" },
      siteName: { en: "Marko Puzović"},
      locale: { en: "en_US" },
      type: { en: "website" },
    },
  },
  profile: {
    greeting: { en: "Hi, I am" },
    firstName: { en: "Marko" },
    lastName: { en: "Puzović"},
    role: { en: "SOFTWARE ENGINEER" },
    description: {
      en: "Software engineer focused on .NET and Azure. I design and deliver reliable, cloud‑native services and actively share knowledge through talks, mentorship, and teaching. Outside of work, I enjoy traveling and exploring diverse cultures."
      },
    ctaContact: { en: "Contact me"},
    ctaProjects: { en: "View projects" },
  },
  sections: {
    education: { en: "Education"},
    experience: { en: "Experience"},
    projects: { en: "Personal projects"},
    certificates: { en: "Certificates"},
    achievements: { en: "Achievements"},
    skillsAndLanguages: { en: "Skills & Languages"},
    contact: { en: "Contact"},
    languages: { en: "Languages"},
    technologies: { en: "Technologies"},
    getInTouch: { en: "Get in touch"},
    projectsExplorePrefix: { en: "Explore more on"},
    projectsExploreLinkText: { en: "GitHub"},
  },
  education: [
    {
      years: { en: "2013 - 2017"},
      school: { en: "Technical High School \"Ivan Sarić\" Subotica, Serbia"},
      field: { en: "Field of study - Information Systems"},
      degree: { en: "Degree - Technician of Information Technologies"},
    },
    {
      years: { en: "2017 - 2021"},
      school: { en: "Faculty of Technical Sciences, University of Novi Sad, Serbia"},
      field: { en: "Field of study - Engineering of Information Systems"},
      degree: { en: "Degree - Bachelor of Engineering in Information Technology"},
    },
  ],
  experience: [
    {
      years: { en: "2025 — Present"},
      companyAndRole: { en: "Suitsupply — .NET Software Engineer (Amsterdam,Netherlands)"},
      descriptions: [
        {
          en: "Suitsupply is an international menswear brand headquartered in the Netherlands. I contribute to the CRM domain, delivering event‑driven services on Azure with .NET, Azure Functions, and Logic Apps, and collaborating across teams to ensure reliable customer journeys.",
        },
      ],
    },
    {
      years: { en: "2021 - 2025"},
      companyAndRole: { en: "VegaIT — Software Engineer (Novi Sad, Serbia)"},
      descriptions: [
        {
          en: "Client projects: Worked for an international luxury men's suits brand as a .NET Developer on the CRM team. Built a centralized email service that is fully event-driven and consists of a series of Azure Functions and Logic Apps.",
        },
        {
          en: "Integrated with Salesforce (Service Cloud, Commerce Cloud, Marketing Cloud), booking services (Jrni, Waitwhile), and owned customer management processes.",
        },
        {
          en: "Managed Azure infrastructure and CI/CD with Azure DevOps, building pipelines and ARM/Bicep templates for resource management.",
        },
      ],
      internalEffortsTitle: { en: "Internal efforts"},
      bullets: [
        { en: "Spoke at an internal conference about Minimal APIs: performance and real use cases.", es: "Conferencia interna sobre Minimal APIs: rendimiento y casos reales." },
        { en: "Mentorship and led multiple internal projects."},
        { en: "Lectured first-year Software Engineering students at the Faculty of Technical Sciences on OOP basics and SOLID principles."},
      ],
    },
  ],
  projects: [
    { name: { en: "Drago Chase"}, desc: { en: "Duck and jump android game inspired by an old programming teacher."}, tech: { en: "Javascript, HTML, CSS, Phaser, Cordova"}, url: "/androidapps/DragoChase.apk", image: "/images/DragoChaseCover.jfif", cta: { en: "Download" } },
    { name: { en: "Insurance offer"}, desc: { en: "Android app that generates insurance policy offers."}, tech: { en: "Javascript, HTML, CSS, Cordova"}, url: "/androidapps/insurancePolicyOffers.apk", cta: { en: "Download" } },
    { name: { en: "Progres Invest"}, desc: { en: "Real estate catalog for local investment company."}, tech: { en: "Next.js, Contentful"}, url: "https://www.progresinvest.rs/", image: "/images/ProgresInvestCover.png", cta: { en: "Visit website" } },
    { name: { en: "Resurs nekretnine"}, desc: { en: "Real estate agancy website."}, tech: { en: "Next.js, Contentful, Mysql"}, url: "https://resurs-nekretnine.rs/", image: "/images/ResursNekretnineCover.png", cta: { en: "Visit website" } },
    { name: { en: "Fitness Leaderboard"}, desc: { en: "Leaderboard for a local fitness competition."}, tech: { en: "React.js, Node.js, Socket.io"}, url: "https://kind-wave-03b507903.4.azurestaticapps.net/", image: "/images/FitnessCompetitionCover.png", cta: { en: "Visit website" } },
  ],
  certificates: [
    {
      title: { en: "NVIDIA Certificate 1"},
      subtitle: { en: "Fundamentals of Deep Learning"},
      url: { en: "https://learn.nvidia.com/certificates?id=946ef9f0acf74d518c2c850c96ee38ea" },
    },
    {
      title: { en: "NVIDIA Certificate 2"},
      subtitle: { en: "Fundamentals of Deep Learning for Computer Vision"},
      url: { en: "https://learn.nvidia.com/certificates?id=fd528e576741437a8d7e3fc8de56dcdf" },
    },
  ],
  achievements: [
    {
      title: { en: "2nd place Devogame 2019", es: "2º lugar Devogame 2019" },
      description: { en: "Tech competition held by Devoteam. Alongside two colleagues, created a flood prevention system that won second place in the finals in Paris.", es: "Competencia tecnológica organizada por Devoteam. Junto con dos colegas, creamos un sistema de prevención de inundaciones que obtuvo el segundo lugar en la final en París." },
    },
  ],
  skills: {
    languages: [
      { en: "Serbian — Native"},
      { en: "English — Speaking, Writing"},
    ],
    technologies: { en: "NodeJS, C#, Java, MSSQL, React, CosmosDB, Azure DevOps, .NET, Azure"},
  },
  contact: {
    phone: { en: "+381 63 388 371"},
    email: { en: "markopuzovic98@gmail.com"},
    website: { en: "https://markopuzovic.site"},
  },
  social: {
    githubUrl: { en: "https://github.com/MarkoP3?tab=repositories"},
  },
};

export default content;



