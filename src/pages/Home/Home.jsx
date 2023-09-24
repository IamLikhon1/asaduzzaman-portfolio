import HomeButton from "../../components/HomeButton";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="overflow-x-hidden">
       <div id="home">
       <NavBar></NavBar>
       <HomeButton></HomeButton>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
       </div>
            
        </div>
    );
};

export default Home;