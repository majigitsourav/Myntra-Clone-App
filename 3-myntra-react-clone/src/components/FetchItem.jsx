import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { itemsActions } from '../store/itemsSlice';
import { fetchStatusActions } from '../store/fetchStatusSlice';
const FetchItem = () => {
  const fetchStatus = useSelector(store => store.fetchStatus);
 // console.log(fetchStatus);
 const dispatch = useDispatch();
 //console.log(fetchStatus);
 useEffect(()=>{
   if(fetchStatus.fetchDone) return;

   const controller = new AbortController();
   const signal = controller.signal;

   dispatch(fetchStatusActions.markFetchingStarted());
   fetch("http://localhost:8080/items",{signal})
   .then((res)=>res.json())
   .then(({items})=>{
    dispatch(fetchStatusActions.markFetchDone()); 
    dispatch(fetchStatusActions.markFetchingFinished())
    dispatch(itemsActions.addInitialItems(items[0]));
    //console.log("Items fetched : ",items[0]);
   });
   return ()=>{
   // console.log("Cleaning up UseEffect.");
    controller.abort();
   };

 },[fetchStatus]);
  return (
    <>
      {/* This headless component it is only used for logic  */}
       
    </>
  )
}

export default FetchItem
