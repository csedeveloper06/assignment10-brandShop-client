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

           

            {/* Featured Products */}
            <div>
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