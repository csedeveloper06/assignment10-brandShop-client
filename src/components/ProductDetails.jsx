import { useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {

    const products = useLoaderData();

    const {_id} = useParams();
    const product = products.find(product => product._id === _id);
    const {photo,name,brand,price,description,type} = product;

    return (
       <div className="my-16 border-1">
            <h1 className="text-5xl text-red-600 text-center font-bold my-5">Product Details!</h1>
            <div className="card card-side bg-[#fffff4] shadow-xl">
                <figure><img src={photo} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Product Name: {name}</h2>
                    <p>Brand Name: {brand}</p>
                    <p>Product Price: {price}</p>
                    <p>Product Type: {type}</p>
                    <p>Product Description: {description}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-warning">Add To Cart</button>
                    </div>
                </div>
           </div>
       </div>
    );
};

export default ProductDetails;