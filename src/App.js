import './App.css';
import Mensaje from'./mensaje.js'

const App =() => {

  return (
    <div className="App">
      <Mensaje color= "red" message="Estamos Trabajando"/>
      <Mensaje color= "green" message="En un curso"/>
      <Mensaje color= "yellow" message="De React"/>
    </div>
    
  );
}

export default App;
