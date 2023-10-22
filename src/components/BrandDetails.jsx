import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";



const BrandDetails = ({brandProduct}) => {

    const allProducts = useLoaderData();

    const {brand} = useParams();
    

    // const service = services.find(service => service.id === idInt);
    const brandProducts = allProducts.filter(product => product.brand === brand);

    return (

        <div>
            {/* Advertisment Slider */}

           
            <h1 className="text-4xl font-bold text-red-600 text-center">Featured Products</h1>
            {/* Featured Products */}
            <div className="grid grid-cols-1 ml-16 md:grid-cols-2 md:ml-0 lg:ml-0 lg:grid-cols-3 my-8 gap-3">
                
                {
                    brandProducts.map(brandProduct => <Product
                        key={brandProduct._id}
                        brandProduct = {brandProduct}
                    ></Product>)
                }
            </div>

        </div>
        
    );
};

export default BrandDetails;