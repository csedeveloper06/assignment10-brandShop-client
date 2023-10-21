const TopRated = () => {
  return (
    <div>
      <h1 className="text-5xl text-center p-8 text-red-600 font-bold">Top Rated Products</h1>
      <div className="grid grid-cols-1 ml-16 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        <div className="card card-compact w-[280px] bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-52"
              src="https://i.ibb.co/9wgftGb/pro1.jpg"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cocacola</h2>
            <p>Coca-Cola: A Taste of History and Happiness</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-[280px] bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-52"
              src="https://i.ibb.co/8xnscPm/product2.jpg"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">McDonald</h2>
            <p>Golden Delights: The World of French Fries</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-[280px] bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-52"
              src="https://i.ibb.co/Ptn9M83/pr2.jpg"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Starbucks</h2>
            <p>Brewing Magic: The Starbucks Coffee Experience</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-[280px] bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-52"
              src="https://i.ibb.co/5RLQhqw/pro7.jpg"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Nestle</h2>
            <p>Maggi Magic: Unveiling the Instant Noodle Revolution</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
