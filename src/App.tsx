import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

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
      <Button handleClick={(e, id) => console.log('Button click', e, id)} />
      <Input value="" handleChange={(e) => console.log(e)} />
      <Container styles={{ border: '1px solid red', padding: '1rem' }} />
    </div>
  );
}

export default App;
