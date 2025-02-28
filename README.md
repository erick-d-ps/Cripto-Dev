# **Cripto Dev** 


## **Objetivo**

Cripto-Dev: Um aplicativo em tempo real para acompanhar o mercado de criptomoedas, desenvolvido como um projeto de estudo de programação. Inclui funcionalidades como: preço de mercado, volume de negociação, variação de preço em 24 horas e mais. Linke:  [Cripto-Dev](https://cripto-dev-one.vercel.app/)."

---
## **Público-Alvo**

Desenvolvido para investidores em criptomoedas, traders e entusiastas que precisam acompanhar o mercado em tempo real.

## **Funcionalidades Principais**

### **Páginas e Rotas**

1. **header**
   - Logo que ficara em todas as paginas. Ao clicar na logo retorna para pagina Home  

2. **Home:**
   - Pesquise uma cripto moeda específica utilizando nossa barra de pesquisa
   - Acesse os dados das 10 primeiras criptomoedas mais relevantes em nossa tabela, alimentada por uma API confiável.
   - Clique no botão "Carregar mais" para exibir 10 criptomoedas adicionais.
   - Volte ao topo da página com facilidade utilizando o botão "Início".
   - Clique no nome de uma criptomoeda para acessar sua página de detalhes, carregada dinamicamente.

    
2. **detail:**
     - Exibe todos os detalhes da cripto moeda
     - Preço
     - Valor de mercado
     - Volume da moeda 
     - Mudança 24h  

3. **notfound:**
   - Página de Erro 404:Exibida quando uma rota não é encontrada, esta página informa que o conteúdo solicitado não existe. Clique na logo para retornar à página inicial 

   ---

   ### **Funcionalidades Específicas**

   1. **Compactação dos valores:**
   - Função de de transformar os valores das moedas em dolar  .
   - função de compactar numeros grandes para números compactos ex: 1B, 1T
   4.  **Barra de pesquisa**
  - Barra de Pesquisa Inteligente: Encontre rapidamente a criptomoeda que você procura! Nossa barra de pesquisa dinâmica leva você diretamente à página de detalhes da moeda pesquisada, fornecendo informações precisas e atualizadas
   3.  **notfound:**
  - Tratamento de Pesquisas Inválidas: Se você pesquisar por uma criptomoeda que não existe, nossa aplicação rapidamente detectará o erro e redirecionará você para a página "NotFound". Em seguida retornara automaticamente para a página home

### **Componentes**

- **Header:**
  - Ao clicar na logo retona a página home.
- **footer** 
  - Com informações e contatos do desenvolvedor
- **Rotas:**
  - Definidas usando `react-router-dom`.
  - Rotas principais: `/`, `/detail/:id`, `/*` (página de notfound).
- **Páginas:**
  - Home.
  - Detail.
  - notfound.


---

## **Tecnologias Utilizadas**

### **Frontend:**
- Vite
- React.js.
- TypeScript
- React Router DOM.
- CSS module estilização.

### **API Externa:**

- Integração com uma API de (link.: [API coincanp.io](https://api.coincap.io/v2/assets?limit=10&offset=0)).

### **Armazenamento Local:**


---

## **Como Executar o Projeto**

1. Clone este repositório:
   ```bash
   https://github.com/erick-d-ps/Cripto-Dev.git

2. Instale as dependências:
   ```bash
    yarn add

3. Documentação da API:

   - ( Link.: [Documentation API](https://docs.coincap.io/)).
 
    
4. Inicie o servidor de desenvolvimento:
   ```bash
    yarn start

---


