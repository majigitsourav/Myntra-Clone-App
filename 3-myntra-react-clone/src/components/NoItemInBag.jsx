import React from "react";
import {Link} from 'react-router-dom'
const NoItemInBag = () => {
  return (
    <div className="text-center mt-5">
      <h5>Your bag is empty!!</h5>
      <Link to="/" className="btn btn-primary mt-2">Continue Shopping</Link>
    </div>
  );
};

export default NoItemInBag;
