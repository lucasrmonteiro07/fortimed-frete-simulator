# 🚀 Guia para Deploy no GitHub

## ✅ Status Atual

O projeto foi inicializado como repositório Git local com o primeiro commit realizado:

```
[master (root-commit) a8bcba3] Simulador de Frete Fortimed - Versão inicial com Expresso São Miguel
 28 files changed, 6180 insertions(+)
```

## 📋 Próximos Passos

### 1️⃣ Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Preenchao formulário:
   - **Repository name:** `fortimed-frete-simulator`
   - **Description:** Simulador de Frete Fortimed com Expresso São Miguel
   - **Public/Private:** Escolha conforme desejar
   - **NÃO inicialize** com README, .gitignore ou LICENSE

3. Clique em "Create repository"

### 2️⃣ Conectar Repositório Remoto

Execute nos terminais (do diretório do projeto):

```powershell
# Adicionar o remote (copie exatamente da página do seu novo repositório)
git remote add origin https://github.com/lucasrmonteiro07/fortimed-frete-simulator.git

# Verificar se foi adicionado
git remote -v

# Renomear branch para main (opcional, mas recomendado)
git branch -M main

# Fazer push do código
git push -u origin main
```

### 3️⃣ Se Usar SSH (Mais Seguro)

```powershell
# Configurar SSH (primeira vez)
ssh-keygen -t ed25519 -C "seu@email.com"

# Testar conexão
ssh -T git@github.com

# Adicionar remote SSH
git remote remove origin
git remote add origin git@github.com:lucasrmonteiro07/fortimed-frete-simulator.git

# Fazer push
git push -u origin main
```

## 📊 Verificar Status

```powershell
# Ver commits
git log --oneline

# Ver status
git status

# Ver remote
git remote -v
```

## 🔄 Futuros Commits

Após conectar ao GitHub, para fazer futuros commits:

```powershell
# Adicionar alterações
git add .

# Fazer commit
git commit -m "Descrição das alterações"

# Fazer push
git push
```

## 💡 Boas Práticas de Commit

```powershell
# ✅ BOM
git commit -m "Adicionar validação de peso e valor no formulário"
git commit -m "Corrigir bug de pré-seleção de região"
git commit -m "Atualizar dados da Expresso São Miguel conforme PDF"

# ❌ RUIM
git commit -m "alterações"
git commit -m "fix"
git commit -m "ajustes diversos"
```

## 🌿 Gerenciar Branches

```powershell
# Criar nova branch
git checkout -b feature/nova-funcionalidade

# Mudar para branch
git checkout main

# Listar branches
git branch -a

# Deletar branch local
git branch -d nome-branch
```

## 📌 Tags para Releases

```powershell
# Criar tag
git tag -a v1.0.0 -m "Versão 1.0.0 - Release inicial"

# Fazer push de tags
git push origin --tags

# Ver tags
git tag -l
```

## ⚙️ Configuração Initial (se necessário)

```powershell
# Configurar email
git config --global user.email "seu@email.com"

# Configurar nome
git config --global user.name "Seu Nome"

# Verificar configuração
git config --global --list
```

## 🚨 Troubleshooting

### Erro: "Repository not found"
- Verifique se criou o repositório no GitHub
- Verifique se a URL está correta
- Tente com SSH em vez de HTTPS

### Erro: "Permission denied"
- Gere SSH key e adicione ao GitHub
- Ou use token de acesso pessoal com HTTPS

### Erro: "Could not resolve host"
- Verifique sua conexão de internet
- Tente fazer ping: `ping github.com`

## 📚 Recursos

- [GitHub Docs](https://docs.github.com)
- [Git Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Última atualização:** 22 de outubro de 2025
**Repositório Local:** `C:\Users\monteiro\Documents\GitHub\fortimed-frete-simulator`
