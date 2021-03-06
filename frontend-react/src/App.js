import React from "react";
import { Route, Link, BrowserRouter} from "react-router-dom";

// import Home from "./Home";
import UserLogin from "./components/UserLogin";
import UserSignUp from "./components/UserSignUp";
import PlantForm from "./components/PlantForm";
import PlantList from "./components/PlantList";

//unit3 react
import PrivateRoute from './Unit3-React-Folder/PrivateRoute';
import HomePage from './Unit3-React-Folder/components/home-page';
//unit3 react ^^^^

import "./App.css";
import "./index.css";


function App() {

  // const [plantList, setPlantList] = useState([]);

  // const addPlant = plant => {
  //   setPlantList([...plantList, plant]);
  //   console.log('done');
  // };

  // const removePlant = plant => {
  //   setPlantList(plantList.filter(item => item.plantName !== plant.plantName));
  // };

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/">
          <button>About</button>
        </Link>

       <Link to="/UserLogin">
        <button>LogIn</button>
      </Link>

      <PrivateRoute path='/home-page' component={HomePage} />

        <Link to="/Register">
          <button>Sign Up</button>
        </Link>

        <Link to="/PlantForm">
          <button>Add your plant!</button>
        </Link>
    
         <Link to="/PlantList">
        <button>Your Plants</button>
        </Link>

      {/* <Route exact path="/" components={Home} /> */}
      <Route path="/UserLogin" component={UserLogin} />
      <Route path="/Register" component={UserSignUp} />
     
      <Route path="/PlantForm" component={PlantForm} />
      
      <Route path="/PlantList" component={PlantList} />
   
      </div>
    </BrowserRouter>
  );
}

export default App;
