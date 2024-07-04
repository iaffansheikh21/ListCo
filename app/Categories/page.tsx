import Navbar from "../components/NavBar";
import AdvancedFilter from "../components/AdvancedFilter";



const Categories: React.FC = () => {
    return (
        <div>
            <Navbar />
            <h1>Categories</h1>
            <AdvancedFilter />
            {/* Rest of your page content */}
        </div>
    );
};

export default Categories;