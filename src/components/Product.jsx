

const Product = ({brandProduct}) => {

    const {photo,name,brand,type,price,rating,description} = brandProduct

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="product"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <span>{brand}</span>
                <span>{type}</span>
                <span>{price}</span>
                <p>{description}</p>
                <img src={rating} alt="" />
                <div className="card-actions justify-center">
                    <button className="btn btn-warning">Details</button>
                    <button className="btn btn-success">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Product;