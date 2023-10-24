import { data } from "autoprefixer";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const ProductDetails = () => {

    const products = useLoaderData();

    const {_id} = useParams();
    const product = products.find(product => product._id === _id);
    const {photo,name,brand,price,description,type} = product;
    

    const handleAddToCart = ( event => {
        event.preventDefault();
        const newCartProduct =  {photo,name,brand,price,description,type};
        console.log(newCartProduct);

        // send data to the server
        fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCartProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })


    })

    return (
       <div className="my-16 border-1 px-2">
            <h1 className="text-4xl text-red-600 text-center font-bold my-5">Product Details!</h1>
            <div className="card card-side bg-[#fffff4] shadow-xl">
                <figure className="w-1/2"><img className="w-full lg:w-96 " src={photo} alt="Food"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Product Name: {name}</h2>
                    <p>Brand Name: {brand}</p>
                    <p>Product Price: {price}</p>
                    <p>Product Type: {type}</p>
                    <p>Product Description: {description}</p>
                    <div className="card-actions justify-start">
                        <Link to={'/mycart'}>
                            <button onClick={handleAddToCart} className="btn btn-warning">Add To Cart</button>
                        </Link>
                    </div>
                </div>
           </div>
       </div>
    );
};

export default ProductDetails;