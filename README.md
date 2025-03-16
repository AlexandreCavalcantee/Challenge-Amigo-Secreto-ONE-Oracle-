# Amigo Secreto

Um aplicativo web simples para organizar sorteios de amigo secreto. Esta aplicação permite adicionar os nomes dos participantes e realizar o sorteio automaticamente, garantindo que ninguém tire a si mesmo.

## Funcionalidades

- Adicionar participantes à lista de amigos
- Validação de entrada para evitar nomes vazios
- Sorteio aleatório que garante que ninguém tire a si mesmo
- Interface simples e intuitiva
- Design responsivo

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)

## Como Usar

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/amigo-secreto.git
   ```

2. Abra o arquivo `index.html` em qualquer navegador moderno

3. Digite o nome de um participante no campo de texto e clique em "Adicionar"

4. Repita o processo para todos os participantes (mínimo de 2)

5. Clique no botão "Sortear amigo" para realizar o sorteio

6. Os resultados serão exibidos na tela, mostrando quem tirou quem

## Estrutura do Projeto

```
.
├── index.html        # Estrutura da página
├── style.css         # Estilos da aplicação
├── app.js            # Lógica do sorteio
└── assets/           # Imagens utilizadas na interface
    ├── amigo-secreto.png
    └── play_circle_outline.png
```

## Lógica do Sorteio

O algoritmo de sorteio implementado garante que:
- Cada pessoa tire apenas uma outra pessoa
- Ninguém tire a si mesmo
- Todos os participantes sejam incluídos no sorteio

Se o algoritmo encontrar uma situação impossível, ele reinicia automaticamente o processo de sorteio.

## Personalização

Você pode facilmente personalizar:
- Cores: modificando as variáveis CSS no arquivo `style.css`
- Textos: alterando os textos no arquivo `index.html`
- Lógica do sorteio: ajustando o algoritmo no arquivo `app.js`

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias.
