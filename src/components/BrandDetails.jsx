import { useLoaderData, useParams } from "react-router-dom";



const BrandDetails = () => {

    const allProducts = useLoaderData();

    const {brand} = useParams();
    

    // const service = services.find(service => service.id === idInt);
    const brandProducts = allProducts.filter(product => product.brand === brand);

    return (

        <div>
            {/* Advertisment Slider */}

           

            {/* Featured Products */}
            <div>
                <>
                    <h1 className="text-4xl">Total Products : {allProducts.length}</h1>
                    <h2 className="text-4xl">{brand}</h2>
                     <h1 className="text-4xl">Brand Products : {brandProducts.length}</h1>
                </>
            </div>

        </div>
        
    );
};

export default BrandDetails;