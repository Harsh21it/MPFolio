import lib from "../assets/projects/library.png";
import port from "../assets/projects/portfolio.png";
import library from "../assets/projects/lib.png";

export const HERO_CONTENT='I am a full stack developer and Flutter app developer with a talent for crafting innovative applications. Through several projects, I have refined my skills in front-end technologies like React and Flutter (Dart) and back-end technologies like MySQL and Firebase. My goal is to use my expertise to develop solutions that drive business growth and provide outstanding user experiences.';

export const ABOUT_CONTENT="I am currently a final year student at Delhi Technological University, New Delhi. Born in Ballia, Uttar Pradesh. Completed my High School from Aditya Birla Public School, Renukoot and Senior Secondary schooling from Lal Bahadur Shastri JAVM Sr. Sec School, RK Puram. I have a knack to explore and learn new things and being creative and productive. My hobbies include playing guitar, singing, reading books and learning new things. I have also earned SOF's academic excellence scholarship in the zone of Uttar Pradesh and Uttarakhand for the academic year of 2017-18.";

export const PROJECT=[
    {
        name:"LIBRARY-SYSTEM WITH FACIAL RECOGNITION AND TEXT-TO-SPEECH FUNCTIONALITY",
        description:"Console-Based application",
        features:["Utilized a 5-second reaction time for user login via facial recognition, ensuring swift access.","Incorporated QR codes (Zbar 0.10) to efficiently issue or return multiple books, streamlining library processes.","Implemented a First Come First Serve preference for multiple logins, prioritizing users based on arrival."],
        technologies:["Python", "ML(libraries)","MySQL","pyttxl 3"],
        image:lib,
    },
    {
        name:"A PROJECT PORTFOLIO WEBSITE v1 BUILT WITH REACTJS AND TAILWIND",
        description:"A Website regarding My Portfolio",
        features:["Constructed a 2D vector-themed portfolio website using ReactJS and Tailwind CSS, deployed error-free on Netlify, resulting in a significant increase in user engagement.","Employed React-Dom and React-Router for seamless page navigation, including a customized loading page with a 4-second loading time to enhance user experience."],
        technologies:["HTML 5","Tailwind CSS","Reactjs"],
        image:port,
    },
    {
        name:"A LIBRARY SELF-CHECKOUT ANDROID APP BUILT USING FLUTTER (LibOnTheGo v.1)",
        description:"an Executable APP for Android",
        features:["Developed a library app for self-checkout of books using barcode scanning, reserving books for up to 2 hours in case of emergency, and tracking accumulated fines.","Deployed two apps: one for users and one for admins to monitor various activities.","Implemented using Flutter/Dart 3.4, a custom database, and Firebase for security and integrity, utilizing email/password for authentication, and tested on a Redmi Note 9 Pro."],
        technologies:["Flutter","Firebase","Firestore"],
        image:library,
    }
]