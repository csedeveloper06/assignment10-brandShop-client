import Banner from "./Banner";
import Brand from "./Brand";
import SaleContainer from "./SaleContainer";
import TopRated from "./TopRated";
import './Toggle/toggle.css'
import { useLoaderData } from "react-router-dom";


const Home = () => {

    const brands = useLoaderData();

    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    return (
        <div>
            <button onClick={myFunction} className="home btn ml-5 mt-2">
                <img className="w-5 h-5" src="https://i.ibb.co/89r4CsL/dark.png" alt="" />
            </button>
            <Banner></Banner>
            {/* <Brand></Brand> */}
            
            <div>
                <h2 className="text-5xl text-red-600 font-extrabold text-center py-8">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                    {
                        brands.map(brand => <Brand
                        key={brand._id}
                        brand={brand}
                        >
                        </Brand>)
                    }
                    
                </div>
            </div>
            <TopRated></TopRated>
            <SaleContainer></SaleContainer>
        </div>
    );
};

export default Home;