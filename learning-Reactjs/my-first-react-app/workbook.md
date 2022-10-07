# Sumário

- 1 ........................................ Oque é React.js?
- 2 ........................................ Como criar um projeto template
- 3 ........................................ JSX
- 4 ........................................ Componentes
   - 4.1 ....................... Import
   - 4.2 ....................... Componente App
   - 4.4 ....................... Props
      - 4.4.1 ...... PropTypes
- 5 ........................................ CSS   
- 6 ........................................ Fragmentos React
---

## 1 - Oque é React.js?
---
React.js foi primordialmente um framework da Facebook que existia afim de facilitar a programação do frontend, mas com o tempo seu uso foi liberado ao público externo. O ponto principal deste "facilitador" claramente é a possibilidade de usar JavaScript para formatar de forma muito mais dinamica a parte visual e estética da aplicação.

## 2 - Como criar um projeto template
---
Basta digitar no terminal

````CMD
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

## 4.1 Import
Para usar um componente você primeiro precisa importar-lo de onde quer que ele esteja da seguinte forma:
````js
import QualquerCoisa from 'path/componente';
````
mas lembre-se sempre de que a inicial da variavel "QualquerCoisa" **SEMPRE** deverá ser **MÁIUSCULA**, não que vá causar erros mas caso você queira criar uma ""tag html"" própia, você precisará obedecer isto, Aliás sobre esse negócio de tag própia...

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
````js
import teste from './components/teste';

function App() {
  return (
    <div className="App">
      <div>
        {teste}
      </div>
    </div>
  );
}

export default App;
````

## 4.2 - Componente app
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

## 4.4 - Props

Os componentes por definição tem uma direção fixa a qual os valores fluem, não importa oque aconteça, os pais sempre vão passar os seus valores a seu filho, este que pode passar para seu filho e assim por diante, mas um filho jamais conseguirá passar quaisquer valor a seus ancestrais. veja a seguinte situação:
````HTML
<div id="1">
  <div id="2">
    <div id="3">
      <h1> :D </h1>
    </div>
  </div>
</div>      
````
caso você queira que o div 1 passe um valor ao div 3, você precisaria que a informação fosse primeiro passada do 1 ao 2 para assim passar do 2 ao 3, pode parecer tosco mas em um frontend um pouco maiorzinho isso pode se tornar uma várzea, E para ludibriar isto nasceram as props. 

````JS
import Component from 'path/component.js';

<div id="1">
  <div id="2">
    <div id="3">
      <Component fruit="banana"/>
    </div>
  </div>
</div>      
````
````js
function Component(props){
  return(
      <p>i love {props.fruit}</p>
  )
}

export default Component;
````
ou
````JS

function Component({fruit}){
  return(
      <p>i love {fruit}</p>
  )
}

export default Component;
````
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

## 6 - Fragmentos React.js
-----
Permite a inserção de tags sem a necessidade de um pai, muito bom para descomplicar o DOM já que com isso você poderia invocar tags soltas aos ventos sem problema algum

para usar o fragment basta por o orfão entre <> e </>, como a seguir
````js
<>
  <h1> eu so orfão :( </h1>
</>
````
com apenas isto o react já entende que você está usando um fragmento, simples e pratico.
