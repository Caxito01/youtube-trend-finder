#!/bin/bash
# Script para publicar YouTube Trend Finder no GitHub
# Execute este script após criar o repositório no GitHub

#!/bin/bash

echo "🚀 YouTube Trend Finder - GitHub Publication Script"
echo "=================================================="
echo ""
echo "⚠️  Antes de executar, você precisa:"
echo "   1. Criar repositório em github.com/new"
echo "   2. Nome: youtube-trend-finder"
echo "   3. Deixar público"
echo ""
echo "📝 Cole seu nome de usuário do GitHub:"
read GITHUB_USER

echo ""
echo "🔄 Configurando repositório remoto..."

git remote add origin https://github.com/$GITHUB_USER/youtube-trend-finder.git
git branch -M main

echo "✅ Repositório remoto configurado!"
echo ""
echo "📤 Fazendo push para GitHub..."
echo "   (Pode pedir autenticação - use seu token pessoal)"

git push -u origin main

echo ""
echo "✅ Publicação concluída!"
echo ""
echo "🌐 Seu repositório está em:"
echo "   https://github.com/$GITHUB_USER/youtube-trend-finder"
echo ""
echo "📄 Próximos passos:"
echo "   1. Visite o link acima"
echo "   2. Verifique se todos os arquivos estão lá"
echo "   3. (Opcional) Ative GitHub Pages em Settings > Pages"
echo ""
echo "🎉 Parabéns! Seu projeto está no GitHub!"
