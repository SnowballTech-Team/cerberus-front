import * as React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomeLayout } from "./components/HomeLayout";
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
    <div>
      <HomeLayout />
    </div>
  );
}

export default App;
