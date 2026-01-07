import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {bagActions} from '../store/bagSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoBagAddSharp } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";
const HomeItem = ({item}) => {
  //console.log(item.id);
  const dispatch = useDispatch();
  const bagItems = useSelector((store)=>store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0  // bagItems.indexOf(item.id) -->It will return index value if item id is present in bag array if it is not present then it will return -1
  //console.log(item.id,elementFound);

  const handleAddToBag = ()=>{
    dispatch(bagActions.addToBag(item.id));
  }

  const handleRemoveFromBag = ()=>{
    dispatch(bagActions.removeFromBag(item.id));
  }
  return (
    <div className="item-container  shadow-sm p-3">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? <button type="button" className="btn-add-bag btn btn-danger" onClick={handleRemoveFromBag} ><RiDeleteBin6Fill /> Remove from Bag</button> : <button type="button" className="btn-add-bag btn btn-success" onClick={handleAddToBag}><IoBagAddSharp /> Add to Bag</button> }
      
      
    </div>
  )
}

export default HomeItem
