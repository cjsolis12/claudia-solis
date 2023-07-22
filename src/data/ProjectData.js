import codeflix from "../assets/projectImages/homepage.png"
import triviaMind from "../assets/projectImages/triviaMindScreenshot.png"
import weatherApp from "../assets/projectImages/weatherAppScreenshot.png"
import bookSearch from "../assets/projectImages/book-search.png"
import codeBoard from "../assets/projectImages/homefeed.png"

const projectData = [
    {
        img:codeflix,
        title:"CodeFlix",
        description: "This CMS-style blog site allow users to create accounts, publish blogs, and engage in discussions through responses, making it a fully functional full-stack application.",
        technologies: ["MVC", "Handlebars.js", "MySQL", "Sequelize", "express-session", "bcrypt"],
        githubLink: "https://github.com/cjsolis12/mvc-TechBlog.git",
        websiteLink: "https://techflix-ca927f30e910.herokuapp.com/"
    },
    {
        img: triviaMind,
        title:"Trivia Mind",
        description: "As a part of this trivia game project, I implemented API calls to both the Trivia API and the Pexel API.",
        technologies: ["Javascript", "HTML", "CSS", "JQuery", "local storage", "Group Project"],
        githubLink: "https://github.com/cjsolis12/trivia-mind-.git",
        websiteLink: "https://cjsolis12.github.io/trivia-mind-/"
    },
    {
        img: weatherApp,
        title:"Weather App",
        description: "With this weather app, users can search for a city and instantly view the current weather conditions as well as a five-day forecast.",
        technologies: ["Javascript", "HTML", "OpenWeather API", "Bootstrap"],
        githubLink: "https://github.com/cjsolis12/Weather-App.git",
        websiteLink: "https://cjsolis12.github.io/Weather-App/"
    },
    {
        img:bookSearch,
        title:"Find a Book",
        description: "This app was refactored using GraphQL from restful APIs. Users can search for books and save them to their profile.",
        technologies: ["MERN","Google Books API", "GraphQL", "Apollo Server", "MongoDB", "JWT Auth" ],
        githubLink: "https://github.com/cjsolis12/book-search.git",
        websiteLink: "https://findabook-2dad4576cbd6.herokuapp.com/"
    },
    {
        img:codeBoard,
        title:"Code Board",
        description: "My role for this project was designing the bulletin board layout for the main feed. Additionally, I created the models and configured the database seeds.",
        technologies: ["MVC", "HandleBars", "Group Project", "Sequelize", ],
        githubLink: "https://github.com/Timmackie/code-board",
        websiteLink: "https://codeboard.herokuapp.com/login"
    }

]

export default projectData;