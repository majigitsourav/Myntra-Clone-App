import BagItem from '../components/BagItem';
import BagSummary from '../components/BagSummary'
import {useSelector} from "react-redux";
import NoItemInBag from '../components/NoItemInBag';

const Bag = () => {

  const bagItems = useSelector(store => store.bag);
  const items = useSelector(store => store.items);

  const finalItems = items.filter((item)=>{
    const itemIndex = bagItems.indexOf(item.id);
    if(itemIndex >= 0){
      return true;
    }else{
      return false;
    }
  });
  
  //console.log(bagItems);
 
  return (
      <main className="p-5">
        <div className="bag-page">
          <div className="bag-items-container"> 

            {finalItems.map(item => <BagItem item={item}/> )}  
            
          </div>
          {finalItems.length === 0 ? <NoItemInBag/> : <BagSummary/>}
        </div>
      </main>
  )
}

export default Bag
