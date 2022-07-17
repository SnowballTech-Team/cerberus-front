import * as React from "react";
import { Home } from "./pages/Home";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { HomeLayout} from "./components/HomeLayout"
function App() {
  return (
    // <Router>
    //   <Route exact path="/">
    //     <HomeLayout>
    //       <Home/>
    //     </HomeLayout>
    //   </Route>
    //   <Route path="/home" component={Home}/>
    // </Router>
    <div><Home/></div>
  );
}

export default App;
