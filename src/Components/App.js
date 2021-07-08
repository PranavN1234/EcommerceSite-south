import "../Styles/App.css";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import Home from "./Home";
import Payment from "./Payment";
import Orders from "./Orders";
import Addproduct from "./Addproduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "../Firebase";
import { useStateValue } from "../StateProvider";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51J9GZMKts81N0x0JExVAAOZG5OWJTUmCovHGhuHK6SLJod7c5R4eVjn7i1D0kxaeA2v13JjcKrRXkdL7pYQzu8XD00SJsSq33T"
);

function App() {
  const [{}, dispatch] = useStateValue();
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  const updateSearchItem = (data) => {
    setSearchItem(data);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header searchFill={updateSearchItem} />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header searchFill={updateSearchItem} />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header searchFill={updateSearchItem} />
            <Orders />
          </Route>
          <Route path="/addProduct">
            <Addproduct />
          </Route>
          <Route path="/">
            <Header searchFill={updateSearchItem} />
            <Home searchItem={searchItem} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
