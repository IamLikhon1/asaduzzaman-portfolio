import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="overflow-x-hidden">
        <NavBar></NavBar>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Contact></Contact>
        <Footer></Footer>
            
        </div>
    );
};

export default Home;