export const email = "arunmudiraj1807@gmail.com";

export const navItems = [
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "About", link: "#knowMoreAboutMe" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Blinked In - Social Media App 🚀",
    des: "Blinked In is a social media app where users can post media, explore content, and engage through comments. Features include infinite scrolling, responsive design, and real-time updates with Firebase",
    img: "/blinkedin.png",
    iconLists: ["/skillIcons/react.svg", "/skillIcons/javascript.svg", "/skillIcons/styledcomponents.svg", "/skillIcons/firebase.svg"],
    liveLink: "https://blinked-in.netlify.app/#/login",
    githubLink: "https://github.com/Arunmudiraaj/blinked-in"
  },
  {
    id: 2,
    title: "Mailbox Client 📩",
    des: "Mailbox Client is a web app for sending and receiving emails between registered users. Features include messaging, secure authentication, and a clean, responsive UI",
    img: "/mailboxclient.png",
    iconLists: ["/skillIcons/react.svg", "/skillIcons/javascript.svg", "/skillIcons/tailwindcss.svg", "/skillIcons/firebase.svg"],
    liveLink: "",
    githubLink: "https://github.com/Arunmudiraaj/mail-box-client"
  },
  {
    id: 3,
    title: "Classic Snake Game 🐍",
    des: "A nostalgic Snake game inspired by the iconic Nokia version. Features difficulty levels, high score tracking, and sound effects for an engaging retro gaming experience",
    img: "/snakegame.webp",
    iconLists: ["/skillIcons/html5.svg", "/skillIcons/css3.svg", "/skillIcons/javascript.svg"],
    liveLink: "",
    githubLink: ""
  },
  {
    id: 4,
    title: "My Portfolio 🌐",
    des: "You're looking at it! Built with Next.js, Tailwind CSS, and Aceternity, this portfolio is a showcase of my projects, skills, and interests—crafted for both aesthetics and performance. 🚀",
    img: "/portfolio.png",
    iconLists: ["/skillIcons/nextdotjs.svg", "/skillIcons/typescript.svg", "/skillIcons/tailwindcss.svg"],
    liveLink: "https://arun18-dev.vercel.app/",
    githubLink: "https://github.com/Arunmudiraaj/my-portfolio"
  },
];

export const skills = {
  frontend: [
    {
      name: "Next.js",
      src: "/skillIcons/nextdotjs.svg",
    },
    {
      name: "Redux",
      src: "/skillIcons/redux.svg",
    },
    {
      name: "React.js",
      src: "/skillIcons/react.svg",
    },
    {
      name: "TypeScript",
      src: "/skillIcons/typescript.svg",
    },
    {
      name: "JavaScript",
      src: "/skillIcons/javascript.svg",
    },
    {
      name: "Tailwind CSS",
      src: "/skillIcons/tailwindcss.svg",
    },
    {
      name: "CSS",
      src: "/skillIcons/css3.svg",
    },
    {
      name: "HTML",
      src: "/skillIcons/html5.svg",
    }
  ],

  backend: [
    {
      name: "Node.js",
      src: "/skillIcons/nodedotjs.svg",
    },
    {
      name: "Express.js",
      src: "/skillIcons/express.svg",
    },
    {
      name: "MySQL",
      src: "/skillIcons/mysql.svg",
    },
    {
      name: "MongoDB",
      src: "/skillIcons/mongodb.svg",
    },
    {
      name: "Firebase",
      src: "/skillIcons/firebase.svg",
    },
  ],
  miscellaneous: [
    {
      name: "Postman",
      src: "/skillIcons/postman.svg",
    },
    {
      name: "Git",
      src: "/skillIcons/git.svg",
    },
    {
      name: "Amazon Ec2",
      src: "/skillIcons/amazonec2.svg",
    },
    {
      name: "Linux",
      src: "/skillIcons/linux.svg",
    },
  ]
}

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/Arunmudiraaj"
  },
  {
    id: 2,
    img: "/linkedIn.svg",
    href: "https://www.linkedin.com/in/arun-mudiraj/"
  },
  {
    id: 3,
    img: "/mail.svg",
    href: `mailto:${email}`
  },
];

export const lichessUserName = "arunn18";
export const lichessUrl = (userName: string) => `https://lichess.org/api/games/user/${userName}?max=5&moves=false&opening=true`

