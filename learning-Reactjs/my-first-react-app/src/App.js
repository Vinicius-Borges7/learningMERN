import './App.css';
import Teste from './components/teste';
import Mood from './components/mood';
import Profile from './components/profile';
import Styles from './css/teste.module.css';
import Proprop from './components/proptyped';

function App() {
  const name = "michael jackson";
  const mood = "rusbé B-)";

  return (
    <div className="App">
      <div className={Styles.littleguy}>
        <> {/* test 01 */}
          <Teste/> 
        </>

        <div className={Styles.littleguy}> {/* test 02 */}
          <Mood name="Jorge" mood="happy :D"/>
          <Mood name="Maria" mood="sad :("/>
          <Mood name="jonatan" mood="angry >:("/>
          <Mood name={name} mood={mood}/>
        </div>    

        <> {/* test 03 */}
          <Profile name={name} age="20" phone="12345" email="gmail.com"/>
        </>

        <> {/* test 04 */}
          <Proprop age='junyper'/>
        </>
      </div>
    </div>
      
  );
}

export default App;
