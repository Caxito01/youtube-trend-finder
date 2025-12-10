# YouTube Trend Finder 🎥

Uma ferramenta web moderna para descobrir vídeos em tendência no YouTube por nicho específico.

## 🌟 Características

- 📊 **Busca de Tendências**: Encontre vídeos em alta em diversos nichos
- 🎯 **14+ Nichos Pré-configurados**: Marketing Digital, Tecnologia, Fitness, Finanças, Culinária, Gaming, Educação, Entretenimento, Negócios, Vlogs, Música, Arte, Web, Design
- 🔑 **Integração YouTube API**: Suporte para dados reais via Google API
- 📱 **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🎨 **Design Moderno**: Interface intuitiva com tema YouTube (vermelho)
- 💾 **Dados de Exemplo**: Funciona offline com dados de exemplo realistas
- 🚀 **Modular**: Código bem organizado em CSS, JS e dados separados

## 📁 Estrutura do Projeto

```
youtube_trend_finder/
├── index.html                 # Versão monolítica (tudo em um arquivo)
├── index_modular.html         # Versão modular (imports)
├── README.md                  # Este arquivo
├── css/
│   └── styles.css            # Estilos da aplicação
├── js/
│   ├── main.js               # Lógica principal
│   ├── data.js               # Dados de exemplo
│   └── utils.js              # Funções utilitárias
├── docs/
│   ├── GUIA_CUSTOMIZACAO.md  # Como customizar
│   ├── ESTRUTURA.md          # Detalhes da arquitetura
│   └── API_YOUTUBE.md        # Como usar a YouTube API
└── assets/
    └── favicon.svg           # Ícone da aplicação
```

## 🚀 Como Usar

### Opção 1: Abrir Localmente (Recomendado)
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/youtube-trend-finder.git
   cd youtube-trend-finder
   ```

2. Abra em um servidor local (necessário para CORS):
   ```bash
   # Com Python 3
   python -m http.server 8000
   
   # Com Node.js
   npx http-server
   
   # Com PHP
   php -S localhost:8000
   ```

3. Acesse `http://localhost:8000` no navegador

### Opção 2: Abrir Arquivo Diretamente
- Duplo clique em `index.html` (funciona com dados de exemplo apenas)

## 🔑 Usar com YouTube API Real

1. **Obtenha uma chave API**:
   - Acesse [Google Cloud Console](https://console.cloud.google.com)
   - Crie um novo projeto
   - Ative a YouTube Data API v3
   - Crie credenciais (API Key)

2. **Cole a chave no site**:
   - No campo "Chave da YouTube API"
   - Clique em "Buscar Tendências"

## 📊 Funcionalidades

### Busca por Nicho
- Clique em um dos 14 nichos predefinidos
- Ou digite um nicho personalizado

### Resultados
- Vídeos em tendência com thumbnail, título, canal
- Estatísticas: visualizações, likes, comentários
- Tópicos em alta (tags mais populares)
- Insights e análise de tendências
- Links diretos para os vídeos no YouTube

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **API**: YouTube Data API v3
- **Ícones**: SVG inline
- **Design**: Responsivo (Mobile First)

## 📝 Customização

Veja [`docs/GUIA_CUSTOMIZACAO.md`](docs/GUIA_CUSTOMIZACAO.md) para:
- Adicionar novos nichos
- Mudar cores e tema
- Adicionar mais dados de exemplo
- Customizar textos

## 🐛 Resolução de Problemas

### CORS Error
- Use um servidor local (Python, Node, PHP)
- Não abra o arquivo diretamente

### API Retorna Erro
- Verifique se a chave é válida
- Confirme que a YouTube API v3 está ativada
- Aguarde alguns segundos entre buscas

### Imagens Não Carregam
- Verifique a conexão com a internet (se usando API real)
- Dados de exemplo usam SVG (funcionam offline)

## 📄 Arquivos Principais

| Arquivo | Descrição |
|---------|-----------|
| `index.html` | Versão monolítica completa |
| `index_modular.html` | Versão modular com imports |
| `css/styles.css` | Todos os estilos CSS |
| `js/main.js` | Lógica principal da aplicação |
| `js/data.js` | Dados de exemplo e tópicos |
| `js/utils.js` | Funções auxiliares (formatação, parsing) |

## 🎯 Roadmap

- [ ] Integração com Trends do YouTube
- [ ] Histórico de buscas
- [ ] Exportar resultados (CSV, JSON)
- [ ] Dashboard de análises
- [ ] PWA (Progressive Web App)
- [ ] Suporte a múltiplos idiomas

## 💡 Dicas

- **Dados de Exemplo**: Funcionam sem API, ótimos para testes
- **Versão Monolítica**: Use se preferir um único arquivo
- **Versão Modular**: Use para desenvolvimento e customização
- **Mobile**: Totalmente responsivo, teste em seu celular!

## 📧 Suporte

Encontrou um problema? Abra uma [issue](https://github.com/seu-usuario/youtube-trend-finder/issues) no GitHub!

## 📜 Licença

MIT License - Veja `LICENSE` para detalhes

## 👨‍💻 Autor

YouTube Trend Finder - Ferramenta de análise de tendências do YouTube

---

**⭐ Se gostou, deixe uma estrela no GitHub!**

Feito com ❤️ para criadores de conteúdo
