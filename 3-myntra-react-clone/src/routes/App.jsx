import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import FetchItem from '../components/FetchItem';
import LoadingSpinner from '../components/LoadingSpinner';
import { useSelector } from 'react-redux';
function App() {

 const fetchStatus  = useSelector((store)=>store.fetchStatus);

  return (
    <>
      <Header/>
      <FetchItem/>
      {fetchStatus.currentlyFetching ? <LoadingSpinner/>:<Outlet/>}  
      <Footer/>
     
      
    </>
  );
}

export default App;
