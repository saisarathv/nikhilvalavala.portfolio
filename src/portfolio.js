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
  username: "Nikhil Sai Sarath Valavala",
  title: "Hi all, I'm Nikhil Valavala",
  subTitle: emoji(
    "A passionate Software Development Engineer 🚀 with 4 years of experience building microservices, full-stack web applications using Java, Spring Boot, React.js, AWS, and more."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1SbsuJD_DgTLBuLcf0_t34ajhjs_Yfz1m/view?usp=sharing",
  displayGreeting: true 
};

const socialMediaLinks = {
  github: "https://github.com/nikhilvalavala",
  linkedin: "https://www.linkedin.com/in/nikhilvalavala/",
  gmail: "nikhil.v@ajobguide.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle:
    "Experienced Software Development Engineer with expertise in full-stack development, microservices, and cloud technologies.",
  skills: [
    emoji(
      "⚡ Expertise in front-end development with React.js, Redux, and building dynamic user interfaces."
    ),
    emoji(
      "⚡ Skilled in creating production-ready microservices with Spring Boot and Spring MVC."
    ),
    emoji(
      "⚡ Proficient in AWS cloud infrastructure management, including EC2, S3, RDS, Lambda, and EKS."
    ),
    emoji(
      "⚡ Experience in CI/CD pipeline integration using Maven, Gradle, Jenkins, Docker, and Kubernetes."
    )
  ],

  softwareSkills: [
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
  ],
  display: true
};

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
      duration: "July 2017 - June 2021",
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
      progressPercentage: "85%"
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
      company: "PNC Financial Services, NY",
      companylogo: require("./assets/images/PNC.jpeg"),
      date: "January 2024 – Present",
      desc: "Developing microservices and APIs to enable scalable financial solutions with Spring Boot and GraphQL.",
      descBullets: [
        "Integrated Java Spring Boot APIs with React.js using Redux and Context API, improving data flow and state management.",
        "Wrote 20+ automated tests using JUnit to enhance API reliability and reduce manual testing efforts.",
        "Automated AWS application deployments using CodeDeploy and CodePipeline, reducing deployment time by 30%.",
        "Enhanced CI/CD pipeline using Kubernetes and Jenkins, cutting deployment time by 50%.",
        "Designed and implemented GraphQL APIs, reducing network traffic by 30% and improving response times."
      ]
    },
    {
      role: "Software Engineer II",
      company: "Western Union, India",
      companylogo: require("./assets/images/WU.png"),
      date: "June 2022 – January 2023",
      desc: "Optimized API performance and implemented secure, scalable RESTful services for web and mobile apps.",
      descBullets: [
        "Enhanced message delivery by 20% through persistent messaging and failover with ActiveMQ.",
        "Developed and optimized REST APIs that integrated with AWS RDS databases, delivering real-time data to clients.",
        "Packaged applications into Docker containers, improving scalability and portability across environments.",
        "Automated release management, resulting in a 30% increase in deployment frequency.",
        "Migrated MySQL database to MongoDB, improving application responsiveness and scalability."
      ]
    },
    {
      role: "Software Engineer",
      company: "Zensar Technologies, India",
      companylogo: require("./assets/images/znsr.jpg"),
      date: "January 2020 – May 2022",
      desc: "Built single-page applications (SPA) and backend services to deliver seamless user experiences.",
      descBullets: [
        "Developed SPAs using React.js, binding data efficiently with server-side services.",
        "Created reusable RESTful APIs with Spring WebFlux, improving request throughput by 30%.",
        "Utilized Docker for containerization, ensuring smooth deployment across various environments.",
        "Collaborated with backend developers to troubleshoot and optimize REST and SOAP APIs using SoapUI.",
        "Monitored AWS resources, including EC2, Lambda, and SQS, through CloudWatch to ensure high availability."
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
  number: "+1 945 237 2565",
  email_address: "nikhil.v@ajobguide.com"
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