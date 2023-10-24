import { useLoaderData } from "react-router-dom";


const MyCart = () => {

    const carts = useLoaderData();

   

    return (
        <div>
            <h2>Product Name: {carts.name}</h2>
        </div>
    );
};

export default MyCart;