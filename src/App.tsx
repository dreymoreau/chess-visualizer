import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar  from "./pages/NavBar";
import  HomePage  from "./pages/HomePage";
import About from "./pages/About";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
