import './App.scss';
import { SlideShowData, SlideShowData2 } from './components/SlideShowData';
import  SlideShow  from './components/SlideShow';

function App() {
  return (
    <div className="App">
     <SlideShow datos={SlideShowData}/>
     <SlideShow datos={SlideShowData2}/>
    </div>
  );
}

export default App;
