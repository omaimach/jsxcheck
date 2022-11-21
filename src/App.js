import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FullName from "./components/Profile/FullName";
import Address from "./components/Profile/Address";
import ProfilePhoto from "./components/Profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <FullName />
      <Address />
      <ProfilePhoto />
    </div>
  );
}

export default App;
