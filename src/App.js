import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';

function App() {
  return (
    <>
     <Navbar title = 'ReactLearn' about = 'About ReactLearn'/>
     <div className="container">
     <TextForm heading = "Enter The Text For Analyze"/>
     </div>
     
    </>
  );
}

export default App;
