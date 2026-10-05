 # By Vera Gourmet — Delícias Artesanais

Catálogo online com pedido direto pelo WhatsApp e pagamento via Pix.

## Sobre

Site de vitrine para a confeitaria **By Vera Gourmet**. O cliente escolhe os
produtos, monta o pedido e finaliza pelo WhatsApp com a mensagem já pronta.

- Catálogo por categorias (Bolos, Morangos, Velas Comestíveis)
- Carrinho de pedido com total automático
- Botão "Finalizar pelo WhatsApp"
- Horário de atendimento, formas de pagamento e endereço com mapa

## Como editar

- **Produtos:** edite a lista `produtos` no arquivo `app.js`.
  Cada produto tem `categoria`, `nome`, `descricao`, `preco` e `imagem`.
- **Fotos:** coloque as imagens na pasta `imagens/` e aponte o campo `imagem`.
- **WhatsApp / Pix:** ajuste `whatsapp` e `chavePix` no topo do `app.js`.
- **Cores:** as cores do site ficam nas variáveis no topo do `styles.css`.

Depois de editar, salve os arquivos e publique com:

```
git add .
git commit -m "Atualiza catálogo"
git push
```

O site atualiza sozinho em 1-2 minutos.

## Tecnologia

HTML, CSS e JavaScript puro. Hospedado no GitHub Pages.
