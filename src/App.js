import './App.css';
// import Components from 
// './lessons/Components'
import LifeCycle from './lessons/LifeCycle';
import Container from './components/Container'
import Counter from './lessons/Counter';
import MobileUI from './lessons/MobileUI';
import SwitchButton from './components/SwitchButton';
function App() {
  return (
    <div className="App">
    {/*<Components />*/}
    <Container reverse='false' title='LifeCycle Tutorial'>
    <LifeCycle />
    </Container>
    <Container reverse={true} title='Counter App'>
      <Counter />
    </Container>
    <Container title='A switch input'>
    <MobileUI
     fabOnClick={false}
     title='Create a switch input'
     >
     <SwitchButton />
     </MobileUI>
  </Container>
    </div>
  );
}

export default App;
