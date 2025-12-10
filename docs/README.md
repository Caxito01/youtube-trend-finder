# YouTube Trend Finder - Estrutura Modular

## 📁 Estrutura do Projeto

```
youtube_trend_finder/
├── index.html                 # Versão original (tudo em um arquivo)
├── index_modular.html         # Versão modular (recomendada)
├── css/
│   └── styles.css            # Todos os estilos CSS
├── js/
│   ├── app.js                # Lógica principal da aplicação
│   └── data.js               # Dados de exemplo e funções de exibição
├── docs/
│   └── README.md             # Este arquivo
└── assets/                   # Para adicionar imagens, ícones, etc.
```

## 🎯 Descrição dos Arquivos

### `index_modular.html`
- Arquivo HTML principal que importa CSS e JavaScript
- Contém toda a estrutura HTML
- Muito mais legível e fácil de manter

### `css/styles.css`
- Todos os estilos CSS da aplicação
- Organizado por seções (Header, Form, Results, Responsive, etc.)
- Fácil de modificar aparência visual

### `js/app.js`
- Lógica principal da aplicação
- Funções de busca e integração com YouTube API
- Validações e tratamento de erros
- Conversão de duração e formatação de números

**Funções principais:**
- `searchTrends()` - Inicia a busca
- `fetchRealYouTubeData()` - Busca dados da YouTube API
- `parseDuration()` - Converte duração ISO 8601
- `formatNumber()` - Formata números (K, M)
- `generateInsights()` - Gera análises automáticas

### `js/data.js`
- Dados de exemplo para cada nicho
- Função `generateSampleResults()` - Gera dados de teste
- Função `displayResults()` - Renderiza resultados na tela

**Dados inclusos:**
- Marketing Digital
- Tecnologia
- Fitness
- Finanças
- + 8 outros nichos

## 🚀 Como Usar

### Versão com Arquivos Separados (Recomendado)
```bash
# Abrir no navegador
start index_modular.html
```

### Versão Original (Um Arquivo)
```bash
# Abrir no navegador
start index.html
```

## 🔧 Customização

### Adicionar Novo Nicho

1. Abrir `js/data.js`
2. Adicionar na seção `sampleVideos`:
```javascript
'Seu Nicho': [
    { 
        title: 'Título do vídeo', 
        channel: 'Nome do canal', 
        views: '100K', 
        likes: '5K', 
        comments: '500', 
        url: 'https://youtube.com/results?search_query=...',
        thumbnail: 'data:image/svg+xml,...'
    }
]
```

3. Adicionar em `sampleTopics`:
```javascript
'Seu Nicho': ['Tópico1', 'Tópico2', 'Tópico3', ...]
```

4. Adicionar em `sampleInsights`:
```javascript
'Seu Nicho': 'Análise detalhada das tendências...'
```

5. Adicionar no HTML `index_modular.html`:
```html
<div class="niche-btn" data-niche="Seu Nicho">🎯 Seu Nicho</div>
```

### Modificar Estilos

Editar `css/styles.css`:
- Cores principais: mudar `#FF0000` para sua cor
- Tamanhos de fonte: editar valores em `rem` ou `px`
- Layout: modificar `grid-template-columns` para grades

### Integrar YouTube API

Editar `js/app.js`:
- A função `fetchRealYouTubeData()` já implementa integração
- Basta colar a chave da API no campo de entrada
- Será usado automaticamente se fornecido

## 📋 Checklist de Correções

- [ ] Testar em navegador Chrome/Firefox
- [ ] Verificar responsividade (mobile/tablet)
- [ ] Validar todas as URLs de vídeos
- [ ] Confirmar dados de exemplo
- [ ] Testar com YouTube API Key real
- [ ] Otimizar imagens SVG
- [ ] Adicionar novos nichos conforme necessário

## 🐛 Troubleshooting

### Imagens não carregam
- Verificar se está usando `index_modular.html`
- Certificar que CSS está em `css/styles.css`

### Scripts não funcionam
- Confirmar que JS está em `js/app.js` e `js/data.js`
- Verificar console do navegador (F12) para erros

### YouTube API não retorna dados
- Validar chave da API
- Confirmar que YouTube Data v3 API está ativa
- Verificar limite de requisições (quota)

## 📝 Notas Importantes

- Dados de exemplo funcionam **sem API**
- Com API Key, busca dados **reais do YouTube**
- Filtra vídeos com **mais de 3:30 minutos**
- Busca vídeos dos **últimos 2 dias**
- Interface totalmente **responsiva**

## 🎨 Paleta de Cores

- **Vermelho YouTube**: `#FF0000` / `#CC0000`
- **Laranja**: `#FF9800`
- **Azul**: `#2196F3`
- **Verde**: `#00CC00`
- **Ouro**: `#FFD700`

## 📞 Suporte

Para questões de desenvolvimento:
1. Verificar console do navegador
2. Consultar documentação da YouTube Data API
3. Revisar exemplos em `js/data.js`

---

**Última atualização:** Dezembro 2025
**Versão:** 2.0 (Modular)
