// ===== ESTRUTURA DE PRODUTOS E ÁLBUNS =====
// Cada álbum contém variedades de cores/modelos do mesmo tipo

const albums = {
  // SEÇÃO 1: MAIS VENDIDAS (Ofertas & Promoções)
  maisVendidas: {
    title: '🔥 MAIS VENDIDAS',
    items: [
      {
        id: 'album-juliet',
        name: 'JULIET',
        thumbnail: './imagesproduto1.jpg',
        description: 'Modelo clássico com design versátil',
        colors: [
          { id: 1, name: 'Preto', img: './imagesproduto1.jpg', price: 199.99, old: 350 },
          { id: 2, name: 'Dourado', img: './imagesproduto2.jpg', price: 199.99, old: 350 },
          { id: 3, name: 'Prata', img: './imagesproduto3.jpg', price: 199.99, old: 350 }
        ]
      },
      {
        id: 'album-penny',
        name: 'PENNY',
        thumbnail: './imagesproduto2.jpg',
        description: 'Design redondo e moderno',
        colors: [
          { id: 4, name: 'Preto', img: './imagesproduto2.jpg', price: 179.99, old: 320 },
          { id: 5, name: 'Marrom', img: './imagesproduto3.jpg', price: 179.99, old: 320 },
          { id: 6, name: 'Transparente', img: './imagesproduto4.jpg', price: 179.99, old: 320 }
        ]
      },
      {
        id: 'album-double-x',
        name: 'DOUBLE-X',
        thumbnail: './imagesproduto3.jpg',
        description: 'Modelo esportivo e agressivo',
        colors: [
          { id: 7, name: 'Preto/Vermelho', img: './imagesproduto3.jpg', price: 229.99, old: 380 },
          { id: 8, name: 'Branco/Azul', img: './imagesproduto4.jpg', price: 229.99, old: 380 },
          { id: 9, name: 'Amarelo/Preto', img: './imagesproduto5.jpg', price: 229.99, old: 380 }
        ]
      }
    ]
  },

  // SEÇÃO 2: RADAR PREMIUM
  radarPremium: {
    title: 'RADAR PREMIUM DE R$350 POR R$199,99',
    items: [
      {
        id: 'album-radar-preto',
        name: 'RADAR - Preto',
        thumbnail: './imagesproduto1.jpg',
        description: 'Proteção máxima em preto clássico',
        colors: [
          { id: 10, name: 'Lente Cinza', img: './imagesproduto1.jpg', price: 199.99, old: 350 },
          { id: 11, name: 'Lente Espelhada', img: './imagesproduto2.jpg', price: 199.99, old: 350 },
          { id: 12, name: 'Lente Polarizada', img: './imagesproduto3.jpg', price: 199.99, old: 350 }
        ]
      },
      {
        id: 'album-radar-branco',
        name: 'RADAR - Branco',
        thumbnail: './imagesproduto2.jpg',
        description: 'Modelo branco com lentes variadas',
        colors: [
          { id: 13, name: 'Lente Azul', img: './imagesproduto2.jpg', price: 199.99, old: 350 },
          { id: 14, name: 'Lente Verde', img: './imagesproduto3.jpg', price: 199.99, old: 350 },
          { id: 15, name: 'Lente Amarela', img: './imagesproduto4.jpg', price: 199.99, old: 350 }
        ]
      }
    ]
  },

  // SEÇÃO 3: JULIETE DISPONÍVEIS
  julietesDisponiveis: {
    title: 'JULIETE DISPONÍVEIS',
    items: [
      {
        id: 'album-juliet-completo',
        name: 'JULIETE - Coleção Completa',
        thumbnail: './imagesproduto1.jpg',
        description: 'Todas as variações do modelo Juliete',
        colors: [
          { id: 16, name: 'Preto/Lente Cinza', img: './imagesproduto1.jpg', price: 199.99, old: 350 },
          { id: 17, name: 'Dourado/Lente Marrom', img: './imagesproduto2.jpg', price: 199.99, old: 350 },
          { id: 18, name: 'Prata/Lente Azul', img: './imagesproduto3.jpg', price: 199.99, old: 350 },
          { id: 19, name: 'Rosê/Lente Rosa', img: './imagesproduto4.jpg', price: 199.99, old: 350 },
          { id: 20, name: 'Preto/Lente Espelhada', img: './imagesproduto5.jpg', price: 199.99, old: 350 }
        ]
      }
    ]
  },

  // SEÇÃO 4: NOVOS ÁLBUNS
  novosAlbuns: {
    title: 'NOVOS MODELOS',
    items: [
      {
        id: 'album-dartboard',
        name: 'DARTBOARD',
        thumbnail: './imagesproduto4.jpg',
        description: 'Modelo novo com design futurista',
        colors: [
          { id: 21, name: 'Preto/Vermelho', img: './imagesproduto4.jpg', price: 249.99, old: 400 },
          { id: 22, name: 'Branco/Azul', img: './imagesproduto5.jpg', price: 249.99, old: 400 },
          { id: 23, name: 'Cinza/Verde', img: './imagesproduto1.jpg', price: 249.99, old: 400 }
        ]
      },
      {
        id: 'album-radar-ev',
        name: 'RADAR EV',
        thumbnail: './imagesproduto5.jpg',
        description: 'Versão evoluída do Radar',
        colors: [
          { id: 24, name: 'Preto', img: './imagesproduto5.jpg', price: 279.99, old: 450 },
          { id: 25, name: 'Branco', img: './imagesproduto1.jpg', price: 279.99, old: 450 },
          { id: 26, name: 'Cinza', img: './imagesproduto2.jpg', price: 279.99, old: 450 }
        ]
      },
      {
        id: 'album-acessorios-novo',
        name: 'ACESSÓRIOS',
        thumbnail: './imagesproduto3.jpg',
        description: 'Acessórios premium para seus óculos',
        colors: [
          { id: 27, name: 'Estojo Preto', img: './imagesproduto3.jpg', price: 49.99, old: 80 },
          { id: 28, name: 'Pano de Limpeza', img: './imagesproduto4.jpg', price: 19.99, old: 35 },
          { id: 29, name: 'Corrente para Óculos', img: './imagesproduto5.jpg', price: 39.99, old: 65 }
        ]
      }
    ]
  }
};

// ===== CONVERSÃO PARA FORMATO DE PRODUTOS COMPATÍVEL =====
// Gera um array de produtos a partir dos álbuns para compatibilidade com o código existente

const products = [];
let productId = 1;

// Adicionar produtos de "Mais Vendidas" como promoções
albums.maisVendidas.items.forEach(album => {
  album.colors.forEach(color => {
    products.push({
      id: productId++,
      title: `${album.name} - ${color.name}`,
      price: color.price,
      old: color.old,
      img: color.img,
      category: 'promocao',
      album: album.id
    });
  });
});

// Adicionar produtos de "Radar Premium" como destaques
albums.radarPremium.items.forEach(album => {
  album.colors.forEach(color => {
    products.push({
      id: productId++,
      title: `${album.name} - ${color.name}`,
      price: color.price,
      old: color.old,
      img: color.img,
      category: 'destaque',
      album: album.id
    });
  });
});

// Adicionar produtos de "Juliete Disponíveis" como destaques
albums.julietesDisponiveis.items.forEach(album => {
  album.colors.forEach(color => {
    products.push({
      id: productId++,
      title: `${album.name} - ${color.name}`,
      price: color.price,
      old: color.old,
      img: color.img,
      category: 'destaque',
      album: album.id
    });
  });
});

// Adicionar produtos de "Novos Álbuns"
albums.novosAlbuns.items.forEach((album, idx) => {
  const category = idx === 2 ? 'acessorio' : 'novidade'; // Último item é acessório
  album.colors.forEach(color => {
    products.push({
      id: productId++,
      title: `${album.name} - ${color.name}`,
      price: color.price,
      old: color.old,
      img: color.img,
      category: category,
      album: album.id
    });
  });
});

// ===== FUNÇÃO PARA OBTER VARIEDADES DE UM ÁLBUM =====
function getAlbumVarieties(albumId) {
  for (const section in albums) {
    const found = albums[section].items.find(item => item.id === albumId);
    if (found) {
      return found.colors;
    }
  }
  return [];
}

// ===== FUNÇÃO PARA OBTER INFORMAÇÕES DO ÁLBUM =====
function getAlbumInfo(albumId) {
  for (const section in albums) {
    const found = albums[section].items.find(item => item.id === albumId);
    if (found) {
      return found;
    }
  }
  return null;
}
