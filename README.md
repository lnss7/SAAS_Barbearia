# 💈 FSW Barber - SaaS de Barbearia

Fala, pessoal! Lucas Simão na área. ✌️

Dá uma olhada nesse projeto que eu desenvolvi. Se curtes um visual moderno e funcional, vais gostar desta **SaaS de Barbearia**. É uma plataforma completa para agendamento, focada em facilitar a vida tanto do barbeiro quanto do cliente, com um design premium e uma experiência de utilizador nota 10.

A ideia aqui foi criar algo robusto, usando as tecnologias mais atuais do mercado para garantir que o sistema seja rápido, seguro e muito fácil de usar.

---

## 💈 O Projeto: FSW Barber

Este não é apenas um site de agendamento comum. Ele foi construído para ser uma solução completa (SaaS), onde a estética encontra a funcionalidade. Desde o login social até à confirmação do serviço, tudo foi pensado para ser fluido.

### O que tem de fixe:
* **Sistema de Agendamento Inteligente**: O cliente escolhe o serviço, a data e o horário disponível de forma simples e intuitiva.
* **Login com Google**: Chega de formulários chatos! Integrei o NextAuth para o utilizador entrar num clique usando a conta do Google.
* **Gestão de Bookings**: Área exclusiva para o utilizador visualizar, gerir e até cancelar os seus agendamentos.
* **Feedback em Tempo Real**: Uso de Toasts (sonner) para confirmar ações, como quando um agendamento é realizado com sucesso.

---

## 🛠️ Tecnologias Utilizadas

Para levantar esse ecossistema, usei o que há de mais moderno no meu kit de Software Engineering:

* **Next.js 14**: Para uma aplicação Full Stack rápida com Server Components.
* **TypeScript**: Tipagem estritamente definida para evitar bugs bobos e facilitar a manutenção.
* **Prisma & PostgreSQL**: Para uma modelagem de dados eficiente e segura, lidando com utilizadores, serviços e barbearias.
* **Tailwind CSS & Shadcn/UI**: A dupla dinâmica para criar componentes visuais incríveis e consistentes.
* **NextAuth.js**: Autenticação robusta e simplificada.
* **Date-fns**: Para manipulação de datas e horários de forma precisa.

---

## 📂 Estrutura do Coração do Projeto

* `app/_actions/`: Onde a mágica do backend acontece com Server Actions (criar, eliminar e procurar agendamentos).
* `app/_components/`: Componentes reutilizáveis como itens de barbearia, resumos de reserva e modais de login.
* `prisma/schema.prisma`: A estrutura da nossa base de dados, o DNA do projeto.

---

## 🚀 Como ver a correr

Se quiseres testar na tua máquina, o processo é o padrão:
1. Clona o repositório.
2. Instala as dependências com `npm install`.
3. Configura as variáveis de ambiente (`.env`) para a tua base de dados e Google Auth.
4. Executa as migrações do Prisma: `npx prisma migrate dev`.
5. Dá um `npm run dev` e sê feliz!

---

*“Código limpo e café forte”* – esse é o lema. Este projeto reflete muito do que eu acredito em desenvolvimento: código que resolve problemas reais com uma cara profissional. Se tiveres qualquer dúvida ou quiseres trocar uma ideia sobre a arquitetura, é só chamar!

**Lucas Novelly Simão**
*Estudante de Engenharia de Software & Desenvolvedor de Soluções Digitais.*