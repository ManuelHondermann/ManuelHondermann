document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const navItems = document.querySelectorAll('.nav-item');
    const navCotizar = document.querySelector('.nav-item-cotizar');
    const pageContents = document.querySelectorAll('.page-content');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const calculateBtn = document.getElementById('calculateBtn');
    const footerYear = document.getElementById('currentYear');
    const galleryContainer = document.getElementById('galleryContainer');
   
    const galleryItems = [
        { category: 'sports', img: 'https://i.ibb.co/N6vN5Wgk/Whats-App-Image-2024-01-03-at-3-51-31-PM.jpg', title: 'Centro Deportivo', desc: 'Construcción completa' },
        { category: 'sports', img: 'https://i.ibb.co/5Wpd52SW/Whats-App-Image-2024-01-03-at-3-51-31-PM-1.jpg', title: 'Estructuras Deportivas', desc: 'Detalles de construcción' },
        { category: 'paving', img: 'https://i.ibb.co/vCrt7DHk/Whats-App-Image-2024-01-03-at-3-51-33-PM-1.jpg', title: 'Pavimentación Vial', desc: 'Trabajos de pavimentación' },
        { category: 'paving', img: 'https://i.ibb.co/pvKhXYzm/Whats-App-Image-2024-01-03-at-3-51-32-PM.jpg', title: 'Pavimentación Urbana', desc: 'Soluciones urbanas' },
        { category: 'paving', img: 'https://i.ibb.co/PZTFd7dW/20191105-164102.jpg', title: 'Proyecto de Pavimentación', desc: 'Trabajo de pavimentación especializada' },
        { category: 'paving', img: 'https://i.ibb.co/JXzdGNf/20190603-123653-1.jpg', title: 'Pavimentación Industrial', desc: 'Pavimentación para áreas industriales' },
        { category: 'paving', img: 'https://i.ibb.co/5Wp8Vycy/20190603-123649.jpg', title: 'Pavimentación Comercial', desc: 'Pavimentación para espacios comerciales' },
        { category: 'pools', img: 'https://i.ibb.co/6CbGqQ4/Whats-App-Image-2024-01-03-at-3-51-21-PM-2.jpg', title: 'Piscina Arquitectónica', desc: 'Diseño y construcción especializada' },
        { category: 'pools', img: 'https://i.ibb.co/Csv8wjF3/Whats-App-Image-2024-01-03-at-3-51-29-PM.jpg', title: 'Sistema de Piscina', desc: 'Tecnología avanzada' },
        { category: 'pools', img: 'https://i.ibb.co/PZbkfF6W/Whats-App-Image-2024-01-03-at-3-51-28-PM.jpg', title: 'Piscina Moderna', desc: 'Estilo contemporáneo' },
        { category: 'pools', img: 'https://i.ibb.co/PZbkfF6W/Whats-App-Image-2024-01-03-at-3-51-28-PM.jpg', title: 'Piscina Residencial', desc: 'Ambiente familiar' },
        { category: 'recreational', img: 'https://i.ibb.co/gZ3XZ2t9/Whats-App-Image-2024-01-12-at-5-19-36-PM.jpg', title: 'Pista Recreacional', desc: 'Espacio para actividades recreativas' },
        { category: 'recreational', img: 'https://i.ibb.co/691DNgW/Whats-App-Image-2024-01-03-at-3-51-29-PM-2.jpg', title: 'Pista Deportiva', desc: 'Superficie profesional para deportes' },
        { category: 'recreational', img: 'https://i.ibb.co/WNfBprMH/Whats-App-Image-2024-01-03-at-3-51-29-PM-1.jpg', title: 'Área Recreativa', desc: 'Diseño funcional y seguro' },
        { category: 'clubs', img: 'https://i.ibb.co/d0DzcC1k/Whats-App-Image-2026-01-09-at-9-53-51-AM-1.jpg', title: 'Country Club', desc: 'Proyecto integral' },
        { category: 'clubs', img: 'https://i.ibb.co/XZq9PCTM/Whats-App-Image-2026-01-09-at-9-53-51-AM.jpg', title: 'Instalaciones Premium', desc: 'Primera categoría' }
    ];
   
    function initGallery() {
        if (galleryContainer) {
            galleryContainer.innerHTML = '';
            galleryItems.forEach(item => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item fade-in';
                galleryItem.setAttribute('data-category', item.category);
                galleryItem.innerHTML = `
                    <img src="${item.img}" alt="${item.title}" loading="lazy">
                    <div class="gallery-overlay">
                        <h4 class="gallery-title">${item.title}</h4>
                        <p class="gallery-description">${item.desc}</p>
                    </div>
                `;
                galleryContainer.appendChild(galleryItem);
            });
            initAnimations();
        }
    }
   
    function filterGallery(category) {
        const items = document.querySelectorAll('.gallery-item');
        items.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.classList.add('visible');
                }, 10);
            } else {
                item.classList.remove('visible');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }
   
    function showPage(pageId, scrollToElement = null) {
        pageContents.forEach(page => {
            page.classList.remove('active');
        });
       
        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.classList.add('active');
           
            setTimeout(() => {
                if (scrollToElement) {
                    const element = document.getElementById(scrollToElement);
                    if (element) {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    } else {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }
                } else {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                        });
                }
            }, 100);
           
            setTimeout(initAnimations, 50);
        }
       
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-page') === pageId) {
                item.classList.add('active');
            }
        });
       
        if (navCotizar && pageId === 'quote') {
            navCotizar.classList.add('active');
        } else {
            navCotizar.classList.remove('active');
        }
       
        if (window.innerWidth < 768) {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
   
    function setupServiceCards() {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('click', function() {
                const service = this.getAttribute('data-service');
                let targetPage = 'services';
                let targetElement = null;
               
                switch(service) {
                    case 'planta-movil':
                        targetPage = 'services';
                        targetElement = 'planta-movil-service';
                        break;
                    case 'bombeo':
                        targetPage = 'services';
                        targetElement = 'bombeo-service';
                        break;
                    case 'concreto-prem':
                        targetPage = 'concrete';
                        break;
                }
               
                showPage(targetPage, targetElement);
            });
        });
    }
   
    function calculateCost() {
        const area = parseFloat(document.getElementById('area').value);
        const type = document.getElementById('type').value;
        const quality = document.getElementById('quality').value;
       
        if (!area || area <= 0) {
            alert('Por favor ingrese un área válida en metros cuadrados.');
            return;
        }
       
        let pricePerM3, qualityText;
        switch(quality) {
            case 'standard': pricePerM3 = 320; qualityText = "Estándar"; break;
            case 'high': pricePerM3 = 360; qualityText = "Alta"; break;
            case 'premium': pricePerM3 = 420; qualityText = "Premium"; break;
            case 'superior': pricePerM3 = 480; qualityText = "Superior"; break;
            default: pricePerM3 = 320; qualityText = "Estándar";
        }
       
        let thickness, typeText;
        switch(type) {
            case 'house': thickness = 0.10; typeText = "Losa para vivienda"; break;
            case 'building': thickness = 0.15; typeText = "Losa para edificio"; break;
            case 'industrial': thickness = 0.20; typeText = "Estructura industrial"; break;
            case 'light': thickness = 0.08; typeText = "Techos ligeros"; break;
            case 'foundation': thickness = 0.30; typeText = "Cimientos y bases"; break;
            default: thickness = 0.10; typeText = "Losa para vivienda";
        }
       
        const volume = area * thickness;
        const concreteCost = volume * pricePerM3;
        const additionalCosts = concreteCost * 0.15;
        const finalCost = concreteCost + additionalCosts;
        const roundedCost = Math.round(finalCost / 10) * 10;
       
        document.getElementById('resultDetails').innerHTML = `
            <strong>${area.toLocaleString()} m²</strong> de ${typeText}<br>
            Calidad: <strong>${qualityText}</strong><br>
            Volumen: <strong>${volume.toFixed(1)} m³</strong>
        `;
       
        document.getElementById('finalCost').textContent = roundedCost.toLocaleString('es-PE');
        document.getElementById('resultContainer').style.display = 'block';
       
        document.getElementById('resultContainer').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
   
    function initAnimations() {
        const elements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
       
        elements.forEach(el => {
            observer.observe(el);
        });
    }
   
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
       
        if (mainNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
   
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });
   
    if (navCotizar) {
        navCotizar.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('quote');
        });
    }
   
    document.querySelectorAll('.footer-links a[data-page]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });
   
    document.querySelectorAll('button[data-page]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });
   
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            filterGallery(filter);
        });
    });
   
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateCost);
    }
   
    document.addEventListener('click', function(e) {
        if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
   
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
   
    footerYear.textContent = new Date().getFullYear();
    initGallery();
    initAnimations();
    setupServiceCards();
   
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth >= 768) {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }, 250);
    });
   
    document.addEventListener('touchstart', function(e) {
        if (e.target.type === 'number' || e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT') {
            document.body.style.zoom = "100%";
        }
    });
   
    document.addEventListener('touchmove', function(e) {
        if (mainNav.classList.contains('active')) {
            e.preventDefault();
        }
    }, { passive: false });
   
    function handleUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const service = urlParams.get('service');
       
        if (service) {
            switch(service) {
                case 'planta-movil':
                    showPage('services', 'planta-movil-service');
                    break;
                case 'bombeo':
                    showPage('services', 'bombeo-service');
                    break;
                case 'concreto':
                    showPage('concrete');
                    break;
            }
        }
    }
   
    handleUrlParams();
});