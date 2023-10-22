import { Link } from "react-router-dom";


const Product = ({brandProduct}) => {

    const {_id,photo,name,brand,type,price,rating,description} = brandProduct

    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure><img className="w-[100%] h-40" src={photo} alt="product"/></figure>
            <div className="card-body">
                <h2 className="card-title">Title: {name}</h2>
                <div className="flex">
                    <p className="text-xs">Brand:{brand}</p>
                    <p className="text-xs">Product Type:{type}</p>  
                </div>
                <p className="text-xs">Price:{price}</p>
                <p className="text-xs">Description: {description}</p>
                <img className="w-44 h-8" src={rating} alt="" />
                <div className="card-actions justify-start">
                    <Link to={`/ProductDetails/${_id}`}>
                        <button className="btn btn-warning btn-sm">Details</button>
                    </Link>

                    <Link to={`/updateproduct/${_id}`}>
                        <button className="btn btn-success btn-sm">Update</button>
                    </Link>   
                </div>
            </div>
        </div>
    );
};

export default Product;