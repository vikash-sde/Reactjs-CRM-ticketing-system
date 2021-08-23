import "./App.css";
import Dashboard from "./components/Dashboard";
import DefaultLayout from "./layout/DefaultLayout";
import Entry from "./pages/Entry";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
