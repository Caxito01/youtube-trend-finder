# 🚀 Guia: Publicar no GitHub

## Passo 1: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em "New repository" (ou + no canto superior)
3. Digite o nome: `youtube-trend-finder`
4. Descrição (opcional): "Ferramenta para descobrir vídeos em tendência no YouTube"
5. Escolha "Public" para compartilhar
6. **NÃO** inicialize com README (já temos um)
7. Clique em "Create repository"

## Passo 2: Conectar Repositório Local ao GitHub

Copie e execute no PowerShell (na pasta do projeto):

```bash
git remote add origin https://github.com/seu-usuario/youtube-trend-finder.git
git branch -M main
git push -u origin main
```

**Substitua `seu-usuario` pelo seu nome de usuário no GitHub!**

## Passo 3: Autenticação

Na primeira vez, o Git pedirá autenticação. Você pode:

### Opção A: Token de Acesso Pessoal (Recomendado)
1. GitHub → Settings → Developer settings → Personal access tokens
2. Clique "Generate new token"
3. Marque: `repo` e `workflow`
4. Gere o token e copie
5. Cole como senha quando solicitado

### Opção B: SSH (Mais seguro)
1. Gere chave SSH (mais complexo, mas mais seguro)
2. Adicione ao GitHub SSH keys

## Passo 4: Verificar Upload

Acesse `https://github.com/seu-usuario/youtube-trend-finder`

Você deve ver:
- ✅ Todos os arquivos
- ✅ README com instruções
- ✅ Pasta docs/
- ✅ Pasta js/ e css/

## Passo 5: Adicionar Badges ao README (Opcional)

No topo do `README.md`:

```markdown
[![GitHub stars](https://img.shields.io/github/stars/seu-usuario/youtube-trend-finder?style=social)](https://github.com/seu-usuario/youtube-trend-finder)
[![GitHub license](https://img.shields.io/github/license/seu-usuario/youtube-trend-finder)](https://github.com/seu-usuario/youtube-trend-finder/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/seu-usuario/youtube-trend-finder)](https://github.com/seu-usuario/youtube-trend-finder/issues)
```

## Passo 6: Ativar GitHub Pages (Opcional - Publicar Site)

1. GitHub → Seu repositório
2. Settings → Pages
3. Source: `Deploy from a branch`
4. Branch: `main`
5. Folder: `/ (root)`
6. Clique "Save"

Seu site estará em: `https://seu-usuario.github.io/youtube-trend-finder`

## Após Publicar

### Adicionar Colaboradores
- Settings → Collaborators → Add people

### Criar Releases
- Na aba "Releases" → Draft a new release
- Versione seu código (v1.0.0, v1.1.0, etc)

### Gerenciar Issues
- Aba "Issues" para reportar bugs
- Use labels: bug, enhancement, documentation

## Comandos Úteis

```bash
# Ver status
git status

# Ver histórico
git log --oneline

# Fazer novo commit após mudanças
git add .
git commit -m "Descrição da mudança"
git push

# Criar nova branch para feature
git checkout -b nova-feature
git push -u origin nova-feature
```

## Exemplo Completo de Primeiro Push

```powershell
cd c:\youtube_trend_finder

# Já feito:
# git init
# git add .
# git config user.email "seu@email.com"
# git config user.name "Seu Nome"
# git commit -m "Initial commit"

# Agora faça:
git remote add origin https://github.com/seu-usuario/youtube-trend-finder.git
git branch -M main
git push -u origin main
```

---

📝 **Pronto!** Seu projeto está no GitHub! 🎉

Compartilhe o link com amigos:
`https://github.com/seu-usuario/youtube-trend-finder`
