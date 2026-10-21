# HYPE ENTERTAINMENT — Experiência Audiovisual & Landing Page

Landing page cinematográfica de alto padrão desenvolvida para a **Hype Entertainment**, focada em agenciamento de artistas e conversão comercial direta via WhatsApp.

---

## ⚡ Tecnologias

- **React 19 + TypeScript**
- **Vite**
- **Tailwind CSS v4** (com design tokens editoriais)
- **GSAP & GSAP ScrollTrigger** (animações sincronizadas com o scroll, scrubbing, máscaras de texto e parallax)
- **Web Audio API** (ambientação sonora cinematográfica procedural opcional)
- **Lucide Icons**

---

## 🎭 As 5 Cenas Cinematográficas

1. **Cena 01 — Abertura Cinematográfica (Hero):**
   - Lettering monumental `HYPE` em outline e contraste extremo.
   - Vídeo de show em loop com fallback estático para conexões lentas.
   - Mensagem: *"O PALCO É SÓ O COMEÇO."*
   - CTA para o lineup e indicador discreto de scroll.
2. **Cena 02 — Manifesto da Marca:**
   - Tipografia monumental coreografada via GSAP ScrollTrigger.
   - *"NÃO É SÓ UM SHOW. É O QUE ACONTECE QUANDO TODO MUNDO ESTÁ LÁ."*
   - Revelação por máscaras e deslocamentos rítmicos.
3. **Cena 03 — Artistas (Comercial & Roster):**
   - Apresentação visual de cada artista com fotografia de palco em alta escala.
   - Botão individual **"CONTRATAR ESTE ARTISTA"** com mensagem wa.me pré-preenchida contendo os dados solicitados.
   - Modal com **Rider Técnico Executivo** (formato, duração, equipe, dimensões de palco).
   - Filtros dinâmicos por categoria de evento.
4. **Cena 04 — Eventos e Experiência:**
   - Composição editorial assimétrica com fotografia imersiva e parallax sutil.
   - 4 contextos confirmados: *Eventos Corporativos*, *Festivais*, *Eventos Privados* e *Festas & Celebrações*.
5. **Cena 05 — Chamada Final & Footer:**
   - Mensagem de impacto: *"SEU EVENTO. SUA HISTÓRIA. SUA HYPE."*
   - Botão geral de conversão **"VAMOS FALAR SOBRE SEU EVENTO"**.
   - Dados de contato, base operacional e links de redes sociais.

---

## 📱 Configuração do WhatsApp

O número comercial e os modelos de mensagens estão centralizados em [`src/config/agency.ts`](./src/config/agency.ts).

### Como alterar o número comercial:
Você pode configurar via arquivo `.env`:
```env
VITE_WHATSAPP_PHONE=5511999990000
```
*(Formato: código do país + DDD + número sem espaços ou traços)*

### Mensagem pré-formatada para contratação de artista:
```
Olá! Gostaria de contratar [NOME DO ARTISTA] para meu evento.

Data do evento:
Local:
Tipo de evento:
Público estimado:

Gostaria de consultar a disponibilidade e receber um orçamento.
```

---

## 🎨 Como Adicionar ou Alterar Artistas

Os dados dos artistas estão desacoplados em [`src/data/artists.ts`](./src/data/artists.ts). Para adicionar um novo artista, basta inserir um novo objeto no array `ARTISTS_DATA` com:
- `name`: Nome do artista
- `genre` e `subGenre`: Estilo musical
- `description`: Biografia curta e objetiva
- `eventTypes`: Categorias adequadas
- `images`: URLs das fotos autorizadas
- `rider`: Especificações técnicas de palco e equipe

---

## 🚀 Como Executar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```
