import { useEffect } from 'react';
import Swal from 'sweetalert2'


const AddProduct = () => {

    useEffect(() =>{
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
        ,[]);
    
        //send data to the server



    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const newProduct = {photo,name,brand,type,price,description,rating}
        console.log(newProduct);
        form.reset();


        // send data to the server
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'user added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }

  return (
    <div className="bg-[#fffff4] mb-16 p-3">
        <h2 className="text-3xl font-extrabold text-center">Add Product Form</h2>
        <form onSubmit={handleAddProduct} >
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group">
                        <input 
                            type="text"
                            name="photo"
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
                            placeholder="Name"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
            </div>

            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input 
                            type="text"
                            name="brand"
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
                            placeholder="Rating"
                            className="input input-bordered w-full"
                        />
                    </label>
            </div>
           
            <input type="submit" value="Add To Cart" className="btn btn-warning 
                    w-1/2 ml-28 my-10 lg:ml-[450px]  md:w-1/5 "/>
        </form>
    </div>
  );
};

export default AddProduct;
