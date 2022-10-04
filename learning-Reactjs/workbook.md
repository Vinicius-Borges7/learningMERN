# Sumário
- 1 ........................................ Oque é React.js?
- 2 ........................................ Como criar um projeto template
- 3 ........................................ JSX
- 4 ........................................ Componentes
   - 4.1 ....................... Import
   - 4.2 ....................... Componente App
   - 4.3 ....................... Folhas de estilo
   
# 

## 1 - Oque é React.js?
React.js foi primordialmente um framework da Facebook que existia afim de facilitar a programação do frontend, mas com o tempo seu uso foi liberado ao público externo. O ponto principal deste "facilitador" claramente é a possibilidade de usar JavaScript para formatar de forma muito mais dinamica a parte visual e estética da aplicação.

## 2 - Como criar um projeto template
Basta digitar no terminal

````CMD
npx create-react-app my-app

cd my-app

npm start
````
## 3 - JSX
JSX é uma forma mais humana para se escrever ""códigos react"", pois ele é um tranpilador que transforma as grosserias do JS em algo mais amigável, sendo sua nova formatação semelhante a do HTML, no geral e de forma pratica nós não precisamos nos importar tanto com isso, pelo menos por agora.

## 4 - Componentes
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

## 4.3 - Folhas de estilo
Tendo em mente que não estamos de fato num arquivo HTML, para trazer um CSS para cá por exemplo, basta importamos o arquivo
````js
import 'path/muitoEstilo.css';
````
mas cuidado, para usar uma classe você deve usar `ClassName=""` como a seguir:
````html
<div className="App">
    jorge
</div>
````