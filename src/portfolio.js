import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Sai Sarath",
  title: "Hi all, I'm Sai Sarath",
  subTitle: emoji(
    "A passionate Software Development Engineer 🚀 with 3 years of experience building microservices, full-stack web applications using Java, Spring Boot, React.js, AWS, and more."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Vh4x92LpPksxo0SNaFB10T8PpeC5zdef/view?usp=sharing",
  displayGreeting: true 
};

const socialMediaLinks = {
  github: "https://github.com/saisarathv",
  linkedin: "https://www.linkedin.com/in/saisarathv/",
  gmail: "nikhilsaisarathvalavala1@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle:
    "Experienced Software Development Engineer specializing in delivering scalable full-stack solutions, microservices, and cloud-driven architectures.",
  skills: [
    emoji(
      "⚡ Mastery in building interactive and dynamic user interfaces with React.js and Redux for optimized state management."
    ),
    emoji(
      "⚡ Proficient in designing and implementing production-grade microservices using Spring Boot and Spring MVC."
    ),
    emoji(
      "⚡ Expertise in AWS cloud infrastructure, including EC2, S3, RDS, Lambda, and EKS, for scalable and efficient deployments."
    ),
    emoji(
      "⚡ Advanced knowledge of CI/CD pipelines leveraging Maven, Gradle, Jenkins, Docker, and Kubernetes for streamlined releases."
    ),
  ],
};
const softwareSkills = [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "nodejs",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  }
];

const display = true;


const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University at Buffalo",
      logo: require("./assets/images/buffalo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2023 - May 2024",
      desc: (
        <>
          Specialized in advanced topics including web development, software engineering, and deep learning. Focused on both theoretical foundations and practical applications in cutting-edge technologies.
          <br />
          Relevant Courses: Deep Learning, Computational Linguistics, Data Intensive Computing, and Introduction to Machine Learning.
        </>
      ),
      descBullets: []
    },
    {
      schoolName: "Vellore Institute of Technology",
      logo: require("./assets/images/vit.jpg"),
      subHeader: "Bachelor of Science in Computer Science and Engineering",
      duration: "July 2017 - May 2021",
      desc: (
        <>
          Graduated in the top 10% of the program with a strong focus on software development, IoT, and competitive programming.
          <br />
          Winner in the Category of IoT Software Model in the 4-day Make-n-Code-a-Thon (2020).
        </>
      ),
      descBullets: []
    }
  ]
};




const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "80%" 
    },
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud Infrastructure",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false
};
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "CVS Health, NY",
      companylogo: require("./assets/images/cvs.jpg"),
      date: "January 2024 – Present",
      desc: "Contributed to improving healthcare efficiency by designing scalable solutions.",
      descBullets: [
        "Developed a React.js-based platform using Redux to optimize prescription query workflows, reducing query processing time by 35%.",
        "Enhanced Spring Boot REST API performance with caching and asynchronous processing, achieving 150ms latency during peak loads.",
        "Created secure data interfaces for medical and prescription data access, supporting document uploads, API-driven search, and highlighting capabilities.",
        "Implemented secure authentication mechanisms using JWT, OAuth, and LDAP, ensuring data protection across 10+ healthcare applications.",
        "Automated deployment pipelines using Kubernetes and AWS ECS, reducing deployment time by 50% and improving system uptime."
      ]
    },
    {
      role: "Software Engineer II",
      company: "Western Union, India",
      companylogo: require("./assets/images/WU.png"),
      date: "June 2022 – December 2022",
      desc: "Enhanced the efficiency and reliability of payment systems through backend improvements.",
      descBullets: [
        "Redesigned backend APIs using Spring Boot, reducing transaction processing time by 25%, and enabling faster settlements for over 500,000 monthly transactions.",
        "Developed REST APIs with polling mechanisms to provide real-time transaction status updates, reducing escalations by 15%.",
        "Replaced batch processing with Apache Kafka for real-time event streaming, increasing system responsiveness by 30%.",
        "Optimized API performance using Postman and Grafana, supporting 100,000+ daily requests and improving transaction reliability.",
        "Implemented robust logging and monitoring to identify bottlenecks, increasing transaction completion rates by 20%."
      ]
    },
    {
      role: "Junior Software Engineer",
      company: "TopHat Software Technologies, India",
      companylogo: require("./assets/images/tophat.jpeg"),
      date: "January 2021 – May 2022",
      desc: "Developed efficient tools and workflows for claims management and fraud prevention.",
      descBullets: [
        "Built a document upload system in React.js integrated with Spring Boot, reducing claims validation time by 40%.",
        "Migrated legacy claims data to Amazon DynamoDB, optimizing schema design to achieve 150ms retrieval latency.",
        "Developed fraud detection workflows using DynamoDB Streams and Spring Boot, reducing fraudulent claims by 20%.",
        "Enhanced API reliability to 99.5% by debugging and optimizing claims submission workflows.",
        "Contributed to Agile development practices by implementing automated pipelines and conducting regular code reviews."
      ]
    }
  ]
};




const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "Some of the key projects I have worked on.",
  projects: [
    {
      projectName: "Repochat",
      projectDesc: "AI-powered GitHub repository chatbot leveraging Code Llama 7B-Instruct LLM and RAG for seamless interaction.",
      stars: '250+',
      forks: '45+',
      technologies: ["Python", "LangChain", "Vector DB", "Retrieval Augmented Generation"],
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/nikhilvalavala/repochat"
        },
        {
          name: "Live Demo",
          url: "https://repochat.streamlit.app/"
        }
      ]
    },
    {
      projectName: "Multivoice",
      projectDesc: "Enhances the viewing experience of foreign-language media by providing personalized voice dubs through advanced voice cloning and text-to-speech technologies",
      stars: 22,
      forks: 7,
      technologies: ["Python", "Text to Speech", "Voice Cloning", "LLM Translation"],
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/nikhilvalavala/multivoice"
        },
        {
          name: "Live Demo",
          url: "https://multivoice.streamlit.app/"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/tcs.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to reach out to discuss projects or job opportunities.",
  number: "+1 716 588 0567",
  email_address: "nikhilsaisarathvalavala1@gmail.com"
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};