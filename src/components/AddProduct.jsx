const AddProduct = () => {
  return (
    <div className="bg-[#fffff4] mb-16">
        <h2 className="text-3xl font-extrabold text-center">Add Product Form</h2>
        <form>
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
                <div className="form-control md:w-1/2 ml-4">
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
                <div className="form-control md:w-1/2 ml-4">
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
                <div className="form-control md:w-1/2 ml-4">
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
           
            <button className="btn btn-warning w-1/5 ml-[450px] my-10">Add To Cart</button>
        </form>
    </div>
  );
};

export default AddProduct;
