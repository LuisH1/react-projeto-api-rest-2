import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [resposta, setResposta] = useState([]);
  const [cep, setCep] = useState("");
  const [button, setButton] = useState(false);


  useEffect(() => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((resp) => setResposta(resp.data))
    .catch((error) => console.log(error))
  }, [button, cep] )

  return (
    <div className="App">
      <input type="number" onChange={(e) => {
        setCep(e.target.value)
      }} />
      <button onClick={() => {
        button ? setButton(false) : setButton(true)
      }}>Buscar</button>
      <div class="container">
        <p>{resposta?.cep}</p>
        <p>{resposta?.logradouro}</p>
        <p>{resposta?.bairro}</p>
      </div>
      <div class="container">
        <p>{resposta?.uf}</p>
        <p>{resposta?.localidade}</p>
        <p>{resposta?.ddd}</p>
      </div>
    </div>
  );
}

export default App;