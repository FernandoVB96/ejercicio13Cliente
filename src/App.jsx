import './App.css';
import CardContainer from './components/CardContainer';

function App() {
  return (
      <CardContainer>
        <div className="card" style={{ backgroundColor: 'blue' }}>Card 1</div>
        <div className="card" style={{ backgroundColor: 'red' }}>Card 2</div>
        <div className="card" style={{ backgroundColor: 'green' }}>Card 3</div>
        <div className="card" style={{ backgroundColor: 'yellow' }}>Card 4</div>
      </CardContainer>
  );
}

export default App;