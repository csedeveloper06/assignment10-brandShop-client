import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";


const MyCart = ({cart}) => {

    const carts = useLoaderData();
    return (
        <div>
            {
                carts.map(cart => <Cart
                key={cart._id}
                cart ={cart}
                ></Cart>)
            }
        </div>
    );
};

export default MyCart;