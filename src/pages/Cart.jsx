import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Product from "../components/Product";



const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="">
  {
    cart.length > 0  ? 
    (<div>


      <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-40xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]
    ">
        {
          cart.map( (item,index) => {
            // return <CartItem key={item.id} item={item} itemIndex={index} />
            return  <Product key = {item.id} post={item}/>
          } )
        }
      </div>

      <div>

        <div> 
          <div>Your Cart</div>
          <div>Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p>Total Amount: ${totalAmount}</p>
          <button>
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div >
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
