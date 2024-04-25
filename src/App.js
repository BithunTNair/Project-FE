
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Routing from './Components/Routing';
import Loader from './Components/Common/Loader/Loader'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <div className="App" >
    <>
    <ToastContainer />
    {/* <Loader/> */}
    <Routing/>
   
 
    </>
    </div>
  );
}

export default App;
