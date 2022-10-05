import logo from './logo.svg';
import './App.css';
import Teste from './components/teste';
import Mood from './components/mood';

function App() {
  const name = "michael jackson";
  const mood = "rusbé B-)";

  return (
    <div className="App">
      <div className='littleguy'>
        <div>
          <Teste/>
        </div>  
        <div className='littleguy'>
          <Mood name="Jorge" mood="happy :D"/>
          <Mood name="Maria" mood="sad :("/>
          <Mood name="jonatan" mood="angry >:("/>
          <Mood name={name} mood={mood}/>
        </div>
      </div>  
    </div>
  );
}

export default App;
