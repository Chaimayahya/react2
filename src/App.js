
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from './composants/name';
import Description from './composants/description';
import Image from './composants/image';
import Price from './composants/price';


function App() {
  var name="chaima"
  return (
   <div className='main'>
      <Card style={{ width: '18rem' }}>
         {name !== "" && <Image/>}
        
         <Card.Body>
         <Card.Title> <Name/> </Card.Title>
         <Card.Text>
        <Price/>
        <Description/>
        </Card.Text>
        <Button id='Button' >Go somewhere</Button>
      </Card.Body>
    </Card>
    <h3>{name === "" ? "Saaalemo Alaykom" : `Bonjour ${name}`}</h3>



   </div> 
      
  );
}

export default App;
