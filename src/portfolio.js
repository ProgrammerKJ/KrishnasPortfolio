/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Krishna",
  title: "Hello! Im Krishna Joshi",
  subTitle: emoji(
    "🚀 An aspiring Software Engineer with a passion for technology and a relentless curiosity about the ever-evolving world of software engineering. I bring a strong foundation in JavaScript, Python, PostgreSQL, HTML, and CSS, and I'm actively expanding my skills with Node.js, Express, React. I'm on an exhilarating journey to shape the digital future, eager to craft innovative solutions and make a positive impact. Join me in this exciting adventure as we build the future, one line of code at a time. 🌟"
  ),
  resumeLink:
    "https://docs.google.com/document/d/10AGCHf8YD8skNDnBXp0Gl6me3CnBz2p4/edit?usp=sharing&ouid=110621110171723706693&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ProgrammerKJ",
  linkedin: "www.linkedin.com/in/krishnajoshi28",
  email: "krishna.joshi28@yahoo.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Current Skills",
  subTitle: "STACKS IN MY ARSENAL & STACKS I AM CURRENTLY LEARNING!",
  skills: [
    emoji(
      "⚡ I possess hands-on experience in JavaScript, React, and NodeJS with a strong proficiency in utilizing DOM manipulations to create dynamic and interactive user interfaces"
    ),
    emoji(
      "⚡ I possess proficient skills in Python and the Flask framework, with a specialization in route handling and database integration."
    ),
    emoji(
      "⚡ I have developed a robust foundation in working with APIs, enabling me to independently create custom applications."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Texas Tech University",
      logo: require("./assets/images/ttu.png"),
      subHeader:
        "Bachelors of Management Information Systems - (Application Development Focus)",
      duration: "Jan 2017 - Jan 2022",
      descBullets: [
        "Database Management",
        "Software Development",
        "Systems Analysis and Design",
        "Web Application Development"
      ]
    },
    {
      schoolName: "Springboard Bootcamp",
      logo: require("./assets/images/spring.jpg"),
      subHeader: "Software Engineering Certificate",
      duration: "May 2023 - Nov 2023",
      descBullets: [
        "Completing 800+ hours of hands-on course material, with 1:1 industry expert mentor oversight, and completion of 4 in-depth portfolio projects",
        "Mastering skills in front-end and back-end web development, databases, and data structures and algorithims"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Fellow",
      company: "Springboard",
      companylogo: require("./assets/images/spring.jpg"),
      date: "Mau 2023 – Present",
      desc: "Mastering skills in front-end and backend development, databases, and data structures and algorithims"
    },
    {
      role: "Hospitality Director",
      company: "Chick-Fil-A",
      companylogo: require("./assets/images/chick-fil-a.png"),
      date: "Jul 2015 – Jan 2023",
      desc: "Gained about 8 years of valuable customer service exerience as well as learned how to work with a top level executive team to help reach company goals"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "TOUR SOME OF THE PROJECTS THAT I HAVE COMPLETED BELOW!",
  projects: [
    {
      image: require("./assets/images/meal.png"),
      projectName: "Meal Master",
      projectDesc:
        "I developed a versatile recipe and fitness application utilizing JavaScript, Python, SQL, HTML, CSS, and various frameworks. The app seamlessly connects with Spoonacular's API, granting users access to an extensive collection of recipes. Users can curate their meal plans, monitor their weight and fitness goals, and enjoy the convenience of a built-in shopping list for effortless grocery trips. This project showcases my proficiency in full-stack development and API integration, making it an attractive addition to my software engineering portfolio.",
      footerLink: [
        {
          name: "Visit Site",
          url: "https://meal-masters.onrender.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/forex.png"),
      projectName: "Forex Currency Convertor",
      projectDesc:
        "I designed a dynamic Forex Currency Converter using Flask, Python, HTML, and CSS, enabling real-time currency conversion through API integration. This intuitive tool not only allows users to convert between any desired currencies but also provides immediate feedback by flagging incorrect currency symbols or input values. This project showcases my proficiency in web development and API integration, making it a valuable addition to my software engineering portfolio.",
      footerLink: [
        {
          name: "Video Tour",
          url: "https://www.loom.com/share/Document-13-September-2023-77db7aa7913d4294b5df51b9c78852a8?sid=897a8232-b43b-44bd-b983-97a1a420ce23"
        }
      ]
    },
    {
      image: require("./assets/images/dj.png"),
      projectName: "Database DJ",
      projectDesc:
        "I developed a robust Database DJ application using Flask, Python, SQLAlchemy, HTML, and CSS, offering a comprehensive set of functionalities for managing songs and playlists. With this application, users can effortlessly perform full CRUD (Create, Read, Update, Delete) operations for both songs and playlists. You can create and customize playlists by adding or removing songs, and explore a rich library of songs. This project showcases my proficiency in web development, database management, and user interface design, making it a compelling addition to my software engineering portfolio.",
      footerLink: [
        {
          name: "Video Tour",
          url: "https://www.loom.com/share/5968431689b34a84a5058cb93b45a8c4"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("More Projects"),
  subtitle: "Just some more small projects I've worked on",

  achievementsCards: [
    {
      title: "Boggle Game",
      subtitle:
        "Experience wordplay at its best with the Boggle Game App. Crafted with JavaScript, HTML, and Python, this web-based game challenges your vocabulary skills. Connect adjacent letters on the dynamic game board to discover words, race against the clock, and track your high scores. With Flask powering the backend, challenge friends and family for word-finding supremacy. It's a showcase of DOM manipulation, timer implementation, and interactive scorekeeping, making it a valuable addition for developers seeking to enhance their skills.",
      image: require("./assets/images/boggle.png"),
      footerLink: [
        {
          name: "Video Link",
          url: "https://www.loom.com/share/Boggle-14-September-2023-9d2c7840887a44d39db4ac86a41695f0?sid=c523b088-8b0c-4f3b-9e19-bb5def32f3e7"
        }
      ]
    },
    {
      title: "Jeopardy",
      subtitle:
        "I crafted an interactive Jeopardy game using JavaScript DOM manipulation, Ajax requests, HTML, and CSS. This captivating game leverages an API to fetch random categories and their corresponding questions, providing players with an engaging and challenging experience. This project exemplifies my expertise in front-end web development and API integration, making it a standout piece in my software engineering portfolio.",
      image: require("./assets/images/jepo.jpg"),
      footerLink: [
        {
          name: "Video Link",
          url: "https://www.loom.com/share/Jeopardy-14-September-2023-0534e155f1b044bca0599916086642bf?sid=1caa7272-50f4-410c-bcdd-6bab8683889c"
        }
      ]
    },
    {
      title: "Memory Game",
      subtitle:
        "I developed an engaging color-coded memory game that showcases my proficiency in frontend development and DOM manipulation. Leveraging HTML, JavaScript, and CSS, I created an intuitive user experience where players match color pairs, with matched pairs remaining on the board. This project demonstrates my ability to design captivating user interfaces that respond seamlessly to interactions. It also highlights my problem-solving skills in addressing gameplay intricacies and ensuring a fluid user experience. As a software enthusiast, I'm excited to apply these skills to real-world challenges and drive user-centric innovation.",
      image: require("./assets/images/memory.png"),
      footerLink: [
        {
          name: "Visit Application",
          url: "https://nepalimolly.github.io/JavaScript-Memory-Game/"
        }
      ]
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

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
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
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
  subtitle: "Reach out to me for anything!",
  number: "806-702-9627",
  email_address: "krishna.joshi28@yahoo.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
