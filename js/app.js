let selectedNiche = '';

// Handle niche selection
document.querySelectorAll('.niche-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.niche-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        selectedNiche = this.dataset.niche;
        document.getElementById('customNiche').value = '';
    });
});

// Handle custom niche input
document.getElementById('customNiche').addEventListener('input', function() {
    if (this.value) {
        document.querySelectorAll('.niche-btn').forEach(b => b.classList.remove('active'));
        selectedNiche = this.value;
    }
});

function showAlert(type, message) {
    const alertId = type === 'error' ? 'errorAlert' : 'infoAlert';
    const alert = document.getElementById(alertId);
    alert.textContent = message;
    alert.classList.add('show');
    setTimeout(() => alert.classList.remove('show'), 5000);
}

function hideAlert() {
    document.getElementById('errorAlert').classList.remove('show');
    document.getElementById('infoAlert').classList.remove('show');
}

async function searchTrends() {
    const customNiche = document.getElementById('customNiche').value.trim();
    const apiKey = document.getElementById('apiKey').value.trim();
    const nicheToSearch = customNiche || selectedNiche;

    if (!nicheToSearch) {
        showAlert('error', '⚠️ Por favor, selecione um nicho ou digite um personalizado');
        return;
    }

    hideAlert();
    const btn = document.getElementById('searchBtn');
    const btnText = document.getElementById('btnText');
    
    // Disable button and show loading
    btn.disabled = true;
    btnText.innerHTML = '<div class="spinner"></div> Analisando tendências...';

    try {
        let results;

        // If API key is provided, fetch real data from YouTube API
        if (apiKey) {
            results = await fetchRealYouTubeData(apiKey, nicheToSearch);
        } else {
            // Use fallback sample data
            await new Promise(resolve => setTimeout(resolve, 1500));
            results = generateSampleResults(nicheToSearch);
            showAlert('info', '📊 Exibindo dados de exemplo. Cole uma chave YouTube API para dados reais.');
        }
        
        displayResults(results);

    } catch (error) {
        console.error('Error:', error);
        showAlert('error', '❌ Erro ao buscar tendências. ' + error.message);
    } finally {
        btn.disabled = false;
        btnText.innerHTML = '🔍 Buscar Tendências';
    }
}

async function fetchRealYouTubeData(apiKey, searchQuery) {
    // Calculate date from 2 days ago
    const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString();

    // Step 1: Search for videos
    const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search');
    searchUrl.searchParams.set('key', apiKey);
    searchUrl.searchParams.set('q', searchQuery);
    searchUrl.searchParams.set('type', 'video');
    searchUrl.searchParams.set('order', 'relevance');
    searchUrl.searchParams.set('publishedAfter', twoDaysAgo);
    searchUrl.searchParams.set('maxResults', '5');
    searchUrl.searchParams.set('part', 'snippet');
    searchUrl.searchParams.set('regionCode', 'BR');

    const searchResponse = await fetch(searchUrl);
    if (!searchResponse.ok) {
        throw new Error('Erro na API do YouTube: ' + searchResponse.statusText);
    }

    const searchData = await searchResponse.json();
    
    if (!searchData.items || searchData.items.length === 0) {
        throw new Error('Nenhum vídeo encontrado para este termo');
    }

    // Extract video IDs
    const videoIds = searchData.items.map(item => item.id.videoId).join(',');

    // Step 2: Get detailed video data
    const detailsUrl = new URL('https://www.googleapis.com/youtube/v3/videos');
    detailsUrl.searchParams.set('key', apiKey);
    detailsUrl.searchParams.set('id', videoIds);
    detailsUrl.searchParams.set('part', 'statistics,contentDetails,snippet');
    detailsUrl.searchParams.set('maxResults', '5');

    const detailsResponse = await fetch(detailsUrl);
    if (!detailsResponse.ok) {
        throw new Error('Erro ao buscar detalhes dos vídeos');
    }

    const detailsData = await detailsResponse.json();

    // Filter videos longer than 210 seconds (3:30 min)
    const filteredVideos = detailsData.items.filter(video => {
        const duration = video.contentDetails.duration;
        const seconds = parseDuration(duration);
        return seconds > 210;
    });

    // Extract topics from tags
    const allTags = new Set();
    filteredVideos.forEach(video => {
        if (video.snippet.tags) {
            video.snippet.tags.slice(0, 3).forEach(tag => allTags.add(tag));
        }
    });

    // Format video data
    const videos = filteredVideos.slice(0, 3).map(video => ({
        title: video.snippet.title,
        channel: video.snippet.channelTitle,
        views: formatNumber(video.statistics.viewCount),
        likes: video.statistics.likeCount ? formatNumber(video.statistics.likeCount) : 'N/A',
        comments: video.statistics.commentCount ? formatNumber(video.statistics.commentCount) : 'N/A',
        url: `https://www.youtube.com/watch?v=${video.id}`,
        thumbnail: video.snippet.thumbnails.medium.url,
        description: video.snippet.description
    }));

    // Generate insights
    const insights = generateInsights(searchQuery, videos);

    return {
        niche: searchQuery,
        trending_topics: Array.from(allTags).slice(0, 5),
        insights: insights,
        videos: videos
    };
}

function parseDuration(duration) {
    // Convert ISO 8601 duration to seconds
    // Format: PT[n]H[n]M[n]S
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    const hours = parseInt(match[1] || 0, 10);
    const minutes = parseInt(match[2] || 0, 10);
    const seconds = parseInt(match[3] || 0, 10);
    return hours * 3600 + minutes * 60 + seconds;
}

function formatNumber(num) {
    const number = parseInt(num);
    if (number >= 1000000) return (number / 1000000).toFixed(1) + 'M';
    if (number >= 1000) return (number / 1000).toFixed(1) + 'K';
    return number.toString();
}

function generateInsights(niche, videos) {
    const avgViews = videos.reduce((sum, v) => {
        const num = parseInt(v.views.replace(/[MK]/g, ''));
        const multiplier = v.views.includes('M') ? 1000000 : v.views.includes('K') ? 1000 : 1;
        return sum + (num * multiplier);
    }, 0) / videos.length;

    const engagement = videos.reduce((sum, v) => {
        const likes = v.likes === 'N/A' ? 0 : parseInt(v.likes.replace(/[MK]/g, ''));
        const multiplier = v.likes.includes('M') ? 1000000 : v.likes.includes('K') ? 1000 : 1;
        return sum + (likes * multiplier);
    }, 0) / videos.length;

    return `Análise de vídeos trending em "${niche}": Média de ${formatNumber(avgViews)} visualizações por vídeo. ` +
           `Conteúdo com ${formatNumber(engagement)} likes em média indica boa taxa de engajamento. ` +
           `Recomenda-se vídeos com 10-15 minutos para melhor performance.`;
}
