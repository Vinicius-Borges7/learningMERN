# Sumário

- 1 ........................................ Oque é React.js?
  - 1.5 ........................ Leis gerais
- 2 ........................................ Como criar um projeto template
- 3 ........................................ JSX
- 4 ........................................ Componentes
   - 4.1 ....................... Import
   - 4.2 ....................... Componente App
   - 4.3 ....................... Orfãos (React Fragments)
   - 4.4 ....................... Props
      - 4.4.1 ...... PropTypes
- 5 ........................................ CSS   
- 6 ........................................ Fragmentos React
---

## 1 - Oque é React.js?
---
React.js foi primordialmente um framework da Facebook que existia afim de facilitar a programação do frontend, mas com o tempo seu uso foi liberado ao público externo. O ponto principal deste "facilitador" claramente é a possibilidade de usar JavaScript para formatar de forma muito mais dinamica a parte visual e estética da aplicação.

### 1.5 - Leis gerais
I -> No react, tudo são componentes.

II -> Todo componente deve retornar 1 elemento pai com mais elementos dentro, nem mais nem menos



## 2 - Como criar um projeto template
---
Basta digitar no terminal

````powershell
npx create-react-app my-app

cd my-app

npm start
````
## 3 - JSX
---
JSX é uma forma mais humana para se escrever ""códigos react"", pois ele é um tranpilador que transforma as grosserias do JS em algo mais amigável, sendo sua nova formatação semelhante a do HTML, no geral e de forma pratica nós não precisamos nos importar tanto com isso, pelo menos por agora.

## 4 - Componentes
---
**T U D O** no react **É** um componente, absolutamente tudo! e todo componente é uma função JS. Um componente pode ser comparado com um módulo, na pratica "um chama o outro" para que no fim o código se crie, é uma ótima forma de organizar e fragmentar o código lembrando muito sistema de classes do Java.

Mas um ponto super importante é a necessidade de todos componentes retornarem seus valores e isso deve ser respeitada, caso contrário não resultará em erros mas também não vai funcionar.

### 4.1 Import
Para usar um componente você primeiro precisa importar-lo de onde quer que ele esteja da seguinte forma:
````js
import QualquerCoisa from 'path/componente';
````
mas lembre-se sempre de que a inicial da variavel "QualquerCoisa" **SEMPRE** deverá ser **MÁIUSCULA**, não que vá causar erros mas caso você queira criar uma ""tag html"" própia você precisará obedecer isto, Aliás sobre esse negócio de tag própia...

````HTML
<QualquerCoisa/>
````
caso você use o nome da variável **do jeito certo** isso será possível. O efeito do comando é simplesmente executar o componente, outra forma de fazer o mesmo seria assim:
````HTML
{QualquerCoisa}
````
a seguir um exemplo da iplementação de ambos códigos para que fique mais claro em sua cabeça:
````js
import Teste from './components/teste';

function App() {
  return (
    <div className="App">
      <div>
        <Teste/> 
      </div>
    </div>
  );
}

export default App;
````

### 4.2 - Componente app
Por convenção, é onde todos os outros componentes devem desaguar, pois este envia seus valores ao index para finalmente a obra de arte ser imprimida na tela.

`````js
function App() {
  return (
    <div className="App">
      <div>
        <Teste/>
      </div>
    </div>
  );
}
``````

### 4.3 - Orfãos (React Fragments)
lembra daquele lei sobre o componente obrigatóriamente precisar retornar um elemento pai? existe uma forma de ludibriar a regra usando os chamados _React Fragments_, isto é envolver o orfão entre as tags <> e </>.

````js
function qualquerCoisa() {
  return (
    <>
      <p>eu sou um orfão, meu "pai" só existe para o react, ele será dado como inexiste na hora de compor a página</p>
    </>
  );
}

export default qualquerCoisa;
````

### 4.4 - Props
props servem para um pai passar algum valor ao seu filho.
````js
import Teste from "path/teste"

function App() {
  let name = "Jorge";

  return (
    <div className="App">
      <div>
        <Teste nome={name}/>
      </div>
    </div>
  );
}
````
````js
function Teste(props){
  return(
    <p>meu nome é {props.nome}</p>
  );
}

exports default Teste;
````
ou usando desestruturação (o mais recomendado):
````js
import Teste from "path/teste"

function App() {
  let name = "Jorge";

  return (
    <div className="App">
      <div>
        <Teste nome={name}/>
      </div>
    </div>
  );
}
````
````js
function Teste({nome}){
  return(
    <p>meu nome é {nome}</p>
  );
}

export default Teste;
````
## 5 - React UseState
----
o usestate é uma das coisas mais importantes para uma jornada sáudavel no react, pois ele é a parte principal da lib, é a parte que cuida da reatividade.

observe o exemplo:
````js
import SayMyName from "path/sayMyName"

function App() {
return (
    <div className="App">
      <div>
        <SayMyName/>
      </div>
    </div>
  );
}
````
````js
function sayMyName(){
  let name = "jorge";
  
  function changer(){
    name = "josias";
  }

  return(
    <h1>meu nome é {name}</h1>
    <button onClick={changer}>mudar nome</button>
  );
}

export default sayMyName;
````
no exemplo, o objetivo é imprimir na tela a palavra ``"jorge"`` e ao apertar o botão, o script substituí ``"jorge"`` por ``"josias"``. Porém assim como em qualquer outra linguagem isso é impossível pois o elemento já foi escrito, mesmo que sua variavel mude o elemento em si não mudará.

aí entra o principal diferencial do react! veja o código a seguir que usa o UseState.

````js
import SayMyName from "path/sayMyName"

function App() {
return (
    <div className="App">
      <div>
        <SayMyName/>
      </div>
    </div>
  );
}
````
````js
import React, { useState } from 'react';

function sayMyName(){
  const [ name, setName] = React.useState("jorge");
  
  function changer(){
    setName("josias");
  }

  return(
    <h1>meu nome é {name}</h1>
    <button onClick={changer}>mudar nome</button>
  );
}

export default sayMyName;
````
caso feito desta forma, após apertarmos o botão ele vai atualizar a váriavel e o DOM magicamente!

_sobre a sintaxe..._

as variaveis use state **sempre** serão consts mas mesmo assim elas podem ser modificadas posteriormente usando a função correta.

````js
const [ nomeDaVar, setNomeDaVar ] = React.useState("valor inicial da var");
````

nomeDaVar é o nome do novo useState, setNomeDaVar é a função que deve ser usada para alterar _dinamicamente/reativamente_ o valor de nomeDaVar. Como dito anteriormente as variaveis useState sempre serão consts e além disso é possível passar useStates como prop como se fosse uma var qualquer.

## 6 - CSS
----
`index.css` é a folha global de estilos, oque for escrito nela vai valer a todos componentes da aplicação. mas um ponto importante a se resaltar é que tanto no index.css quanto nos modulos css **NÃO SE PODE USAR "-" COMO PARTE DO NOME DE UMA CLASSE/ID**, isso pois caso não lembre estamos programando em JS, e caso na invocação do módulo apareça um "-", o JS vai tentar fazer uma subtração e vai quebrar o código

caso você queira adicionar um CSS, você deve _modularizar_ os css, para tal é usada uma técnica muito semelhante á usada na *_`props`_*, tudo é agrupado num unico objeto e a partir dele você extrai oque precisa.

para declarar um novo módulo CSS basta criar o nome do arquivo da seguinte forma:
````
nomeDoArquivo.module.css
````
simples assim, você acaba de criar um módulo CSS! para usa-lo basta digitar o código a seguir onde você quer que ele seja aplicado.
````js
import Styles from './css/nomeDoArquivo.module.css';
````
