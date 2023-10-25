const Cart = ({cart}) => {

    const {photo,name,brand,price} = cart
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Product Details</th>
              <th>Product Price</th>
              <th>Edit Product</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={photo}
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">{brand}</div>
                  </div>
                </div>
              </td>
              <td>
                <br />
                <span className="badge badge-ghost badge-sm">
                  {price}
                </span>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">
                    <img className="w-12 h-12 " src="https://i.ibb.co/8NhjyJ1/delete.png" alt="" />
                </button>
              </th>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
