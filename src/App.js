import "./App.css";
import Dashboard from "./components/Dashboard";
import DefaultLayout from "./layout/DefaultLayout";
import Addticket from "./pages/Addticket";
import Entry from "./pages/Entry";
import TicketLists from "./pages/TicketLists";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <Addticket /> */}
        <TicketLists />
      </DefaultLayout>
    </div>
  );
}

export default App;
