


const Brand = ({brand}) => {

        const {name,image} = brand;
        // console.log(newBrands);
       
    return (
        <div className="">
            <div className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure><img className="w-[100%] h-40" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-4xl font-bold">{name}</h2>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;