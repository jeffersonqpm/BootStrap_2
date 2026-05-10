
Este projeto é uma aplicação web focada na organização e visualização de projetos e tarefas, utilizando uma interface moderna, responsiva e intuitiva.

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

### 1. HTML5
Responsável pela estruturação semântica de todo o conteúdo, incluindo:
* Formulários de cadastro.
* Tabelas de exibição de dados.
* Estrutura de menus e navegação.

### 2. CSS3
Utilizado para personalizações específicas que vão além dos padrões da biblioteca de estilo, como:
* Ajustes finos de margens e espaçamentos.
* Estilização personalizada de botões (`botaoMenu`).
* Configuração de fontes e cores específicas do projeto.

### 3. Bootstrap 5
A principal biblioteca de componentes utilizada para acelerar o desenvolvimento e garantir a responsividade:
* **Grid System:** Para que o layout se ajuste a qualquer tamanho de tela (Celulares, Tablets e Desktops).
* **Componentes:** Uso de `Buttons`, `Cards`, `Badges` (para status) e `Alerts` (para notificações dinâmicas).
* **Bootstrap Icons:** Integração de ícones visuais como `bi-share`, `bi-card-checklist` e `bi-speedometer2` para facilitar a usabilidade.

---

## 📸 Interface
A interface utiliza componentes visuais do Bootstrap para garantir que o usuário tenha um feedback imediato (através de alertas coloridos) e uma navegação fluida entre o Dashboard e as listas de tarefas.

## 🚀 Como executar
Como o projeto utiliza apenas tecnologias front-end (HTML, CSS, JS), basta abrir o arquivo `index.html` em qualquer navegador moderno.
"""

with open('README.md', 'w', encoding='utf-8') as f:
    f.write(content)