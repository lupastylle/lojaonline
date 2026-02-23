// ===== LIGHTBOX COM ZOOM E GIRO 360° =====

class Lightbox {
  constructor() {
    this.currentImageIndex = 0;
    this.images = [];
    this.zoomLevel = 1;
    this.rotation = 0;
    this.isZoomed = false;
  }

  openLightbox(imageUrl, title = 'Visualizar Foto', images = [imageUrl]) {
    this.images = images;
    this.currentImageIndex = 0;
    this.zoomLevel = 1;
    this.rotation = 0;

    const lightboxHTML = `
      <div class="lightbox-overlay" id="lightboxOverlay">
        <div class="lightbox-container">
          <div class="lightbox-header">
            <h3 class="lightbox-title">${title}</h3>
            <button class="lightbox-close" id="lightboxClose">×</button>
          </div>
          
          <div class="lightbox-body" id="lightboxBody">
            <img id="lightboxImage" class="lightbox-image" src="${this.images[0]}" alt="${title}" />
            ${this.images.length > 1 ? `
              <button class="lightbox-nav prev" id="lightboxPrev">❮</button>
              <button class="lightbox-nav next" id="lightboxNext">❯</button>
            ` : ''}
          </div>

          <div class="lightbox-controls">
            <button class="lightbox-btn" id="lightboxZoomIn">🔍+ Zoom In</button>
            <button class="lightbox-btn" id="lightboxZoomOut">🔍- Zoom Out</button>
            <button class="lightbox-btn" id="lightboxReset">↺ Resetar</button>
            <div class="zoom-level" id="zoomLevel">100%</div>
            ${this.images.length > 1 ? `
              <button class="lightbox-btn" id="lightboxRotate">↻ Girar</button>
            ` : ''}
          </div>

          ${this.images.length > 1 ? `
            <div class="lightbox-thumbnails" id="lightboxThumbnails">
              ${this.images.map((img, idx) => `
                <div class="lightbox-thumbnail ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                  <img src="${img}" alt="Foto ${idx + 1}" />
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `;

    // Remover lightbox anterior se existir
    const existingLightbox = document.getElementById('lightboxOverlay');
    if (existingLightbox) existingLightbox.remove();

    // Adicionar novo lightbox
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    // Vincular eventos
    this.bindEvents();
  }

  bindEvents() {
    const overlay = document.getElementById('lightboxOverlay');
    const closeBtn = document.getElementById('lightboxClose');
    const image = document.getElementById('lightboxImage');
    const zoomInBtn = document.getElementById('lightboxZoomIn');
    const zoomOutBtn = document.getElementById('lightboxZoomOut');
    const resetBtn = document.getElementById('lightboxReset');
    const rotateBtn = document.getElementById('lightboxRotate');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    const thumbnails = document.querySelectorAll('.lightbox-thumbnail');

    // Fechar lightbox
    closeBtn.addEventListener('click', () => this.closeLightbox());
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.closeLightbox();
    });

    // Zoom
    zoomInBtn.addEventListener('click', () => this.zoomIn());
    zoomOutBtn.addEventListener('click', () => this.zoomOut());
    resetBtn.addEventListener('click', () => this.resetZoom());

    // Clique na imagem para zoom
    image.addEventListener('click', () => {
      if (this.zoomLevel > 1) {
        this.resetZoom();
      } else {
        this.zoomIn();
      }
    });

    // Rotação
    if (rotateBtn) {
      rotateBtn.addEventListener('click', () => this.rotate());
    }

    // Navegação
    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.previousImage());
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.nextImage());
    }

    // Thumbnails
    thumbnails.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        const index = parseInt(thumb.dataset.index, 10);
        this.goToImage(index);
      });
    });

    // Teclado
    document.addEventListener('keydown', (e) => {
      if (!document.getElementById('lightboxOverlay')) return;
      
      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowLeft') this.previousImage();
      if (e.key === 'ArrowRight') this.nextImage();
      if (e.key === '+' || e.key === '=') this.zoomIn();
      if (e.key === '-') this.zoomOut();
      if (e.key === '0') this.resetZoom();
    });

    // Scroll para zoom
    image.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        this.zoomIn();
      } else {
        this.zoomOut();
      }
    });
  }

  zoomIn() {
    if (this.zoomLevel < 3) {
      this.zoomLevel += 0.2;
      this.updateImage();
    }
  }

  zoomOut() {
    if (this.zoomLevel > 1) {
      this.zoomLevel -= 0.2;
      this.updateImage();
    }
  }

  resetZoom() {
    this.zoomLevel = 1;
    this.rotation = 0;
    this.updateImage();
  }

  rotate() {
    this.rotation = (this.rotation + 90) % 360;
    this.updateImage();
  }

  previousImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      this.goToImage(this.currentImageIndex);
    }
  }

  nextImage() {
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
      this.goToImage(this.currentImageIndex);
    }
  }

  goToImage(index) {
    this.currentImageIndex = index;
    this.zoomLevel = 1;
    this.rotation = 0;
    this.updateImage();

    // Atualizar thumbnail ativo
    const thumbnails = document.querySelectorAll('.lightbox-thumbnail');
    thumbnails.forEach((thumb, idx) => {
      if (idx === index) {
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
      }
    });
  }

  updateImage() {
    const image = document.getElementById('lightboxImage');
    const zoomLevelDisplay = document.getElementById('zoomLevel');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');

    if (image) {
      image.src = this.images[this.currentImageIndex];
      image.style.transform = `scale(${this.zoomLevel}) rotate(${this.rotation}deg)`;
      
      if (this.zoomLevel > 1) {
        image.classList.add('zoomed');
      } else {
        image.classList.remove('zoomed');
      }

      zoomLevelDisplay.textContent = Math.round(this.zoomLevel * 100) + '%';
    }

    // Desabilitar botões de navegação se necessário
    if (prevBtn) {
      prevBtn.classList.toggle('inactive', this.currentImageIndex === 0);
    }
    if (nextBtn) {
      nextBtn.classList.toggle('inactive', this.currentImageIndex === this.images.length - 1);
    }
  }

  closeLightbox() {
    const overlay = document.getElementById('lightboxOverlay');
    if (overlay) {
      overlay.style.animation = 'fadeInLightbox 0.3s ease-out reverse';
      setTimeout(() => overlay.remove(), 300);
    }
  }
}

// Instância global do Lightbox
const lightbox = new Lightbox();

// Função auxiliar para abrir lightbox
function openImageLightbox(imageUrl, title = 'Visualizar Foto', images = [imageUrl]) {
  lightbox.openLightbox(imageUrl, title, images);
}
