# 📊 Calculadora de Precificação para Serviços de TI

Aplicação web interativa no estilo **Dashboard Financeiro** desenvolvida para auxiliar desenvolvedores, consultores e agências de TI na precificação justa, transparente e rentável de seus projetos de software e consultoria.

🔗 **Repositório oficial:** [https://github.com/GabrielPucc/app-teste](https://github.com/GabrielPucc/app-teste)

---

## 🛠️ Tecnologias Utilizadas

- **React 19** – Biblioteca para interfaces reativas e componentização declarativa
- **Tailwind CSS** – Framework utilitário para design responsivo e moderno
- **Vite** – Bundler ultrarrápido para desenvolvimento e build
- **Lucide React** – Ícones vetoriais modernos e leves

---

## 📐 Estrutura e Explicação das Telas

A interface adota a estética de um **dashboard comercial**, estruturada em **duas colunas no desktop** e **empilhada responsivamente no mobile**:

### 1. Coluna da Esquerda – Parâmetros de Custo (Formulário de Entrada)
Permite ao usuário alimentar as variáveis-chave da prestação de serviços com sanitização automática para evitar `NaN` caso o campo esteja vazio:
- **Horas trabalhadas estimadas (`hrs`):** Volume de horas dedicado ao escopo técnico.
- **Valor da hora do profissional (`R$`):** Taxa horária cobrada pelo especialista ou rateio de equipe.
- **Custos fixos do projeto (`R$`):** Despesas diretas como servidores (AWS, Vercel), licenças de software, banco de dados ou APIs pagas.
- **Margem de lucro desejada (`%`):** Porcentagem de lucro pretendida sobre o custo total, acompanhada de botões de atalho rápido (15%, 20%, 25%, 35%, 50%).

### 2. Coluna da Direita – Relatório Visual (Atualização em Tempo Real)
Calcula e exibe instantaneamente as métricas conforme o usuário digita:
- **Card 1 (Custo Total Operacional):**  
  $$\text{Custo Total} = (\text{Horas} \times \text{Valor da Hora}) + \text{Custos Fixos}$$  
  Apresenta o detalhamento entre mão de obra direta e custos com infraestrutura.
- **Card 2 (Lucro Projetado):**  
  $$\text{Lucro Projetado} = \text{Custo Total Operacional} \times \left(\frac{\text{Margem de Lucro}}{100}\right)$$  
  Exibe o retorno financeiro líquido esperado.
- **Card 3 (Preço Final de Venda - Card Principal em Destaque):**  
  $$\text{Preço Final} = \text{Custo Total Operacional} + \text{Lucro Projetado}$$  
  Card com gradiente azul/índigo de alto contraste visual, tipografia destacada e uma **barra visual de proporção** que ilustra o percentual de custo vs margem líquida da proposta comercial.

---

## 🤖 Documentação da Entrega Acadêmica (LLM & Prompts)

### 1. LLM / Plataforma Utilizada
- **Modelo:** Google Gemini (via Antigravity AI Coding Assistant)

### 2. Prompt Inicial Utilizado para Criação
```text
Atue como um desenvolvedor Front-end sênior. Crie um aplicativo web em React com Tailwind CSS que funcione como uma 'Calculadora de Precificação para Serviços de TI'.

A interface deve ser moderna, limpa, no estilo dashboard, dividida em duas colunas no desktop e empilhada no mobile.

Na coluna da esquerda, crie um formulário com os seguintes campos de entrada (inputs numéricos):
- Horas trabalhadas estimadas
- Valor da hora do profissional (R$)
- Custos fixos do projeto (licenças de software, servidores, etc.) (R$)
- Margem de lucro desejada (%)

Na coluna da direita, exiba um 'Relatório Visual' que se atualiza em tempo real conforme o usuário digita no formulário. Esse relatório deve ter três cards de destaque:
- Card 1: 'Custo Total Operacional' (Cálculo: (Horas * Valor da Hora) + Custos fixos)
- Card 2: 'Lucro Projetado' (Cálculo: Custo Total Operacional * (Margem de lucro / 100))
- Card 3 (O maior e mais destacado): 'Preço Final de Venda' (Cálculo: Custo Total + Lucro Projetado)

O design deve usar tons de azul, branco e cinza claro, passando uma imagem profissional, limpa e financeira. Inclua validação simples para não mostrar 'NaN' caso os campos estejam vazios (considere zero).
```

---

## 🚀 Como Executar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/GabrielPucc/app-teste.git
   cd app-teste
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse no navegador:
   ```
   http://localhost:5173
   ```
