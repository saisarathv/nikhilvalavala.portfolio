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
    "https://drive.google.com/file/d/1LMSGJlHVL5vZoq3UCVbGqi_v3lKkMypx/view?usp=sharing",
  displayGreeting: true 
};

const socialMediaLinks = {
  github: "https://github.com/nikhilvalavala",
  linkedin: "https://www.linkedin.com/in/nikhilvalavala/",
  gmail: "nikhilsaisarathvalavala1@gmail.com",
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
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
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
      desc: "Developing scalable, user-focused healthcare solutions by optimizing APIs and creating advanced tools.",
      descBullets: [
        "Built intuitive UI for exploring medical and prescription data.",
        "Boosted API throughput by 2x with caching and async processing.",
        "Developed a document review tool with PDF search and highlights.",
        "Designed dashboards for trend analysis with customizable filters.",
        "Automated deployments with Kubernetes and CI/CD, cutting time by 50%."
      ]
    },
    {
      role: "Software Engineer II",
      company: "Western Union, India",
      companylogo: require("./assets/images/WU.png"),
      date: "June 2022 – January 2023",
      desc: "Enhanced backend performance and scalability with microservices and secure APIs.",
      descBullets: [
        "Developed backend for money transfer calculations.",
        "Ensured consistent transactions with polling mechanisms.",
        "Integrated external systems and optimized data storage.",
        "Upgraded codebase from AngularJS to Angular 12.",
        "Built Spring Boot APIs with JMS and ActiveMQ for communication."
      ]
    },
    {
      role: "Software Engineer",
      company: "TopHat Software Technologies,India",
      companylogo: require("./assets/images/tophat.jpeg"),
      date: "January 2020 – May 2022",
      desc: "Created SPAs and backend services for seamless user experiences.",
      descBullets: [
        "Developed SPAs with React hooks and modern UI tools.",
        "Automated data handling with Spring MVC and Hibernate.",
        "Designed reusable REST APIs for efficient interactions.",
        "Improved response time by 30% using DynamoDB.",
        "Streamlined SDLC with Agile practices and quality reviews."
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