

const SaleContainer = () => {
    return (
        <div>
           <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
                <figure><img className="w-full h-full" src="https://i.ibb.co/j5RBnYX/banner21.jpg" alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="text-5xl font-extrabold text-center text-red-600">New Sale is released!</h2>
                    <img src="https://i.ibb.co/6mdVSqf/dis5.jpg" alt="" />
                    <button className="btn btn-primary w-32 bg-red-600 border-0 mx-auto">Buy Now</button>
                    <div className="card-actions justify-center">  
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default SaleContainer;