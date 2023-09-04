
import { useState } from 'react';

function Titulo(obj) {
    // para utilizar o useState, deve criar um array com uma variável e uma função, atribuindo a ambas o valor que está na função useState(), que nesse caso é zero. 
    let [salario, setSalario] = useState(0);
    return (
        <div>
            {<h2 style={{color:obj.cor}}>{obj.nome} tem {obj.idade} anos e recebe R$ {obj.salario ? obj.salario : salario},00 </h2> /*operador ternário*/}
            <button onClick={() => {
                salario += 100;
                //aqui no botão, é passado o novo valor de salario para a função setSalario, que será atualizado na página.
                setSalario(salario)
            }}>+ Salário</button>
            <input type="text" onChange={(e) => setSalario(parseInt(e.target.value))} placeholder='Valor do salário'/>
        </div>
    )
        
}

export default Titulo;