import Banner from "./Banner";
import Brand from "./Brand";
import SaleContainer from "./SaleContainer";
import TopRated from "./TopRated";
import './Toggle/toggle.css'


const Home = () => {

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
            <Brand></Brand>
            <TopRated></TopRated>
            <SaleContainer></SaleContainer>
        </div>
    );
};

export default Home;