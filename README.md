# Jasmine

- Framework utilizdo na criação de testes em JS
- Emprega conceitos do BDD (Testes guiados por comportamento)
- Permite a criação de testes intuitivos
- Rapido e sem dependencias externas
- Executa os testes diretamente no navegador alem do terminal
- É de facil instalação e configuração
- Pode rodar independente ou com frameworks JavaScript (angular, react, node, ...)
- Possui um objeto chamado JS global `jasmine` que possui 5 comparadores genericos para utilização

**jasmine.any()**

- Usado para verificar se o valor é de um determinado tipo
- Pode ser usado para comprar valores reais ou valores utilizando spies (spy)
- Em spy é util quanndo se deseja verificar se um metodo foi chamado com um argumento de determinado tipo, sem se importar com o seu valor real

**jasmine.anything()**

- Verifica se um objeto é != de `null` ou `undefined`
- É similar ao `any` porem não verifica o tipo de dado
- Pode ser utilizado em `spies` para verificar que um determinado valor foi passado como parametro

**jasmine.objectContaining()**

- Verifica se determinada entrada (chave || valor) existe no objeto
- Recebe como parametro o bloco a ser verificado em um objeto
- Deve ser usado com Ojbetos {}

**jasmine.arrayContaining()**

- Verifica se determinados valores existem em um array
- Recebe como parametro um arrau com valores a serem verificados

**jasmine.stringMatching()**

- Verifica se uma string está contida dentro de outra string
- Tem suporte a expressões regualres
- Pode ser utilizado com spies
- Recebe como parametro uma string ou expressao regular
- É case sensitive
- O case sensitive pode ser resolvido com expressao regular

**jasmine.clock()**

- Torna sincrono as chamadas do `setTimeout()` e `setInterval()`
- Deve sempre ser instalado antes das chamadas com a declaração `jasmine.clock().install()`
- Apos seu uso deve sempre ser removido ao termino da suite / teste com a declaração `jasmine.clock().uninstall()`
- Executa a operação de chamada com `jasmine.clock().tick` recebendo como parametro o numero de milisegundos
## Suites

- Servem para definir o escopo do que está sendo testado

- Uma aplicação normalmente possui varias suites de testes

- Uma suite é uma função global chamada  `describe` que possui dois parametros: uma descrição e os testes `spec`

- É a maior unidade de teste

## Testes (Spec)

- São os testes que validam uma suite de testes
- É uma função global JavaScript chamada `it`, que contem dois parametros , uma descriação e uma função

- No segundo parametro (função) é onde são realizadas as asserções (expectations), ou seja, é onde verificamos os comportamentos que estão sendo testados

- È uma boa pratica - assim como em outros mundos como o Java - que o primeiro parametro (descrição do teste) comece com DEVE, ou seja, o seu teste deve fazer algo


## Verificações (expectations)

- Servem para validar o resultado de um teste

- O Jasmine possui uma função global chamada `expect` que recebe um unico parametro como argumento, o qual é o resultado a ser verificado

- Deve ser utilizado em conjunto com uma comparação (`Matcher`), que conterá o valor a ser comparado

- Uma Spec pode conter uma ou mais verificações

- É uma boa pratica manter as verificações sempr eno final da função

## Comparações (Matchers)

- São funções que retornam um valor booleano para ser verificado através de uma expectation (verificação)

- O Jasmine possui diversos matchers implementados por padrão

- É possivel criar seu proprio matcher

- Todo matcher é negavel apartir de uma palavra chave not inserida entre uma expectation e um matcher

### Principais matchers

**toBe()**
- Realiza a comparação com o perador `===`, que compara valor e tipo do objeto

- Deve ser utilizado para comparar valores de forma mais efeitiva

**toEqual()**

- Realiza a compração do valor do elemento

- Seu uso é recomendado para comparação de valores literais (number, int. ..)

- É mais performatico em relação ao `toBe()`

**toMatch()**

- Realiza a comparação usando expressões regualres

- Caso seja passado uma string como parametro, o comparador tentará encontrar o texto passando dentro o valor a ser comparado

- Na compração com plain text ele é case sensitive

**toBeDefined()**

- Realiza a verificação de que se um objeto não está com valor `undefined`

- Por boa pratica deve-se usar o `toBeUndefined()` ao invez de `not.toBeDefined()`

**toBeUndefined()**

- Realiza a comparação de um objeto `undefined`

**toBeNull()**

- Realiza a comparação do objeto verificando se está `null`, usando `.not.` testa-se o contrario

- Uma variavel null é a quela que não possui um valor atribuido

- `null` != `undefined`

- Não recebe argumentos

**toBeTruthy()**

- Realiza uma compração dizendo se uma variavel ou objeto possui um valor valido

- Um valor é considerado valido se ele for diferente de `false`, `0`, `vazio ()`, `undefined`, `null` ou `NaN`

- Deve ser utilizado quando a verificação abordar valores invalidos distintos

- Possui o equivalente `toBeFalsy()` para a negação


**toBeFalsy()**

- Realiza a comparação para valores invalidos (os mesmos do toBeTruthy)

**toContain()**

- Realiza a busca por determinado item em um array
- Pode ser utilizado para buscar uma substring dentro de uma string
- Não suporta busca por expressões regualres

**toBeLessThan()**

- Compara se um valor numerico é menor que outro
- Realiza a conversão para valor numerico antes da comparação, podendo assim o valor ser passado no  formato texto (não quer dizer que seja extenso)
- É boa pratica usar `toBeGraterThan` ao inves de `not.toBeLessThan`
- É boa pratica usar o `toEqual` para avaliar valores iguais

**toBeGraterThan()**
- Compara se um valor numerocp é maior que outro


**toThrow()**

- Verifica se uma exceção é lançada por um metodo
- Não realiza a validação em detalhe do tipo da exceção lançada, apenas certifica que um erro ocorreu na execução da função
- Deve ser utilizada quando apenas deseja certificar que ocorreu um erro, sem se procupar qual foi seu tipo ou mensagem


**toThrowError()**

- Verifica se uma exceção é lançada por um metodo
- Valida o tipo de exceção lançada
- Valida a mensagem de erro contida na exceção
- Tem suporte a expressões regulares na validação da mensagem de erro da exceção
- Deve ser utilizada para maior controle do erro lançado
- É case sensitive


**Falhas manuais (fail)**

- Permite interomper um teste lançando um erro
- `fail()` quebra um teste de forma manual
- É util para verificar que uma operação desejada não seja executada


## Execuções antes e depois das suite

- Jasmine permite executar codigos antes e depois das suites com funções especiais
- Tem por objetivo reduzir as repetições de codigos
- Permite executar um mesmo codigo antes ou depois de cada suite
- Permite executar um mesmo codigo antes ou depois de cada teste

**beforeEach()**

- Função global que é executada antes de cada teste
- Serve para inicializar ou reiniciar um status
- Pode executar uma ação tambem antes de cada teste

**afterEach()**

- Função global que é executada depois de cada teste
- Serve para reiniciar um status
- Pode executar uma ação depois de cada teste

**beforeAll()**

- Função global executada uma unica vez antes de todos os testes
- Usado para inicalizar estados, criar objetos, etc

**afterAll()**
- Executa algo quando os testes acabam
- Por exemplo limpar um token do localStorage, deslogar um usuario, etc

## Aninhamento de suites

- Suites pode ser aninhanadas
- Os metodos de setup até podem ser escritos dentro dos aninhamentos, mas não funcionaram de acordo com seus principios

## Desabilitando suites

- Podem ser desabilitadas renomeando de `describe` para `xdescribe`
- Todo o seu conteudo fica pendente e não executado

## Desabilitando testes

- Assim como as suites, os testes podem ser desabilitados renomeando de `it` para `xit`
- Seram considerados inativos
- Pode ainda ser usado a fução `pending()` com o mesmo efeito
- É boa pratica usar o pending, pois esta função recebe uma string como parametro que serve para documentar a razão daquele teste estar desabilitado
- declarar o `it('')` sem a função tem o mesmo efeito

# Spies

- São objetos falsos (mock) utilizados quando queremos manipular algum retorno que não faça parte do teste em si
- São utilizados para isolar somente o bloco de codigo que estamos testando
- Somente poderaão ser criados dentro dos blocos `describe` e `it`
- São removidos ao termino da execução da suite

**spyOn()**

- Serve para criar um mock a ser utilizado nos testes
- A função spy recebe como parametros o nome do objeto e do metodo a serem utilizados como mock

**toHaveBeenCalled()**

- Serve para informar se um metodo do spy foi executado ao menos uma vez
- Não possui parametros

**toHaveBeenCalledTimes()**

- Uilizado para verificar quantas vezes o metodo do spy foi chamado
- Recebe como parametro o numero de execuções a ser verificado

**toHaveBeenCalledWith()**

- Serve para verificar com quais parametros um metodo do spy foi chamado
- Recebe como parametro os valores da chamada do metodo spy, separados por `,`
**and.callThrough()**

- Informa ao spy que o metodo original deve ser executado
- Deve ser aplicado ao metodo spy
- O metodo original será executado e todos os recursos do spy serão mantidos e estarão disponiveis na verificacao

**and.returnValue()**

- Serve para informar ao `spy` o valor de retorno de determinado metodo
- Deve ser aplicado ao spy - não ao teste
- Para que serve? diminuir a latencia dos testes por exemplo

**and.returnValues()**

- Informa ao spy quais os valores a serem retornados por chamada
- Aceita como parametro um ou mais valores, separados por `,`
- Quando o numero de chamadas from amior do que o de valores a serem retornados, será retornado `undefined`
- Deve ser aplicado ao objeto `spy`
- È valido para asserções realizadas dentro do mesmo teste

**and.callFake()**

- Define uma nova implementação para um metodo de um `spy`
- Deve ser aplicado ao objeto `spy`
- Recebe como parametro uma função cujo corpo é a nova implementação a ser executada quando o metodo for chamado

**and.throwError()**

- Informa ao spy que determinado metodo deve lançar um erro ao ser executado
- Deve ser aplicado ao objeto spy
- Recebe como parametro uma string que contem a mensagem de erro a ser lançada

**calls.any()**

- Serve para indicar se o metodo do `spy` foi chamado ao menos uma vez
- Todo spy possui o atributo `calls` com informações sobre suas chamadas
- Não recebe parametros e retorna um booleano se ocorreu ou não a chamada do metodo do spy
- É similar ao `toHaveBeenCalled`

**calls.count()**

- Armazena e retorna o numero de vezes que um metodo do spy foi chamado
- Não possui parametros e retorna o numero de chamadas do metodo

**calls.argsFor()**

- Armazena e retorna uma lista contendo os parametros utilizados em cada chamada do metodo de um spy
- Recebe como parametro o indice da chamada a ser retornada
- Util para validar se um metodo foi chamado com os parametros corretos

**calls.allArgs()**

- Retorna uma lista com todos os argumentos de todas as chamadas aos metdos de um spy
- Não recebe argumentos como parametros

**calls.all()**

- Contem e retorna todas as informações de chamadas de um metodo do spy
- As informações são armazenadas em `object`, os parametros `args` e os valores de retorno `returnValue`
- Os itens são agrupados em uma lista e são referenciados por numero de chamada

**calls.mostRecent()**

- Retorna os dados da ultima chamada do metodo do spy
- É o mesmo que acessar o `n-1` elemento da lista contida em `calls.all()`

**calls.first()**

- Retorna os dados da primeira chamada do metodo do `spy`
- É o mesmo que chamar a `0-ezima` posição da lista de  `calls.all()`

**calls.reset()**

- Limpa a lista com os dados da chamada de um spy
- É util em suites aninhada ou quando se precisa restaurar os valores default das chamadas do spy

**createSpy**

- Função global js do jasmine
- Cria um spy do zero
- Possui todos os atributos de um spy comum
- Recebe como parametro o nome da função a ser criado o spy
- Pode ser utilizado quando se precisa de um objeto ao qual não se tem acesso direto
- Possui a limitação de não permitir implementar o metodo declarado
- Permite somente a criação de um metodo

**createSpyObj**

- Função js global do jasmine
- Cria um spy do zero
- Possui todos os atributos de um spy comum
- Recebe como parametro o nome do objeto a ser criado, assim como os seus metodos em formato de array
- Pode ser utilizado quando se precisa de um objeto ao qual não se tem acesso direto
- Permite utilizar todos os elementos `.and.` do spy

## Comparadores personalizados

- Jasmine permite a criação de comparadores proprios
- Um objeto com uma função que recebe dois argumentos deve ser criada
- Os argumentos são `util` e `customEqualityTesters`
- Uma função `compare` deve ser definida, ele deverá retornar um objeto com a propriedade `boolen` `pass`
- Uma propriedade `message` contendo a mensagem de erro pode ser adicionada ao objeto de retorno para detalhar a causa da falha
- O novo comparador deve ser registrado antes do teste atravez do objeto `jasmine.addMatchers()`
- O `not` está disponivel para as validações
- É boa pratica documentar o que os seus custom matchers fazem, nem todo mundo é mãe diná para adivinhar
