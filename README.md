# Controle de Figurinhas Copa 2026

Aplicacao web estatica para acompanhar o progresso de um album de figurinhas da Copa 2026. Ela roda direto no navegador, salva os dados em `localStorage` e esta publicada no GitHub Pages.

## Acesse

Site publicado: https://recapi.github.io/Album/

Repositorio: https://github.com/Recapi/Album

## Principais recursos

- Controle de envelopes normais e envelopes MC.
- Tabela clicavel do album com selecoes, FWC do inicio, FWC do fim e Coca-Cola.
- Meta configuravel de albuns para completar.
- Contagem por figurinha, incluindo repetidas.
- Marcacao visual de brilhantes e perfiladas.
- Tema claro e tema escuro preto.
- Contadores por selecao com normais, brilhantes e perfiladas MC.
- Graficos de disparidade, composicao, repetidas, faltantes e inconsistencias.
- Comparacao entre tabela do album e contadores por selecao.
- Exportacao, copia e importacao de backup em JSON.

## Como usar

1. Abra o site publicado ou rode localmente.
2. Informe quantos envelopes comprou.
3. Clique nas figurinhas da tabela para somar quantas voce tem.
4. Use `Shift + clique` ou botao direito para diminuir uma quantidade.
5. Ajuste a meta em `Albuns para completar`.
6. Acompanhe os cards e graficos para ver faltantes, repetidas e incoerencias.

## Backup dos dados

Os dados ficam apenas no navegador em `localStorage`. Para trocar de computador, navegador ou fazer uma copia de seguranca:

- use `Exportar JSON` para baixar um arquivo;
- use `Copiar JSON` para copiar para a area de transferencia;
- use `Importar JSON` para restaurar dados colados;
- use `Importar arquivo` para restaurar um `.json`.

O backup inclui:

- envelopes;
- contadores por selecao;
- marcacoes da tabela do album;
- meta de albuns;
- tema escolhido.

## Estrutura do projeto

```text
.
|-- index.html   # Estrutura da pagina
|-- style.css    # Visual, tabela, graficos e temas
|-- app.js       # Estado, renderizacao, graficos, backup e interacoes
|-- AGENTS.md    # Instrucoes para agentes/contribuidores
`-- README.md    # Documentacao do projeto
```

## Rodando localmente

Nao existe etapa de build ou instalacao.

Abra direto:

```text
index.html
```

Ou rode um servidor estatico:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000/
```

## Dados e privacidade

A aplicacao nao usa banco de dados, servidor, analytics ou chamadas externas. Tudo fica salvo no proprio navegador. Ao limpar os dados do site no navegador, as informacoes tambem sao apagadas.

## Deploy

O deploy e feito pelo GitHub Pages a partir do branch `master`, usando os arquivos da raiz do repositorio.
