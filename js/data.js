function generateSampleResults(niche) {
    const sampleVideos = {
        'Marketing Digital': [
            { title: 'Estratégia de Marketing Digital 2025', channel: 'Método Digital', views: '245K', likes: '12K', comments: '1.2K', url: 'https://www.youtube.com/results?search_query=marketing+digital+2025', thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 180%22%3E%3Crect fill=%22%23FF0000%22 width=%22320%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EMarketing Digital%3C/text%3E%3C/svg%3E' },
            { title: 'Como crescer no TikTok e Instagram', channel: 'Growth Hacker', views: '189K', likes: '8.5K', comments: '890', url: 'https://www.youtube.com/results?search_query=crescer+tiktok+instagram', thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 180%22%3E%3Crect fill=%22%23FF3333%22 width=%22320%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ETikTok Instagram%3C/text%3E%3C/svg%3E' },
            { title: 'Funil de Vendas Completo', channel: 'Expert Marketing', views: '156K', likes: '7.2K', comments: '654', url: 'https://www.youtube.com/results?search_query=funil+de+vendas', thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 180%22%3E%3Crect fill=%22%23FF6666%22 width=%22320%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EFunil Vendas%3C/text%3E%3C/svg%3E' }
        ],
        'Tecnologia': [
            { title: 'IA e Machine Learning em 2025', channel: 'Tech Trends', views: '512K', likes: '28K', comments: '3.5K', url: 'https://www.youtube.com/results?search_query=IA+machine+learning', thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 180%22%3E%3Crect fill=%220066FF%22 width=%22320%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EIA Machine Learning%3C/text%3E%3C/svg%3E' },
            { title: 'Desenvolvimento Web Moderno', channel: 'Code Masters', views: '387K', likes: '19K', comments: '2.1K', url: 'https://www.youtube.com/results?search_query=desenvolvimento+web', thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 180%22%3E%3Crect fill=%221a8cff%22 width=%22320%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EWeb Moderno%3C/text%3E%3C/svg%3E' },
            { title: 'Segurança em Nuvem', channel: 'Cloud Academy', views: '234K', likes: '11K', comments: '1.8K', url: 'https://www.youtube.com/results?search_query=seguranca+nuvem', thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 180%22%3E%3Crect fill=%223399ff%22 width=%22320%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ESeguranca Nuvem%3C/text%3E%3C/svg%3E' }
        ],
        'Fitness': [
            { title: 'Treino Full Body em 30 Minutos', channel: 'Fitness Pro', views: '892K', likes: '45K', comments: '5.2K', url: 'https://www.youtube.com/results?search_query=treino+full+body+30+minutos', thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 180%22%3E%3Crect fill=%2300CC00%22 width=%22320%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ETreino Full Body%3C/text%3E%3C/svg%3E' },
            { title: 'Nutrição para Ganho Muscular', channel: 'Body Coach', views: '654K', likes: '32K', comments: '3.8K', url: 'https://www.youtube.com/results?search_query=nutricao+ganho+muscular', thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 180%22%3E%3Crect fill=%2300FF00%22 width=%22320%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ENutricao Muscular%3C/text%3E%3C/svg%3E' },
            { title: 'Rotina de Exercícios Iniciantes', channel: 'Fit Start', views: '721K', likes: '38K', comments: '4.1K', url: 'https://www.youtube.com/results?search_query=exercicios+iniciantes', thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 180%22%3E%3Crect fill=%2333FF33%22 width=%22320%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EExercicios%3C/text%3E%3C/svg%3E' }
        ],
        'Finanças': [
            { title: 'Como Investir na Bolsa', channel: 'Educação Financeira', views: '445K', likes: '22K', comments: '2.9K', url: 'https://www.youtube.com/results?search_query=investir+na+bolsa', thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 180%22%3E%3Crect fill=%22%23FFD700%22 width=%22320%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%23000%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EInvestir Bolsa%3C/text%3E%3C/svg%3E' },
            { title: 'Libertação Financeira', channel: 'Money Smart', views: '389K', likes: '19K', comments: '2.4K', url: 'https://www.youtube.com/results?search_query=libertacao+financeira', thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 180%22%3E%3Crect fill=%22%23FFE44D%22 width=%22320%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2220%22 fill=%22%23000%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ELibertacao Financeira%3C/text%3E%3C/svg%3E' },
            { title: 'Criptomoedas para Iniciantes', channel: 'Crypto Class', views: '567K', likes: '28K', comments: '3.2K', url: 'https://www.youtube.com/results?search_query=criptomoedas', thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 180%22%3E%3Crect fill=%22%23FFCC00%22 width=%22320%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%23000%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ECriptomoedas%3C/text%3E%3C/svg%3E' }
        ]
    };

    const sampleTopics = {
        'Marketing Digital': ['Growth Hacking', 'Social Media', 'SEO 2025', 'Funil de Vendas', 'Email Marketing'],
        'Tecnologia': ['IA Generativa', 'Cloud Computing', 'Cibersegurança', 'DevOps', 'Web3'],
        'Fitness': ['Treino Funcional', 'Musculação', 'HIIT', 'Nutrição', 'Saúde Mental'],
        'Finanças': ['Investimentos', 'Renda Fixa', 'Criptos', 'Empreendedorismo', 'Economia'],
        'Culinária': ['Receitas Rápidas', 'Culinária Vegana', 'Cozinha Italiana', 'Bolos Artesanais', 'Culinária Asiática'],
        'Gaming': ['Valorant', 'Free Fire', 'Call of Duty', 'Minecraft', 'Streamings'],
        'Educação': ['Inglês Fluente', 'Cursos Online', 'Educação Financeira', 'Programação', 'Idiomas'],
        'Entretenimento': ['Filmes 2025', 'Séries Tendência', 'Comédia', 'Reality Shows', 'Gossip'],
        'Negócios': ['Startups', 'Empreendedorismo', 'Franchises', 'Gestão Empresarial', 'Liderança'],
        'Vlogs': ['Dia a Dia', 'Viagens', 'Pranks', 'Aventuras', 'Lifestyle'],
        'Música': ['Música Eletrônica', 'Hip Hop', 'MPB', 'Sertanejo', 'Rock'],
        'Arte': ['Desenho Digital', 'Pintura', 'Escultura', 'Arte Conceitual', 'Ilustração'],
        'Desenvolvimento Web': ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Frontend'],
        'Design': ['UX/UI Design', 'Figma', 'Design Gráfico', 'Prototipagem', 'Tipografia']
    };

    const sampleInsights = {
        'Marketing Digital': 'Conteúdos sobre estratégias de redes sociais e funis de vendas estão em alta. Videos com 8-15 minutos obtêm melhor engajamento.',
        'Tecnologia': 'Vídeos sobre IA e seus usos práticos crescem 150% ao mês. Tutoriais interativos têm a melhor taxa de retenção.',
        'Fitness': 'Treinos curtos (20-30 min) com musicaenergia conquistam mais views. Antes/depois e motivação pessoal engajam muito.',
        'Finanças': 'Educação financeira para jovens é tendência crescente. Conteúdo sobre investimentos simples obtém alto engajamento.',
        'Culinária': 'Receitas rápidas e práticas dominam. Vídeos curtos no Shorts/Reels complementam conteúdo long-form.',
        'Gaming': 'Streams ao vivo e reviews de jogos novos estão em alta. Conteúdo competitivo atrai grande audiência.',
        'Educação': 'Cursos rápidos e aulas práticas crescem. Conteúdo de desenvolvimento profissional tem alta demanda.',
        'Entretenimento': 'Conteúdo de comentários sobre lançamentos de séries/filmes viraliza rapidamente.',
        'Negócios': 'Histórias de sucesso de empreendedores e dicas práticas fazem sucesso. Mentorias crescem em viewership.',
        'Vlogs': 'Conteúdo autêntico e relatable gera mais engajamento. Vlogs de viagem lideram em view duration.',
        'Música': 'Covers e produções musicais crescem em Shorts. Documentários sobre artistas capturam audiência leal.',
        'Arte': 'Speed paintings e tutoriais do zero ganham muitas visualizações. Comunidade é altamente engajada.',
        'Desenvolvimento Web': 'Tutoriais React e JavaScript dominam. Vídeos com projetos práticos e passo-a-passo crescem exponencialmente.',
        'Design': 'Tutoriais de Figma e design em tempo real ganham muitas visualizações. Briefing e processo criativo engajam.'
    };

    const videos = sampleVideos[niche] || [
        { title: `Tendência em ${niche}`, channel: 'Canal Popular', views: '200K', likes: '10K', comments: '1.5K', url: `https://www.youtube.com/results?search_query=${encodeURIComponent(niche)}`, thumbnail: `data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 180%22%3E%3Crect fill=%22%23FF6600%22 width=%22320%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2220%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${niche}%3C/text%3E%3C/svg%3E` },
        { title: `Guia Completo: ${niche}`, channel: 'Expert Channel', views: '150K', likes: '8K', comments: '1.2K', url: `https://www.youtube.com/results?search_query=${encodeURIComponent(niche)}`, thumbnail: `data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 180%22%3E%3Crect fill=%22%23FF8833%22 width=%22320%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2220%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EGuia%3C/text%3E%3C/svg%3E` },
        { title: `${niche} - Dicas Práticas`, channel: 'Pro Tutor', views: '120K', likes: '6K', comments: '980', url: `https://www.youtube.com/results?search_query=${encodeURIComponent(niche)}`, thumbnail: `data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 180%22%3E%3Crect fill=%22%23FFAA00%22 width=%22320%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2220%22 fill=%22white%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EDicas%3C/text%3E%3C/svg%3E` }
    ];

    return {
        niche: niche,
        trending_topics: sampleTopics[niche] || ['Tendência 1', 'Tendência 2', 'Tendência 3', 'Tendência 4'],
        insights: sampleInsights[niche] || `Análise de tendências para o nicho de ${niche}. Conteúdo de qualidade com bom engajamento está em alta.`,
        videos: videos
    };
}

function displayResults(results) {
    // Show results section
    document.getElementById('resultsSection').classList.add('show');
    document.getElementById('resultNiche').textContent = `Tendências: ${results.niche}`;

    // Display trending topics
    if (results.trending_topics && results.trending_topics.length > 0) {
        const topicsContainer = document.getElementById('topicTags');
        topicsContainer.innerHTML = '';
        results.trending_topics.forEach(topic => {
            const tag = document.createElement('span');
            tag.className = 'topic-tag';
            tag.textContent = topic;
            topicsContainer.appendChild(tag);
        });
        document.getElementById('trendingTopics').style.display = 'block';
    }

    // Display insights
    if (results.insights) {
        document.getElementById('insightsText').textContent = results.insights;
        document.getElementById('insightsBox').style.display = 'block';
    }

    // Display videos
    const videosGrid = document.getElementById('videosGrid');
    videosGrid.innerHTML = '';

    if (results.videos && results.videos.length > 0) {
        results.videos.forEach((video, index) => {
            const videoCard = document.createElement('div');
            videoCard.className = 'video-card';
            
            // Use real thumbnail if available
            const thumbnail = video.thumbnail ? 
                `<img src="${video.thumbnail}" alt="${video.title}" style="width: 100%; height: 180px; object-fit: cover;">` :
                '<div class="video-thumbnail">🎬</div>';
            
            videoCard.innerHTML = `
                ${thumbnail}
                <div class="video-info">
                    <div class="video-title">${video.title}</div>
                    <div class="video-channel">👤 ${video.channel || 'Canal não especificado'}</div>
                    <div class="video-stats">
                        ${video.views ? `<span class="video-stat">👁️ ${video.views}</span>` : ''}
                        ${video.likes ? `<span class="video-stat">👍 ${video.likes}</span>` : ''}
                        ${video.comments ? `<span class="video-stat">💬 ${video.comments}</span>` : ''}
                    </div>
                    <a href="${video.url || 'https://youtube.com'}" target="_blank" class="btn-watch">▶️ Assistir Vídeo</a>
                </div>
            `;
            videosGrid.appendChild(videoCard);
        });
    } else {
        videosGrid.innerHTML = '<p style="text-align:center; color:#999; padding:40px;">Nenhum vídeo encontrado. Tente uma busca mais específica.</p>';
    }

    // Scroll to results
    document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
}
