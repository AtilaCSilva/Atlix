\# PRODUCT REQUIREMENTS DOCUMENT (PRD) \- PORTFÓLIO PESSOAL (V4)

\*\*Autor:\*\* Átila Costa Silva (Atlix)  
\*\*Função:\*\* Product & UX/UI Designer / Frontend Developer    
\*\*Estilo Visual:\*\* Zen Editorial (Minimalismo / Elegante / Foco no Conteúdo)    
\*\*Funcionalidade Principal:\*\* Toggle Light/Dark Mode Nativo via CSS  

\---

\#\# 1\. Visão Geral & Objetivos do Produto  
\*   \*\*Objetivo:\*\* Criar um site de portfólio de alta conversão que apresente casos de estudo de UX/UI com profundidade, conectando design de produto à lógica de negócios.  
\*   \*\*Público-Alvo:\*\* Recrutadores, Hiring Managers e potenciais clientes.  
\*   \*\*Objetivos Técnicos:\*\* Carregamento rápido, código semântico e limpo para futura implementação via \*\*Cursor Pro\*\*.

\---

\#\# 2\. Identidade Visual (Zen Editorial v2)

\#\#\# Paleta de Cores & CSS Variables  
\`\`\`css  
:root {  
  /\* LIGHT MODE \*/  
  \--bg-primary: \#FAF9F5;  
  \--bg-secondary: \#F4F3EE;  
  \--text-primary: \#1A1B1F;  
  \--text-secondary: \#606470;  
  \--accent: \#4F46E5;  
  \--border: \#E5E3DD;  
  \--transition-smooth: background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease;  
}

html.dark {  
  /\* DARK MODE \*/  
  \--bg-primary: \#0D0E11;  
  \--bg-secondary: \#16171B;  
  \--text-primary: \#E3E4E6;  
  \--text-secondary: \#8E939E;  
  \--accent: \#818CF8;  
  \--border: \#1F2128;  
}  
\`\`\`

\#\#\# Tipografia Recomendada  
\*   \*\*Títulos (H1, H2, H3):\*\* \*Clash Display\* ou \*Playfair Display\*.  
\*   \*\*Texto Corrido (Body):\*\* \*Satoshi\* ou \*Inter\*.  
\*   \*\*Tags e Metadados:\*\* \*Fira Code\* ou \*JetBrains Mono\*.

\---

\#\# 3\. Arquitetura de Informações & Conteúdo da Home

\#\#\# Seção 1: Navegação (Header)  
\*   \*\*Logo:\*\* \`"Atlix"\` em tipografia serifada.  
\*   \*\*Links:\*\* Projetos (\`\#projetos\`), Sobre (\`\#sobre\`), Contato (\`\#contato\`).  
\*   \*\*Toggle:\*\* Botão minimalista para alternar entre Light e Dark Mode.

\#\#\# Seção 2: Hero (Abertura)  
\*   \*\*Intro:\*\* \`\[ Product & UX/UI Designer \]\` (fonte mono).  
\*   \*\*Headline:\*\* "Projetando interfaces eficientes que conectam pessoas a negócios."  
\*   \*\*Subheadline:\*\* "Focado em construir soluções digitais organizadas, analíticas e livres."  
\*   \*\*CTAs:\*\* "Ver Cases" e "Currículo PDF".

\#\#\# Seção 3: Sobre Mim  
\*   \*\*Texto de Apresentação:\*\*  
    \> "Sou Átila, um designer de 17 anos natural de Betim-MG, movido pela curiosidade e pela busca constante por eficiência. Minha jornada começou na ciência e na biologia, mas encontrei na tecnologia o cenário perfeito para explorar a liberdade criativa e analítica, muito inspirado pela trajetória do meu irmão.   
    \>   
    \> Quando não estou projetando interfaces, divido meu foco entre a disciplina física da calistenia e musculação, a música e a sabedoria das filosofias orientais. Sou aficionado pela liberdade e valorizo imensamente o processo de aprendizado contínuo em cada detalhe da vida."

\#\#\# Seção 4: Habilidades  
\*   \*\*Formação & Liderança:\*\*   
    \*   Cursando o 3º ano do Ensino Médio, com formação complementar em UI/UX Design e Processos Administrativos.  
    \*   Reconhecido como Aluno Destaque por 5 anos consecutivos e líder de turma.  
\*   \*\*Habilidades Técnicas:\*\*  
    \*   \*\*UX/UI Design:\*\* Experiência prática na criação de interfaces digitais, com foco em landing pages e comunicação visual forte.  
    \*   \*\*Perfil Profissional:\*\* Abordagem analítica e orientada a resultados, equilibrada com um olhar cuidadoso para os processos e para cada pequena descoberta ao longo do projeto.

\#\#\# Seção 5: Projetos em Destaque (Cards de Cases)  
\*   \*\*Case Principal: ExameSUS\*\*  
    \*   \*Subtítulo:\* Aplicativo para desburocratizar atendimentos no SUS.  
    \*   \*Resumo:\* Redução de burocracia e aumento de eficiência estimado em 122% no acompanhamento de exames públicos, desenvolvido como projeto de UI/UX Design (Coderhouse).  
    \*   \*Metodologia:\* Ciclo completo do Duplo Diamante (Desk Research, Matriz CSD, Benchmarking, Personas, Userflow, Prototipagem e Teste de Usabilidade).

\#\#\# Seção 6: Contato & Links  
\*   \*\*E-mail:\*\* \`atilacsilva2008@gmail.com\`  
\*   \*\*Telefone:\*\* \`(31) 99269-7524\` \*(Nota: Devido ao meu estágio atual, ligações entre 13:00 e 17:00 são mais difíceis de serem atendidas).\*  
\*   \*\*Links de Presença Digital:\*\* LinkedIn, GitHub, Currículo PDF.

\---

\#\# 4\. Estrutura do Study Case: ExameSUS

\*(Nota para implementação: Esta seção define o layout da página individual do case. As imagens referenciadas devem ser inseridas nos locais indicados).\*

\#\#\# 4.1 Cabeçalho do Case (Hero Section do Projeto)  
\*   \*\*Título:\*\* ExameSUS  
\*   \*\*Subtítulo:\*\* Aplicativo para desburocratizar seus atendimentos no SUS.  
\*   \*\*Metadados do Projeto (Exibição Inline/Bullets):\*\*  
    \*   \*\*Público:\*\* Trabalho final individual para o curso de UI/UX Design da Coderhouse.  
    \*   \*\*Duração:\*\* 4 meses (Dezembro/2024 a Março/2025).  
    \*   \*\*Papel:\*\* Lead UI/UX Designer (responsável por todo o ciclo do Método Duplo Diamante).  
    \*   \*\*Plataforma:\*\* Mobile.  
\*   \*\*Mídia:\*\* \*(Imagem de alta qualidade do mockup final do produto ou composição visual representativa)\*.

\#\#\# 4.2 Visão Geral (Project Overview)  
Estrutura em blocos curtos para leitura rápida:  
\*   \*\*O Desafio (Challenge):\*\* Criar uma solução para "Aumentar a eficiência no atendimento em unidades de saúde pública".  
\*   \*\*O Problema (Problem):\*\* Resolver o gargalo do tempo de espera, apontado por 54% dos usuários do SUS como o maior problema, e a burocracia excessiva que atrasa a marcação de exames e consultas, apontado por 38% dos usuários.  
\*   \*\*A Solução (Solution):\*\* Estreitar as relações entre instituição e pacientes, encurtando processos de atendimento que não são favoráveis e facilitar o acesso e envio de resultados e documentos.  
\*   \*\*O Impacto (Impact):\*\* Redução de burocracia e aumento de eficiência estimada em 122% no acompanhamento de exames públicos.  
\*   \*\*Mídia de Transição:\*\* \*(Imagem representando o processo do Duplo Diamante).\*

\#\#\# 4.3 Fase 1: Descoberta (Discovery)  
\*   \*\*Texto Base:\*\* Inicialmente, utilizei uma abordagem analítica para entender as falhas sistêmicas do atendimento público:  
\*   \*\*Metodologias (Formato de Lista):\*\*  
    \*   \*\*Desk Research:\*\* Identifiquei que a percepção de mau atendimento (89% dos brasileiros) vem da demora no processo, com 54% das reclamações focadas especificamente na espera por exames e consultas.  
    \*   \*\*Pontos de Fricção (Principais Críticas):\*\*  
        \*   Tempo de espera: 54%  
        \*   Encaminhamento de exames: 38%  
        \*   Assistência básica: 24%  
        \*   Encaminhamento para AME: 22%  
        \*   Encaminhamento para outros: 21%  
    \*   \*\*Matriz CSD:\*\* Ferramenta fundamental para alinhar certezas e dúvidas sobre o funcionamento da atenção primária e secundária do SUS. Dela, dúvidas como as características gerais do público-alvo e suas motivações para ir até uma unidade do SUS se tornaram questionamentos importantes incluídos em roteiros de pesquisa.  
    \*   \*\*Inteligência Artificial:\*\* Através dos chatbots, fui explorando diversas ideias e me aprofundando no conhecimento de como funcionam os sistemas de saúde em todos os âmbitos, além do SUS e os melhores do mundo.  
\*   \*\*Mídia:\*\* \*(Ilustração/Ícones com balões do ChatGPT e Gemini).\*

\#\#\# 4.4 Fase 2: Definição  
\*   \*\*Estratégia e POV:\*\* Após a análise, decidi focar em mitigar o problema do encaminhamento de exames. A partir de perguntas norteadoras e visitas a UBSs, defini meu ponto de vista (POV): "Estou criando para um usuário do SUS que vai a uma UBS para realizar consultas ou que necessita de um exame, mas sempre passa por processos chatos e ineficientes que degradam ou impedem a realização de seus objetivos."  
\*   \*\*Persona:\*\*  
    \*   \*\*Perfil:\*\* Foquei em usuários de maior idade que realizam acompanhamentos anuais e sofrem com processos burocráticos complexos.  
    \*   \*\*POV:\*\* Esses usuários necessitam de um atendimento humanizado e desburocratizado, pois a complexidade atual degrada a experiência de quem já possui dificuldades tecnológicas.  
\*   \*\*Mídia:\*\* \*(Imagem da Persona desenvolvida).\*

\#\#\# 4.5 Fase 3: Pesquisa Qualitativa (Research)  
\*   \*\*Contexto:\*\* As pesquisas serviram para confirmar ou refutar descobertas, afunilando o problema com dados reais. Foram entrevistadas 4 pessoas com experiências diferentes, mas com dores compartilhadas.  
\*   \*\*Ferramentas Utilizadas:\*\*  
    \*   \*\*Google Forms\*\* \*(Mídia: Ícone/Imagem do formulário)\*  
    \*   \*\*NotebookLM:\*\* Para resumos e abstração dos dados \*(Mídia: Imagem do NotebookLM)\*.  
    \*   \*\*Google IA Studio:\*\* Para transcrição e análise dos áudios das entrevistas \*(Mídia: Imagem do IA Studio)\*.  
\*   \*\*Insights das Entrevistas:\*\* \*(Mídia: Fotos/Avatares dos entrevistados com uma citação ao lado)\*.  
    \*   \*\*Pontos de Dor (Key Pain Points):\*\* Falta de especialistas, encaminhamentos prolongados, demora para realização, burocracia e múltiplas consultas.  
    \*   \*\*Pontos Positivos (Key Good Points):\*\* Atenção e gentileza, agilidade no atendimento (quando ocorre), capacidade de resolver problemas.

\#\#\# 4.6 Fase 4: Benchmarking  
\*   \*\*Contexto:\*\* Busca por oportunidades no mercado comparando aplicativos de gestão de consultas.  
\*   \*\*Mídia:\*\* \*(Imagem da tabela de comparação)\*.  
\*   \*\*Principais Descobertas (Key Founds):\*\*  
    \*   Nenhum facilita o agendamento remoto.  
    \*   Apenas 1 de 4 funciona bem e atende satisfatoriamente.  
    \*   Apenas metade (1/2) possui design intuitivo.  
\*   \*\*O Achado de Ouro:\*\* O principal aplicativo oficial do SUS ("Meu Dig SUS") não conseguia resolver esses problemas e era muito criticado pela péssima experiência do usuário.

\#\#\# 4.7 Fase 5: Ideação & MVP  
\*   \*\*Definição do MVP:\*\* O MVP foi estruturado com foco em priorizar o sistema de confirmação de identidade e envio de resultados, dividido em fases de lançamento:  
    \*   \*\*Versão Lançamento (Paciente):\*\* \[x\] Sistema de confirmação de identidade e documentos; \[x\] Sistema de envio de resultados.  
    \*   \*\*Versão Pós-Lançamento (Paciente):\*\* \[ \] Chat de atendimento virtual; \[ \] Busca de informações sobre médicos, procedimentos e horários.  
    \*   \*\*Versão Lançamento (Instituição):\*\* \[ \] Atendimento virtual híbrido; \[ \] Dados para classificação de risco; \[ \] Acesso a histórico médico.  
\*   \*\*Arquitetura da Informação:\*\*  
    \*   \*\*Card Sorting:\*\* Realizado com 2 usuários para mapear o modelo mental. \*(Mídia: Imagens dos testes de Card Sorting lado a lado)\*.  
    \*   \*\*Sitemap e Taskflows:\*\* Criados para as tarefas principais do MVP. \*(Mídia: Imagem grande do Userflow e imagens menores do Taskflow/Sitemap)\*.  
    \*   \*\*Mapa da Jornada (Journey Map):\*\* Comparação entre a jornada caótica atual e a simplificada proposta. \*(Mídia: Imagem dos 3 Journey Maps)\*.  
\*   \*\*Matriz Impacto x Esforço:\*\* Identificação de oportunidades de melhoria. \*(Mídia: Imagem da Matriz de Impacto x Esforço)\*.

\#\#\# 4.8 Fase 6: Desenvolvimento e Prototipagem  
\*   \*\*Evolução Visual:\*\* Dos rascunhos de papel para wireframes focados na visualização de etapas. \*(Mídia: Imagens dos esboços digitais)\*.  
\*   \*\*Páginas Chave Implementadas:\*\* Histórico de exames e jornada de visualização de etapas.  
\*   \*\*Decisão de Design (Lei de Tesler):\*\* Após feedback do professor Matheus Noronha, abandonei as telas complexas de registro manual de documentos. Aplicando a Lei de Tesler ("Procedimentos complexos devem ser tratados pelo sistema"), simplifiquei o fluxo para que o sistema assuma essa carga.  
\*   \*\*Mídia:\*\* \*(Imagens da Versão 1 (V1) em alta fidelidade)\*.

\#\#\# 4.9 Fase 7: Validação  
\*   \*\*Métodos Aplicados:\*\* Duas análises heurísticas com IA e testes de usabilidade com 5 participantes.  
\*   \*\*Análise Heurística (Insights & Impacto):\*\*  
    \*   \*Visibilidade:\* Inserção de feedback visual (loading) para ações de botões.  
    \*   \*Linguagem:\* Troca de "Instituição" por "Clínica".  
    \*   \*Prevenção de Erros:\* Validação de campos para evitar cliques acidentais (Taxa de erro inicial: 29,17%).  
\*   \*\*Teste de Usabilidade (Insights & Impacto):\*\*  
    \*   \*Prioridade:\* Melhorar navegação de etapas e histórico.  
    \*   \*Mudanças na UI:\* Adição de um carrossel na Home para exames atuais e detalhamento por exame (Resumo, Informações Gerais, Diagnóstico e Imagens).  
\*   \*\*Mídia:\*\* \*(Imagem do Figma dos testes de usabilidade)\*.  
\*   \*\*Métricas Finais e Trade-offs:\*\* A taxa de sucesso para verificar as etapas do exame subiu de 30% para 66,7%. A análise revelou um trade-off: a priorização desse fluxo principal reduziu em 37% a facilidade de encontrar o histórico, gerando um insight para a próxima versão.  
\*   \*\*Mídia:\*\* \*(Imagens do mockup final e produto consolidado)\*.

\#\#\# 4.10 Aprendizados e Futuro (Future Press Release)  
\*   \*\*Lições Aprendidas:\*\* "Aprendi a importância de apresentar dados de forma profissional. Dificuldades de navegação não são falhas, mas indicativos para a redistribuição estratégica do foco. Descobri que no design, quando o planejado encontra barreiras, a criatividade deve encontrar novos caminhos para a solução."  
\*   \*\*Chamada de Jornal Imaginária:\*\*   
    \> "App ExameSUS reduz burocracia e aumenta em 122% a eficiência no acompanhamento de exames públicos. Desenvolvido pelo designer Átila Silva, a solução digital foca na autonomia de idosos e na desburocratização de processos, prometendo desafogar as salas de espera das UBSs de Minas Gerais."

\---

\#\# 5\. Requisitos para o Cursor Pro  
1\.  \*\*Código Modular:\*\* Divida o CSS em variáveis semânticas e alterne a classe \`.dark\` via JS.  
2\.  \*\*Responsividade:\*\* Layout adaptável sem bibliotecas pesadas (CSS Grid/Flexbox).  
3\.  \*\*Acessibilidade:\*\* Contraste WCAG AA para os dois temas.  
