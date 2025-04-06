document.addEventListener('DOMContentLoaded', function() {
    // chama a função para criar estrelas fixas
    createStars(80); 
    
    // chama a função para criar estrelas cadentes
    createShootingStars(150); // Aqui é a quantidade de estrelas cadente passada como parametro ...
});

function createStars(count) {
    const body = document.body;
    
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Aqui cria uma posição na tela ...
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        
        // Tamanho aleatório das estrelas fixas (minimo é 1 )
        const size = Math.random() * 5 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Opacidade aleatória para variar o brilho
        star.style.opacity = size;
        
        body.appendChild(star);
    }
}

function createShootingStars(count) {
    const body = document.body;
    
    for (let i = 0; i < count; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        
        // Posição aleatórias das estrelas cadentes, mas n por tamanho pra n ver quando carregar a pagina
        shootingStar.style.left = `${Math.random() * 90 + 5}%`;
        shootingStar.style.top = `${Math.random() * 30 + 10}rem`;
        
        // Duração da animação aleatória 
        const duration = Math.random() * 3 + 10;
        shootingStar.style.animationDuration = `${duration}s`;
       
        
        // Atraso aleatório para não começarem todas juntas
        shootingStar.style.animationDelay = `${Math.random() * 20}s`;
        
        body.appendChild(shootingStar);
    }
}