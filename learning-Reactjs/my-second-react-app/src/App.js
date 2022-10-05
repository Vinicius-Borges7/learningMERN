import logo from './logo.svg';
import './App.css';
import Teste from './components/teste';
import Mood from './components/mood';
import Profile from './components/profile';

function App() {
  const name = "michael jackson";
  const mood = "rusbé B-)";

  return (
    <div className="App">
      <div className='littleguy'>
        <div> {/* test 01 */}
          <Teste/> 
        </div>

        <div className='littleguy'> {/* test 02 */}
          <Mood name="Jorge" mood="happy :D"/>
          <Mood name="Maria" mood="sad :("/>
          <Mood name="jonatan" mood="angry >:("/>
          <Mood name={name} mood={mood}/>
        </div>    

        <div> {/* test 03 */}
          <Profile name={name} age="20" phone="12345" email="gmail.com"/>
        </div>

      </div>
    </div>
      
  );
}

export default App;
