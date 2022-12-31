import {Router, RouterProvider} from "react-router-dom";
import router from "./components/Route/Router";


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
