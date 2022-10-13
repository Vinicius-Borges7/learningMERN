# Summary

- 1 ........................................ What is React.js?
  - 1.5 ........................ General Rules
- 2 ........................................ How to Create a Sample Project
- 3 ........................................ Components
   - 3.1 ....................... Import
   - 3.2 ....................... Component App
   - 3.3 ....................... Orphans (React Fragments)
   - 3.4 ....................... Props
- 4 ........................................ React useState   
- 5 ........................................ CSS
---

## 1 - What is React.js?
---
React.js foi primordialmente um framework da Facebook que existia afim de facilitar a programação do frontend, mas com o tempo seu uso foi liberado ao público externo. O ponto principal deste "facilitador" claramente é a possibilidade de usar JavaScript para formatar de forma muito mais dinamica a parte visual e estética da aplicação.

React.js was primarily a Facebook's framework that existed in order to facilitate frontend programming, but somentime it was released to public The main point of this lib is clearly the possibility of using JavaScript to do the visual part of frontend.

### 1.5 - General Rules
I -> In React, everthing is one component

II -> All components **must** return **just one** Father with his sons.



## 2 - How to Create a Sample Project
---
just write on terminal...

````cmd
npx create-react-app my-app

cd my-app

npm start
````
## 3 - Components
---
Components ultilities can be compared with js modules, you store it in somewhere and then import it on the main code.

but all components **must** return something, generally a JSX's "html" estructure, ignoring this won't cause errors, but it won't work either.
### 3.1 Import
this is the syntax to import some component:
````js
import Something from 'path/component';
````
but remember this, if you want to use your component like a HTML's "personalizated" tag, the first letter of the var name need to be on upercase.

and to summom your tag just do this:
````HTML
<Something/>
````
or
````html
<Something></Something>
````
if you didnt used upercase on import variable, you can summon it like this:
````HTML
{something}
````
so, here is a general example of a react code:
````js
import Test from './components/test';

function App() {
  return (
    <div className="App">
      <div>
        <Test/> 
      </div>
    </div>
  );
}

export default App;
````

### 3.2 - Component app
By convention, here go the componentes that will compose the DOM because App will be imported by index.js and create the DOM.
`````js
function App() {
  return (
    <div className="App">
      <div>
        <Test/>
      </div>
    </div>
  );
}
``````

### 3.3 - Orphans (React Fragments)
do you remember that rule that forces us to have a parent and its children in the component? there is a way to circumvent the rule using the so-called _React Fragments_, for that just wrap the orphan between the <> and </> tags.
````js
function anything() {
  return (
    <>
      <p>I am a orphan :(, my dad is just condiderated by react, but he will be ignorated in the time to do the DOM page</p>
    </>
  );
}

export default anything;
````

### 3.4 - Props
props are for passing a value from a parent to a child
````js
import Test from "path/test"

function App() {
  let name = "Jorge";

  return (
    <div className="App">
      <div>
        <Test myName={name}/>
      </div>
    </div>
  );
}
````
````js
function Test(props){
  return(
    <p>my name is {props.myName}</p>
  );
}

exports default Test;
````
oe using destructuring (most recomended):
````js
import Test from "path/test";

function App() {
  let name = "Jorge";

  return (
    <div className="App">
      <div>
        <Teste myName={name}/>
      </div>
    </div>
  );
}
````
````js
function Test({myName}){
  return(
    <p>my name is {myName}</p>
  );
}

export default Test;
````
## 4 - React UseState
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

## 5 - CSS
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
eu pessoalmente detesto esta técnica, o modelo batizado como "CSS Monolíto" talvez seja de fato mais prático mas num app um pouco maior se torna algo nojento, não acho ter que cavocar oque você quer num CSS de mais de 3000 linhas algo sáudavel, mas isso existe e é assim que se faz. Mas para usar da forma que eu gosto (vários arquivos CSS) basta importa-los e usar normalmente
````js
import Styles from './css/nomeDoArquivo';
````
obviamente o trabalho braçal é muito maior, mas acho que é um sacrifício válido para ter um código mais saudável.