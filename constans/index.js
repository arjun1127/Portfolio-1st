import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    wanderLust,
    Spotifyclone
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solving",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Citzen's School",
      company_name: "Mysuru",
      iconBg: "#383E56",
      date: "-June 2020",
      points: [
        "Studied in Citizen's School",
        "Completed My Schooling with the score of 93%"
      ],
    },
    {
      title: "Sadvidya PU College",
      company_name: "Mysuru",
      iconBg: "#E6DEDD",
      date: "Feb 2022",
      points: [
       "11th and 12th from Sadvidya composite pu college",
       "Studied Computer Science as Major"
      ],
    },
    {
      title: "HackerRank",
      company_name: "Online",
      iconBg: "#383E56",
      date: "Completed",
      points: [
        "Achived Basics of Problem solving Skils with Data Structures and Algorithms",
        "Also learnet the bascis of DP"
      ]
    },
    {
      title: "ApnaCollege",
      company_name: "Online",
      iconBg: "#E6DEDD",
      date: "Completed",
      points: [
        "Achived Full-stack development in MERN stack",
        "Also learnt JS frameworks , Express.js, Node.js, React.js"
      ],
    },
  ];
  
  const testimonials = [
    
  ];
  
  const projects = [
    {
      name: "WnderLust",
      description:
        "Web-based platform that allows users to Search their destination for vaction and Owners to create their Listing for Villas so that they can rent it  ",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },

      ],
      image: wanderLust,
      source_code_link: "https://github.com/arjun1127/Major-project",
    },
    {
      name: "Spotify-clone",
      description:"A responsive front-end clone of the spotify web-Application                                                              ",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: Spotifyclone,
      source_code_link: "https://github.com/arjun1127/SpotifyClone",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };