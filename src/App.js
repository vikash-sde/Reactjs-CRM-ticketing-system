import "./App.css";
import Dashboard from "./components/Dashboard";
import DefaultLayout from "./layout/DefaultLayout";
import Addticket from "./pages/Addticket";
import Entry from "./pages/Entry";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <Addticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
