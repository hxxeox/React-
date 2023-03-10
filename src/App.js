import './App.css';
import ClassComponent2 from './components/2-4Props/Extraction/2-6 LifyCycle/ClassComponent';
import Extraction from './components/2-4Props/Extraction/Extraction'
import Composition from './components/2-4Props/Composition'
import ClassComponent from './components/2-4Props/Extraction/2-5 State/ClassComponent';
import FunctionalComponent from './components/2-4Props/Extraction/2-5 State/FunctionalComponent';
import Event from './components/2-4Props/Extraction/2-7 Event/Event';
import Condition from './components/2-4Props/Extraction/2-8 ConditionalRendering/Condition';
import List from './components/2-4Props/Extraction/2-9 List/List';
import ControlledComponent from './components/2-4Props/Extraction/2-10 Form/ControlledComponent';
import UncontrolledComponent from './components/2-4Props/Extraction/2-10 Form/UncontrolledComponent';
import State from './components/2-4Props/Extraction/3-3 Hook/State';
import Reducer from './components/2-4Props/Extraction/3-3 Hook/Reducer';
import WelcomeDialog from './components/2-4Props/Extraction/3-5 Composition/WelcomeDialog';

function App() {
  return (
    <div className="App">
      <WelcomeDialog />
      {/* <br />
      <br />
      <State />
      <br />
      <br />
      <Reducer /> */}
      {/* <UncontrolledComponent /> */}
      {/* <ControlledComponent /> */}
      {/* <List /> */}
      {/* <Condition /> */}
      {/* <Event /> */}
      {/* <ClassComponent2 /> */}
      {/* <FunctionalComponent />
      <ClassComponent />
      <Composition />
      <Extraction /> */}
    </div>
  );
}

export default App;
