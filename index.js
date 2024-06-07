// Declaração de constante que recebem os pacotes instalados
const { Board, led } = require(' johnny-five ')
const espress = require(' espress ')

// Aqui, é criada uma constante que simula uma placa arduino
const board = new Board()

// Função que inicia(liza os elementos da placa Arduino
board.on(' ready ', () => {

})

// Definimos qual é a porta do Arduino conectada ao led
const led = new Led(11)

// Cria uma constante que recebe a biblioteca Espress do JavaScript
const app = espress()

// Cria a rota principal para buscar o arquivo index.html
app.get('/', (req, res) => {

// Develve o caminho do arquivo index.html
res.sendFile(' index.html '. { root:})
})