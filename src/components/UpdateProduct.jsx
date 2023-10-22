import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {

    const product = useLoaderData();
    const {_id,name,brand,type,price,description,photo,rating} = product;


    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const updatedProduct = {photo,name,brand,type,price,description,rating}
        console.log(updatedProduct);
        form.reset();


        // send data to the server
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }

    return (
        <div className="bg-[#fffff4] mb-16 p-3">
        <h2 className="text-xl font-extrabold text-center text-red-600">Update A Product :{name} </h2>
        <form onSubmit={handleUpdateProduct}>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group">
                        <input 
                            type="text"
                            name="photo"
                            defaultValue={photo}
                            placeholder="PhotoURL"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                        <input
                            type="text"
                            name="name"
                            defaultValue={name}
                            placeholder="Name"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
            </div>

            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">brand</span>
                    </label>
                    <label className="input-group">
                        <input 
                            type="text"
                            name="brand"
                            defaultValue={brand}
                            placeholder="Brand Name"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Product Type</span>
                    </label>
                    <label className="input-group">
                        <input
                            type="text"
                            name="type"
                            defaultValue={type}
                            placeholder="Product Type"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
            </div>


            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input 
                            type="text"
                            name="price"
                            defaultValue={price}
                            placeholder="Price"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                        <input
                            type="text"
                            name="description"
                            defaultValue={description}
                            placeholder="Description"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
            </div>

            <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input
                            type="text"
                            name="rating"
                            defaultValue={rating}
                            placeholder="Rating"
                            className="input input-bordered w-full"
                        />
                    </label>
            </div>
           
            <input type="submit" value="Update Product" className="btn btn-warning 
                    w-1/2 ml-28 my-10 lg:ml-[450px]  md:w-1/5 "/>
        </form>
    </div>
    );
};

export default UpdateProduct;