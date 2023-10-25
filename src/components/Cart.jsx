import { data } from "autoprefixer";
import Swal from "sweetalert2";

const Cart = ({ cart }) => {
  const { _id, photo, name, brand, price } = cart;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${_id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                  'Deleted!',
                  'Your product has been deleted.',
                  'success'
              )
            }
          });
      }
    });
  };

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
              <th className="w-1/3">Product Details</th>
              <th className="w-1/3">Product Price</th>
              <th className="w-1/3">Delete Product</th>
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
                      <img src={photo} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold w-1/3">{name}</div>
                    <div className="text-sm w-1/3 opacity-50">{brand}</div>
                  </div>
                </div>
              </td>
              <td>
                <br />
                <span className="badge badge-ghost badge-sm w-1/3">
                  {price}
                </span>
              </td>
              <th className="w-1/3">
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-ghost btn-circle btn-sm"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://i.ibb.co/8NhjyJ1/delete.png"
                    alt=""
                  />
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
