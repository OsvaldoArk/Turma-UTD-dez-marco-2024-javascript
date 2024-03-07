import Card from './components/Card';
import './App.css'
import { useState } from 'react';

function App() {
  
  const [objeto,setObjeto] = useState({
    nome:'estado',
    data:'05/03/2024',
    descricao: 'Descrição detalhada do card. Etc, etc, etc, etc...'
  });

  const [mod, setMod] = useState(objeto);

  const handleMod = (evento)=>{
    const {value,name}= evento.target;

    setMod({
      ...mod,
      [name]:value
    });
  }
  
  const handleObjeto = (evento) => {
    evento.preventDefault();

    setObjeto(mod);
  }

  const {nome, data, descricao} = mod;
  
  return (
    <>
      <form action="#" onSubmit={handleObjeto}>
        <input type="text" 
               name="nome"
               id=""
               value={nome}
               onChange={handleMod}
               />
        <input type="text" 
               name="data"
               id=""
               value={data}
               onChange={handleMod}
               />
        <input type="text" 
               name="descricao"
               id=""
               value={descricao}
               onChange={handleMod}
               />
        <button type="submit">enviar</button>
      </form>
      <br />
      <Card propriedade={objeto} />
    </>
  );
}

export default App
