

const Product = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src="" alt="product"/></figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <span>Brand Name</span>
                <span>type</span>
                <span>price</span>
                <img src="" alt="" />
                <div className="card-actions justify-center">
                    <button className="btn btn-warning">Details</button>
                    <button className="btn btn-success">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Product;