import './App.css';
import SideBar from './components/SideBar';
import CenterPage from "./components/CenterPage";

function App() {
  return (
    <div className="App w-full min-h-screen pt-3 pl-3 bg-gray-100">
        <SideBar />
        <CenterPage />
    </div>
  );
}

export default App;
