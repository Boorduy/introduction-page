import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import Projects from "./Projects/Projects.jsx";
import User from "./User/User.jsx";
import Github from "./Github/Github.jsx";
const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/Boorduy')
        return response.json()
}


export {Header, Footer, Home,About, Contact, Projects, User, Github, githubInfoLoader}