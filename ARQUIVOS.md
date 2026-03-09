# SGO - Sistema de Gestão de Obras

Sistema web responsivo para gerenciamento de contratos, projetos e obras rodoviárias.

## 📁 Estrutura do Projeto

```
progen_gestao_obras/
├── README.md                    # Este arquivo
├── src/
│   ├── index.html              # Página principal HTML
│   ├── css/
│   │   └── styles.css          # Estilos CSS do sistema
│   └── js/
│       └── app.js              # Funções JavaScript
```

## 📄 Detalhes dos Arquivos

### `src/index.html`
- **Responsabilidade**: Estrutura HTML da aplicação
- **Conteúdo**: 
  - Layout principal com sidebar, header e conteúdo
  - 8 páginas/seções diferentes (Dashboard, Produtos, Governança, Equipe, Medição, IMR, Documentos, Relatório)
  - 4 modais (Novo Produto, Nova Reunião, Novo Colaborador, Gerar Relatório)
  - Referências aos arquivos CSS e JavaScript externos
- **Conexões**: 
  - Importa `src/css/styles.css`
  - Importa `src/js/app.js`

### `src/css/styles.css`
- **Responsabilidade**: Todos os estilos da aplicação
- **Conteúdo**:
  - Variáveis CSS (cores, tamanhos, sombras)
  - Estilos de layout (flexbox, grid)
  - Componentes: sidebar, header, cards, buttons, forms, tables
  - Sistema de badges, alertas, progress bars
  - Componentes especiais: timeline, checklist, calendário, score circle
  - Responsividade para mobile e tablet
- **Tamanho**: Minificado para otimização

### `src/js/app.js`
- **Responsabilidade**: Interatividade e funcionalidades JavaScript
- **Funções principais**:
  - `navigateTo(page)` - Navegação entre páginas
  - `switchTab(tabGroupId, targetId, event)` - Troca de abas
  - `openModal(id)` / `closeModal(id)` - Controle de modais
  - `toggleSidebar()` - Toggle da sidebar mobile
  - `toggleNotif()` - Painel de notificações
  - `filterProducts(type, el)` - Filtro de produtos
  - `calcMedicao()` - Calculadora de medição
  - Event listeners para interações com checkboxes, pills e modais

## 🚀 Como Usar

1. **Abrir a aplicação**: Abra `src/index.html` em um navegador web
2. **Navegação**: Use o menu lateral para navegar entre as diferentes seções
3. **Modais**: Clique em botões para abrir formulários em modais
4. **Abas**: Clique nas abas para alternar entre diferentes visualizações
5. **Calculadora**: Use a calculadora de medição para simular valores

## 🎨 Paleta de Cores

- **Primária**: #1a56db (Azul)
- **Sucesso**: #10b981 (Verde)
- **Aviso**: #f59e0b (Laranja)
- **Perigo**: #ef4444 (Vermelho)
- **Info**: #3b82f6 (Azul claro)
- **Cinzas**: Escala de 50 a 900

## 📱 Responsividade

A aplicação é totalmente responsiva com breakpoints em:
- **Desktop**: 768px+
- **Tablet**: 480px a 768px
- **Mobile**: Até 480px

## 🔧 Funcionalidades Principais

- ✅ Painel de controle com estatísticas
- ✅ Gestão de produtos e entregas
- ✅ Governança e reuniões
- ✅ Controle de equipe e mobilização
- ✅ Medição e pagamento
- ✅ Indicadores de desempenho (IMR)
- ✅ Repositório de documentos
- ✅ Relatório de atendimento
- ✅ Modais para cadastros e operações

## 💡 Melhorias Futuras

- [ ] Integração com backend/banco de dados
- [ ] Autenticação de usuários
- [ ] Exportação de relatórios (PDF/Excel)
- [ ] Gráficos e visualizações dinâmicas
- [ ] Sistema de notificações em tempo real
- [ ] Funcionalidade offline
- [ ] Multilíngue (Português/Inglês)

---

**Desenvolvido em 2026 | Sistema SGO**
