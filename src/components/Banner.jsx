

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen my-10" 
                style={{backgroundImage: 'url(https://i.ibb.co/dJ7kvQw/banner.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-bold text-red-600">FOoDiE</h1>
                        <p className="mb-5">
                            Indulge in Irresistible Delights! Visit our Fast Food Haven for mouthwatering burgers, crispy fries, and scrumptious treats. Satisfy your cravings today!
                        </p>
                        <button className="btn btn-primary">Buy Now !!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;