import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Addticket from "./pages/Addticket";
import Entry from "./pages/Entry";
import Ticket from "./pages/Ticket";
import TicketLists from "./pages/TicketLists";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Entry />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/addticket">
          <Addticket />
        </PrivateRoute>
        <PrivateRoute path="/tickets">
          <TicketLists />
        </PrivateRoute>
        <PrivateRoute path="/ticket/:tid">
          <Ticket />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
