/* =======================================================================
   By Vera Gourmet — catálogo de delícias artesanais com pedido via
   WhatsApp + Pix.

   👉 COMO TROCAR OS PRODUTOS:
   Na lista "produtos" abaixo, cada item tem:
     - nome:      nome do produto
     - descricao: uma frase curta
     - preco:     valor (use ponto, ex: 25.90)
     - imagem:    caminho da foto. Salve a foto na pasta "imagens" e
                  use "imagens/nome-do-arquivo.jpg"
                  (nomes sem espaço e sem acento: brigadeiro.jpg)

   Os produtos abaixo são EXEMPLOS — troque pelos da Vera.
   ======================================================================= */

// ======================= CONFIG DA LOJA =======================
const CONFIG = {
    nomeLoja: "By Vera Gourmet",
    whatsapp: "5551984245442",              // WhatsApp da Vera
    chavePix: "folhadeoutuno@hotmail.com",  // Pix da Vera
    // Link do perfil da loja no Google (onde o cliente avalia).
    linkAvaliacao: "https://www.google.com/maps/place/By+Vera+Gourmet+Delicias+Artesanais/@-30.1158487,-51.063674,17z/data=!3m1!4b1!4m6!3m5!1s0x43a58e550aebb55f:0x1f579b23d9219bf1!8m2!3d-30.1158534!4d-51.0610991!16s%2Fg%2F11s16pd4b8",
    produtos: [
        {
            categoria: "Bolos",
            nome: "Curd de Limão Siciliano",
            descricao: "Bolo de limão siciliano recheado com ganache de chocolate nobre branco e coberto com um delicioso curd de limão siciliano. Decorado com frutas. Peso 1,8 kg. Serve 12 pessoas.",
            preco: 180.00,
            imagem: "imagens/WhatsApp Image 2026-09-29 at 8.40.08 PM (1).jpeg"
        },
        {
            categoria: "Bolos",
            nome: "Bolo de Fubá com Glacê Real",
            descricao: "Bolo de fubá caseiro coberto com glacê real.",
            preco: 98.00,
            imagem: "imagens/WhatsApp Image 2026-09-29 at 8.40.07 PM (1).jpeg"
        },
        {
            categoria: "Bolos",
            nome: "Bolos Caseiros Simples e Decorados",
            descricao: "Bolos caseiros de diferentes sabores (a combinar), pintados com renda ou flores em glacê real ou buttercream. Podem levar glacê marmorizado. Vários tamanhos, pesos e estilos. Sob prévia encomenda.",
            preco: 98.00,
            imagem: "imagens/WhatsApp Image 2026-09-29 at 8.40.07 PM (3).jpeg"
        },
        {
            categoria: "Bolos",
            nome: "Bolo Vulcão de Cenoura",
            descricao: "Deliciosa massa de bolo caseiro de cenoura com cobertura de ganache de chocolate. Serve 16 pessoas.",
            preco: 110.00,
            imagem: "imagens/WhatsApp Image 2026-09-29 at 8.40.08 PM.jpeg"
        },
        {
            categoria: "Morangos",
            nome: "Morango do Dubai",
            descricao: "Delicioso brigadeiro de pistache com massa kadaif e morango, envolto em chocolate ao leite.",
            preco: 22.00,
            imagem: "imagens/WhatsApp Image 2026-09-29 at 10.02.11 PM.jpeg"
        },
        {
            categoria: "Morangos",
            nome: "Morango Cravejado de Maracujá",
            descricao: "Morango coberto com brigadeiro de maracujá e, em volta, cristais de caramelo e chocolate.",
            preco: 20.00,
            imagem: "imagens/WhatsApp Image 2026-09-29 at 10.02.12 PM.jpeg"
        },
        {
            categoria: "Morangos",
            nome: "Morango Cravejado de Leite Ninho",
            descricao: "Morango envolto em um irresistível brigadeiro de Ninho e coberto com cristais de caramelo.",
            preco: 20.00,
            imagem: "imagens/WhatsApp Image 2026-09-29 at 10.02.12 PM (1).jpeg"
        },
        {
            categoria: "Morangos",
            nome: "Morango do Amor",
            descricao: "Delicie-se com o morango do amor.",
            preco: 20.00,
            imagem: "imagens/WhatsApp Image 2026-09-29 at 10.02.12 PM (2).jpeg"
        },
        {
            categoria: "Morangos",
            nome: "Surpresa de Uva",
            descricao: "Delicie-se com a elegante Surpresa de Uva, feita com brigadeiro de chocolate ao leite, em formato de coração.",
            preco: 19.00,
            imagem: "imagens/WhatsApp Image 2026-09-29 at 10.02.12 PM (3).jpeg"
        },
        {
            categoria: "Velas Comestíveis",
            nome: "Fondue Iluminado",
            descricao: "Um delicioso fondue iluminado que pode ser acompanhado por morango. Sabor, aconchego e momentos especiais em cada mordida.",
            preco: 40.00,
            imagem: "imagens/WhatsApp Image 2026-09-29 at 10.30.30 PM.jpeg"
        },
        {
            categoria: "Velas Comestíveis",
            nome: "Vela Comestível de Manteiga Temperada",
            descricao: "Vela comestível de manteiga temperada com ervas, servida com pães, torradas, queijos, azeitonas e frios. Mais que uma vela, é uma experiência.",
            preco: 26.00,
            imagem: "imagens/WhatsApp Image 2026-09-29 at 10.30.31 PM.jpeg"
        },
        {
            categoria: "Crostine",
            nome: "Crostine de Tapioca Parmesão",
            descricao: "Crocante crostine de tapioca artesanal com parmesão e ervas. Ótimo acompanhamento para guacamole, patês e molhos. Embalagem de 70g.",
            preco: 19.90,
            imagem: "imagens/WhatsApp Image 2026-09-30 at 6.12.59 PM.jpeg"
        },
        {
            categoria: "Donuts",
            nome: "Donut de Chocolate com Frutas",
            descricao: "Deliciosa barrinha de chocolate ao leite, acompanhada de frutinhas: morango, framboesa, mirtilo, uva ou abacaxi.",
            preco: 18.00,
            imagem: "imagens/WhatsApp Image 2026-10-05 at 5.02.43 PM.jpeg"
        }
        // --- Adicione os outros produtos aqui quando tiver os preços ---
    ]
};
// ================================================================

// Avisos exibidos abaixo do título de cada categoria (opcional).
// Cada aviso tem um título e uma lista de itens (com emoji + texto).
const AVISOS_CATEGORIA = {
    "Bolos": {
        titulo: "Informações importantes",
        itens: [
            { icone: "⏳", texto: "Bolos e velas devem ser encomendados com <strong>48h de antecedência</strong>." },
            { icone: "🎂", texto: "Recheios dos bolos estruturados são <strong>combinados com o cliente</strong>." },
            { icone: "🚚", texto: "A <strong>entrega é por conta do cliente</strong> (Uber ou transporte próprio)." }
        ]
    }
};

const $ = (id) => document.getElementById(id);

// Pedido: mapa de "índice do produto" → quantidade.
const carrinho = {};

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Monta o catálogo, agrupando os produtos por categoria.
function montarCatalogo() {
    const catalogo = $("catalogo");
    catalogo.innerHTML = "";

    // Agrupa os índices dos produtos por categoria, preservando a ordem.
    const grupos = {};
    const ordemCategorias = [];
    CONFIG.produtos.forEach((p, i) => {
        const cat = p.categoria || "Outros";
        if (!grupos[cat]) {
            grupos[cat] = [];
            ordemCategorias.push(cat);
        }
        grupos[cat].push(i);
    });

    ordemCategorias.forEach((cat) => {
        // Título da categoria
        const titulo = document.createElement("h2");
        titulo.className = "categoria-titulo";
        titulo.id = "cat-" + cat.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")  // tira acentos
            .replace(/\s+/g, "-");
        titulo.textContent = cat;
        catalogo.appendChild(titulo);

        // Aviso da categoria (ex: encomenda com antecedência)
        const aviso = AVISOS_CATEGORIA[cat];
        if (aviso) {
            const box = document.createElement("div");
            box.className = "categoria-aviso";
            const itensHtml = aviso.itens.map((it) =>
                `<li><span class="aviso-icone">${it.icone}</span><span>${it.texto}</span></li>`
            ).join("");
            box.innerHTML = `
                <p class="aviso-titulo">${aviso.titulo}</p>
                <ul class="aviso-lista">${itensHtml}</ul>
            `;
            catalogo.appendChild(box);
        }

        // Grade de produtos da categoria
        const grade = document.createElement("div");
        grade.className = "categoria-grade";

        grupos[cat].forEach((i) => {
            const p = CONFIG.produtos[i];
            const card = document.createElement("div");
            card.className = "produto";
            card.innerHTML = `
                <div class="produto-imagem">
                    <img src="${p.imagem}" alt="${p.nome}" loading="lazy"
                         onerror="this.src='https://placehold.co/500x400/fce7d6/c2410c?text=Foto+do+produto'">
                </div>
                <div class="produto-info">
                    <span class="produto-nome">${p.nome}</span>
                    <span class="produto-desc">${p.descricao}</span>
                    <span class="produto-preco">${formatarPreco(p.preco)}</span>
                    <button class="btn-add" data-i="${i}">Adicionar ao pedido</button>
                </div>
            `;
            card.querySelector(".btn-add").addEventListener("click", () => adicionar(i));
            card.querySelector(".produto-imagem").addEventListener("click", () => abrirLightbox(p));
            grade.appendChild(card);
        });

        catalogo.appendChild(grade);
    });
}

function adicionar(i) {
    carrinho[i] = (carrinho[i] || 0) + 1;
    atualizarCarrinho();
    abrirCarrinho();
}

function alterarQtd(i, delta) {
    carrinho[i] = (carrinho[i] || 0) + delta;
    if (carrinho[i] <= 0) delete carrinho[i];
    atualizarCarrinho();
}

function totalItens() {
    return Object.values(carrinho).reduce((s, q) => s + q, 0);
}

function totalValor() {
    return Object.entries(carrinho).reduce(
        (s, [i, q]) => s + CONFIG.produtos[i].preco * q, 0);
}

function atualizarCarrinho() {
    const qtd = totalItens();
    $("contador").textContent = qtd;
    $("contador-flutuante").textContent = qtd;

    const lista = $("itens-carrinho");
    lista.innerHTML = "";

    if (qtd === 0) {
        lista.innerHTML = "<p class='carrinho-vazio'>Seu pedido está vazio.<br>Escolha suas delícias. 🍰</p>";
        $("finalizar").disabled = true;
    } else {
        $("finalizar").disabled = false;
        Object.entries(carrinho).forEach(([i, q]) => {
            const p = CONFIG.produtos[i];
            const item = document.createElement("div");
            item.className = "item-carrinho";
            item.innerHTML = `
                <img src="${p.imagem}" alt="${p.nome}"
                     onerror="this.src='https://placehold.co/100x100/fce7d6/c2410c?text=Foto'">
                <div class="item-dados">
                    <span class="item-nome">${p.nome}</span>
                    <span class="item-preco">${formatarPreco(p.preco)}</span>
                </div>
                <div class="item-qtd">
                    <button class="qtd-btn" data-i="${i}" data-d="-1">−</button>
                    <span>${q}</span>
                    <button class="qtd-btn" data-i="${i}" data-d="1">+</button>
                </div>
            `;
            item.querySelectorAll(".qtd-btn").forEach((b) => {
                b.addEventListener("click", () => alterarQtd(b.dataset.i, Number(b.dataset.d)));
            });
            lista.appendChild(item);
        });
    }

    $("total-carrinho").textContent = formatarPreco(totalValor());
}

function abrirCarrinho() {
    $("painel-carrinho").classList.add("aberto");
    $("overlay-carrinho").classList.remove("oculto");
}
function fecharCarrinho() {
    $("painel-carrinho").classList.remove("aberto");
    $("overlay-carrinho").classList.add("oculto");
}

// Finaliza: monta a mensagem do pedido e abre o WhatsApp.
function finalizar() {
    if (totalItens() === 0) return;

    let msg = `Olá, ${CONFIG.nomeLoja}! Quero fazer um pedido:\n\n`;
    Object.entries(carrinho).forEach(([i, q]) => {
        const p = CONFIG.produtos[i];
        msg += `• ${q}x ${p.nome} — ${formatarPreco(p.preco * q)}\n`;
    });
    msg += `\n*Total: ${formatarPreco(totalValor())}*`;

    const obs = $("observacoes").value.trim();
    if (obs) msg += `\n\nObservações: ${obs}`;

    msg += `\n\nChave Pix para pagamento: ${CONFIG.chavePix}`;
    msg += `\n(Envio o comprovante em seguida.)`;

    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");

    // Mostra a tela de agradecimento com o pedido de avaliação.
    mostrarObrigado();
}

// Link de avaliação: usa o da CONFIG; se vazio, cai numa busca pelo nome da loja.
function linkAvaliacao() {
    if (CONFIG.linkAvaliacao) return CONFIG.linkAvaliacao;
    const busca = encodeURIComponent(CONFIG.nomeLoja + " avaliações");
    return `https://www.google.com/search?q=${busca}`;
}

function mostrarObrigado() {
    $("btn-avaliar").href = linkAvaliacao();
    $("modal-obrigado").classList.remove("oculto");
    $("overlay-obrigado").classList.remove("oculto");
}

function fecharObrigado() {
    $("modal-obrigado").classList.add("oculto");
    $("overlay-obrigado").classList.add("oculto");
}

// Inicialização
$("nome-loja").textContent = CONFIG.nomeLoja;
montarCatalogo();
atualizarCarrinho();

$("abrir-carrinho").addEventListener("click", abrirCarrinho);
$("carrinho-flutuante").addEventListener("click", abrirCarrinho);
$("fechar-carrinho").addEventListener("click", fecharCarrinho);
$("overlay-carrinho").addEventListener("click", fecharCarrinho);
$("finalizar").addEventListener("click", finalizar);

// Link "Pedido" do menu abre o carrinho
$("link-pedido").addEventListener("click", (e) => {
    e.preventDefault();
    abrirCarrinho();
});

// Fechar a tela de agradecimento
$("fechar-obrigado").addEventListener("click", fecharObrigado);
$("overlay-obrigado").addEventListener("click", fecharObrigado);

// ===================== Lightbox (foto ampliada) =====================
function abrirLightbox(produto) {
    const lb = $("lightbox");
    const img = $("lightbox-img");
    img.src = produto.imagem;
    img.alt = produto.nome;
    $("lightbox-legenda").textContent = produto.nome;
    lb.classList.remove("oculto");
}

function fecharLightbox() {
    $("lightbox").classList.add("oculto");
    $("lightbox-img").src = "";
}

// Clicar no fundo escuro ou no X fecha
$("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox" || e.target.id === "lightbox-fechar") fecharLightbox();
});
// Tecla ESC também fecha
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharLightbox();
});

// Remove o selo flutuante "Powered by Netlify" (injetado pelo host).
(function removerBadgeNetlify() {
    function limpar() {
        // Procura por links/elementos do badge do Netlify e remove.
        document.querySelectorAll('a[href*="netlify.com"], [data-nf-variant], [class*="netlify"], [id*="netlify"]').forEach((el) => {
            const txt = (el.textContent || "").toLowerCase();
            if (txt.includes("netlify") || el.hasAttribute("data-nf-variant")) {
                // Remove o elemento e seus contêineres flutuantes.
                const alvo = el.closest("div,aside,section") || el;
                alvo.remove();
            }
        });
    }
    limpar();
    // O badge entra depois do carregamento, então observamos o DOM por um tempo.
    const obs = new MutationObserver(limpar);
    obs.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(() => obs.disconnect(), 15000);
})();
