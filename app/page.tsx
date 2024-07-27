import Navbar from "./components/NavBar";
import TopCities from "./components/TopCitites";
import NewDirectory from "./components/NewDirectory";
import PopularDirectory from "./components/PopularDirectory";
import HowItWorks from "./components/HowItWorks";





const Home: React.FC = () => {
    return (
        <div>
            <Navbar /> 
            <TopCities/>
            <PopularDirectory/>
            <HowItWorks />
            <NewDirectory/>   
            {/* Rest of your page content */}
        </div>
    );
};

export default Home;