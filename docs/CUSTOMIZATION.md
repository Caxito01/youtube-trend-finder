# Guia de Customização - YouTube Trend Finder

## 📚 Índice
1. [Estrutura dos Arquivos](#estrutura)
2. [Como Adicionar Nichos](#nichos)
3. [Modificar Estilos](#estilos)
4. [Integrar YouTube API](#api)
5. [Exemplos Práticos](#exemplos)

---

## <a name="estrutura"></a>1. Estrutura dos Arquivos

### Arquivo Principal: `index_modular.html`
```html
<!-- Importa CSS -->
<link rel="stylesheet" href="css/styles.css">

<!-- Importa JavaScript -->
<script src="js/data.js"></script>
<script src="js/app.js"></script>
```

### Arquivo de Estilos: `css/styles.css`
- Organizado em seções
- Classes reutilizáveis
- Responsivo para mobile/tablet/desktop

### Arquivo de Dados: `js/data.js`
```javascript
function generateSampleResults(niche) {
    // Vídeos de exemplo
    // Tópicos trending
    // Análises
    // Resultados visuais
}
```

### Arquivo de Lógica: `js/app.js`
```javascript
// Manipuladores de eventos
// Busca em YouTube API
// Processamento de dados
// Validações
```

---

## <a name="nichos"></a>2. Como Adicionar Nichos

### Passo 1: Adicionar ao HTML
Editar `index_modular.html`, seção de niches:
```html
<div class="niche-btn" data-niche="Seu Nicho">🎯 Seu Nicho</div>
```

### Passo 2: Adicionar Vídeos de Exemplo
Editar `js/data.js`, função `generateSampleResults()`:
```javascript
const sampleVideos = {
    'Seu Nicho': [
        { 
            title: 'Título Vídeo 1', 
            channel: 'Nombre do Canal', 
            views: '150K', 
            likes: '7K', 
            comments: '850',
            url: 'https://www.youtube.com/results?search_query=seu+termo',
            thumbnail: 'data:image/svg+xml,%3Csvg...' // SVG codificado
        },
        // Adicionar mais 2 vídeos
    ]
};
```

### Passo 3: Adicionar Tópicos Trending
```javascript
const sampleTopics = {
    'Seu Nicho': ['Tópico1', 'Tópico2', 'Tópico3', 'Tópico4', 'Tópico5']
};
```

### Passo 4: Adicionar Análise
```javascript
const sampleInsights = {
    'Seu Nicho': 'Descrição das tendências encontradas. Mencione crescimento, tipo de conteúdo popular, etc.'
};
```

---

## <a name="estilos"></a>3. Modificar Estilos

### Mudança de Cores Globais
Em `css/styles.css`, encontrar e substituir:
```css
/* Vermelho YouTube */
background: #FF0000;  /* Mude para sua cor */
color: #FF0000;       /* Mude para sua cor */
border-color: #FF0000; /* Mude para sua cor */
```

**Cores sugeridas:**
- Azul: `#2196F3` / `#1976D2`
- Verde: `#4CAF50` / `#45a049`
- Roxo: `#9C27B0` / `#7B1FA2`
- Laranja: `#FF9800` / `#F57C00`

### Tamanhos de Fonte
```css
/* Aumentar tamanho do título */
.header h1 {
    font-size: 3rem; /* Era 2.5rem */
}

/* Ajustar tamanho de seção */
.section-title {
    font-size: 1.6rem; /* Era 1.4rem */
}
```

### Espaçamento
```css
/* Aumentar padding (espaço interno) */
.main-card {
    padding: 50px; /* Era 40px */
}

/* Aumentar margin (espaço externo) */
.header {
    margin-bottom: 40px; /* Era 30px */
}

/* Aumentar gap (espaço entre items) */
.niches-grid {
    gap: 20px; /* Era 15px */
}
```

### Grid de Vídeos
```css
.videos-grid {
    /* 1 coluna em mobile */
    grid-template-columns: 1fr;
    
    /* 2 colunas em tablet */
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    /* 3 colunas em desktop */
    @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

---

## <a name="api"></a>4. Integrar YouTube API

### Obter Chave de API

1. Acessar: https://console.cloud.google.com
2. Criar novo projeto
3. Ativar "YouTube Data API v3"
4. Criar credencial (API Key)
5. Copiar a chave

### Como Funciona no App

Em `js/app.js`, a função `fetchRealYouTubeData()`:
```javascript
// 1. Busca vídeos pelo termo de busca
const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search');

// 2. Filtra apenas vídeos
searchUrl.searchParams.set('type', 'video');

// 3. Ordena por relevância
searchUrl.searchParams.set('order', 'relevance');

// 4. Dos últimos 2 dias
const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);

// 5. Limita a 5 resultados
searchUrl.searchParams.set('maxResults', '5');

// 6. Filtra vídeos > 3:30 minutos
const filteredVideos = detailsData.items.filter(video => {
    const seconds = parseDuration(video.contentDetails.duration);
    return seconds > 210; // 210 segundos = 3:30
});
```

---

## <a name="exemplos"></a>5. Exemplos Práticos

### Exemplo 1: Adicionar Nicho "Programação Python"

**Passo 1:** `index_modular.html`
```html
<div class="niche-btn" data-niche="Programação Python">🐍 Python</div>
```

**Passo 2:** `js/data.js`
```javascript
'Programação Python': [
    { 
        title: 'Python para Iniciantes 2025', 
        channel: 'Code Academy', 
        views: '450K', 
        likes: '22K', 
        comments: '2.8K',
        url: 'https://www.youtube.com/results?search_query=python+iniciantes',
        thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 180%22%3E%3Crect fill=%223366FF%22 width=%22320%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPython%3C/text%3E%3C/svg%3E'
    },
    // Adicionar mais 2...
]
```

**Passo 3:** Topics
```javascript
'Programação Python': ['Web Scraping', 'Django', 'Pandas', 'FastAPI', 'Automação']
```

**Passo 4:** Insights
```javascript
'Programação Python': 'Tutoriais de web scraping e automação crescem 200% mensalmente. Projetos práticos atraem mais engajamento que apenas teoria.'
```

### Exemplo 2: Mudar Cor Principal para Azul

Em `css/styles.css`:
```css
/* Encontrar todas as referências a #FF0000 e substituir */

body {
    background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
}

.header h1 {
    color: #2196F3;
}

.btn-search {
    background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
}

.niche-btn.active {
    background: #2196F3;
    border-color: #2196F3;
}

/* ... etc ... */
```

### Exemplo 3: Adicionar Campo de Filtro

Em `index_modular.html`, após custom niche:
```html
<div class="form-group">
    <label>Região (opcional):</label>
    <select id="regionFilter">
        <option value="BR">Brasil</option>
        <option value="US">EUA</option>
        <option value="WORLD">Mundo</option>
    </select>
</div>
```

Em `js/app.js`, modificar `fetchRealYouTubeData()`:
```javascript
const regionCode = document.getElementById('regionFilter').value;
if (regionCode !== 'WORLD') {
    searchUrl.searchParams.set('regionCode', regionCode);
}
```

---

## 🎯 Dicas de Otimização

### Performance
- Reduzir número de vídeos em `maxResults`
- Usar cache para armazenar resultados
- Lazy load de imagens SVG

### UX/Design
- Manter consistência de cores
- Usar emojis relevantes nos botões
- Adicionar loading states
- Feedback visual em interações

### Segurança
- Nunca commitir API keys em público
- Usar variáveis de ambiente
- Validar entrada do usuário
- Rate limiting na API

---

**Última atualização:** Dezembro 2025
