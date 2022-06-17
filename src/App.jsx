import './App.scss';
import { SlideShowData, SlideShowData2, SlideShowData3 } from './components/SlideShowData';
import   SlideShow  from './components/SlideShow';

function App() {
  return (
    <div className="App">
     <SlideShow datos={SlideShowData} showSlideBar={true} colorSlideBar={'#09f'}/>
     <SlideShow datos={SlideShowData2} showSlideBar/>
    <SlideShow datos={SlideShowData3} showSlideBar colorSlideBar={'green'}/>
    </div>
  );
}

export default App;
