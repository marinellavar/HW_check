import './App.css';
import image from './books.jpg';
import { Checklist } from './checkList';
import imageTwo from './chek.jpg';

function App() {
  return (
    <div className='app'>
      <div className='conteiner'>
      <img src ={ image } width = '200px' alt = 'books'/>
      </div>
      <div className='conteiner'>
      <h1>Homework checklist</h1>
      </div>
      <Checklist/>     
      <div className='conteiner'>
      <img className='imgTwo' src ={ imageTwo} width = '200px' alt = 'check'/>
      </div>
    </div>
  );
}

export default App;
