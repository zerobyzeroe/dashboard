// import logo from './logo.svg';
import './App.css';
import Dashbo from './components/Dashbo';
import Dashboard from './components/Dashboard';
import Dashi from './components/Dashi';
import Gettingstart from './components/Gettingstart';
import Home from './components/Home';
import Itsme from './components/Itsme';
import Myfeed from './components/Myfeed';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<>
      <div className='float-left '><Sidebar/>
      </div>
      <div className="flex flex-col">
      <Navbar title={'Home'}/>
      <Home/>
      </div>
      </>
    },
    {
      path:"/dashboard",
      element:<>
      <div className='float-left '><Sidebar/>
      </div>
      <div className="flex flex-col">
      <Navbar title={'Dashboard'}/>

      <Dashboard/>
      </div>
      </>
    },
    {
      path:"/myprivatechannel/gettingstarted",
      element:<>
      <div className='float-left '><Sidebar/>
      </div>
      <div className="flex flex-col">
      <Navbar title={'My Private Channel / Getting Started'}/>
      <Gettingstart/>
      </div>
      </>
    },
    {
      path:"/myprivatechannel/itsme",
      element:<>
      <div className='float-left '><Sidebar/>
      </div>
      <div className="flex flex-col">
      <Navbar title={'My Private Channel / Its me'}/>
      <Itsme/>
      </div>
      </>
    },
    {
      path:"/myprivatechannel/myfeed",
      element:<>
      <div className='float-left '><Sidebar/>
      </div>
      <div className="flex flex-col">
      <Navbar title={'My Private Channel / My Feed'}/>
      <Myfeed/>
      </div>
      </>
    },
    {
      path:"/dashboard7",
      element:<>
      <div className='float-left '><Sidebar/>
      </div>
      <div className="flex flex-col">
      <Navbar title={'Dashboard 7'}/>
      <Dashbo/>
      </div>
      </>
    },
    {
      path:"/dashboard8",
      element:<>
      <div className='float-left '><Sidebar/>
      </div>
      <div className="flex flex-col">
      <Navbar title={'Dashboard 8'}/>
      <Dashi/>
      </div>
      </>
    },

  ])
  return (
    <>
    
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
