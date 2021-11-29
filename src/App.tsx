import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ];
  return (
    <div className="App">
      <Greet isLoggedIn={true} messageCount={10} name="Andrew" />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Oscar>
        <Heading>Oscar goes to London</Heading>
      </Oscar>
    </div>
  );
}

export default App;
