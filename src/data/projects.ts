import proshop from "../assets/proshop.png";
import pizzaday from "../assets/pizzaday.png";
import weather from "../assets/weather.png";
import todo from "../assets/todo.png";
import propertyPulse from "../assets/propertypulse.png";
import hillegal from "../assets/hilegal.png";
import bridgecorner from "../assets/bridgecorner.png";
import dscasapro from "../assets/dscasapro.png";

interface IProjects {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  gitHub?: string;
  stack?: string;
  platform?: string;
  language: string;
}

export const projects: IProjects[] = [
  {
    id: 1,
    title: 'Fullstack PropertyPulse',
    description:
      "Building a full-featured property rental website using Next.js",
    imageUrl: propertyPulse,
    link: "https://property-pulse-nextjs-orpin.vercel.app/",
    gitHub: "https://github.com/khalilaliev/property-pulse-nextjs",
    platform: "Web",
    stack: "NextJS, React, TypeScript, Tailwind, MongoDB",
    language: "English",
  },
  {
    id: 2,
    title: "DSCasaPro",
    description:
      "Using PHP Wordpress with building a full-featured fullstack project",
    imageUrl: dscasapro,
    link: "https://dscasapro.odin.toweb.swiss/",
    // gitHub: "https://github.com/khalilaliev/react-proshop",
    platform: "Web",
    stack: "Wordpress, PHP",
    language: "German, English",
  },
  {
    id: 3,
    title: "BridgeCorner",
    description:
      "Using PHP Wordpress with building a full-featured fullstack project",
    imageUrl: bridgecorner,
    link: "https://bridgecorner.ch",
    // gitHub: "https://github.com/khalilaliev/react-proshop",
    platform: "Web",
    stack: "Wordpress, PHP",
    language: "German",
  },
  {
    id: 4,
    title: "Fullstack ProShop",
    description:
      "Using the MERN stack, Redux and other technologies building  real life project",
    imageUrl: proshop,
    link: "https://proshop-gu6d.onrender.com",
    gitHub: "https://github.com/khalilaliev/react-proshop",
    platform: "Web",
    stack: "MongoDB, ExpressJS, ReactJS, NodeJS",
    language: "English",
  },
  {
    id: 5,
    title: "PizzaDay",
    description:
      "Using ReactJS, Redux and other technologies simple pizza website",
    imageUrl: pizzaday,
    link: "https://react-pizzaday.vercel.app",
    gitHub: "https://github.com/khalilaliev/react-pizzaday",
    platform: "Web",
    stack: "ReactJS, TailwindCSS",
    language: "English",
  },
  {
    id: 6,
    title: "Hillegal",
    description: "Using HTML/CSS and JS website about law company",
    imageUrl: hillegal,
    link: "https://hillegal-projects.vercel.app",
    gitHub: "https://github.com/khalilaliev/front-end-final-project",
    platform: "Web",
    stack: "HTML/CSS, SASS, JavaScript, Gulp",
    language: "English",
  },
  {
    id: 7,
    title: "Simple Weather",
    description: "Using just HTML/CSS and JS simple weather app",
    imageUrl: weather,
    link: "https://khalilaliev.github.io/simple-weather-app",
    gitHub: "https://github.com/khalilaliev/simple-weather-app",
    platform: "Web",
    stack: "HTML/CSS, TailwindCSS, JavaScript, RippleUI",
    language: "English",
  },
  {
    id: 8,
    title: "Todo",
    description:
      "Using ReactJS simple todo app with the ability to set priority",
    imageUrl: todo,
    link: "https://react-hw-3-one.vercel.app",
    gitHub: "https://github.com/khalilaliev/react-hw-3",
    platform: "Web",
    stack: "ReactJS, TailwindCSS,",
    language: "English",
  },
];
