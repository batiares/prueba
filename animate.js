document.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro');
    const logoSpan = document.querySelectorAll('.logoo-parts');

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 200);
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 70);
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
            intro.style.display = 'none';
        }, 3000);
    }, 500);
});

function toggleEndingTooltip(card) {
    const tooltip = card.querySelector('.ending-tooltip');
    const overlay = document.querySelector('.tooltip-overlay');
    
    // Cerrar todos los tooltips primero
    document.querySelectorAll('.ending-tooltip.active').forEach(t => {
        t.classList.remove('active');
    });
    
    // Cerrar overlay si no hay tooltip para mostrar
    if (tooltip.classList.contains('active')) {
        if (overlay) overlay.classList.remove('active');
        return;
    }
    
    // Mostrar el tooltip seleccionado
    tooltip.classList.add('active');
    
    // Mostrar overlay
    if (overlay) overlay.classList.add('active');
    
    // Desplazamiento para centrar
    tooltip.style.top = '50%';
    tooltip.style.left = '50%';
}

document.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.edgerunners-intro');
    const logoParts = document.querySelectorAll('.logo-part');
    const introText = document.querySelector('.intro-text');

    // Secuencia de animación
    setTimeout(() => {
        // 1. Animación letra por letra del logo
        logoParts.forEach((part, index) => {
            setTimeout(() => {
                part.classList.add('active');
            }, index * 150); // 150ms entre cada letra
        });

        // 2. Mostrar texto después de que aparezca el logo
        setTimeout(() => {
            introText.classList.add('active');

            // 3. Transformar logo a versión "fade"
            setTimeout(() => {
                logoParts.forEach((part, index) => {
                    setTimeout(() => {
                        part.classList.remove('active');
                        part.classList.add('fade');
                    }, index * 50); // Efecto rápido
                });

                // 4. Ocultar toda la intro
                setTimeout(() => {
                    intro.style.opacity = '0';
                    intro.style.visibility = 'hidden';
                    intro.style.pointerEvents = 'none';
                    
                    // Mostrar contenido principal (asegurarse que no está oculto)
                    document.body.style.overflow = 'auto';
                }, 1000);
            }, 1500); // Tiempo entre texto y fade
        }, (logoParts.length * 150) + 500); // Tiempo después del logo
    }, 500); // Delay inicial
});

// animate.js - Versión corregida
document.addEventListener('DOMContentLoaded', () => {
    // Animación de intro (se mantiene igual)
    const intro = document.querySelector('.edgerunners-intro');
    const logoParts = document.querySelectorAll('.logo-part');
    const introText = document.querySelector('.intro-text');

    setTimeout(() => {
        logoParts.forEach((part, index) => {
            setTimeout(() => part.classList.add('active'), index * 150);
        });

        setTimeout(() => {
            introText.classList.add('active');
            setTimeout(() => {
                logoParts.forEach((part, index) => {
                    setTimeout(() => {
                        part.classList.remove('active');
                        part.classList.add('fade');
                    }, index * 50);
                });
                setTimeout(() => {
                    intro.style.opacity = '0';
                    intro.style.visibility = 'hidden';
                    intro.style.pointerEvents = 'none';
                    document.body.style.overflow = 'auto';
                }, 1000);
            }, 1500);
        }, (logoParts.length * 150) + 500);
    }, 500);

    // Manejo de modales CORREGIDO
    document.querySelectorAll('.edg-character-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Solo abrir si no es un clic en un modal ya abierto
            if (!e.target.closest('.edg-character-modal')) {
                const modal = card.querySelector('.edg-character-modal');
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Cerrar modal al hacer clic fuera del contenido
    document.querySelectorAll('.edg-character-modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
});

// Control del spoiler de Lucy
document.addEventListener('DOMContentLoaded', function() {
    const thumbnail = document.getElementById('spoilerThumbnail');
    const video = document.getElementById('spoilerVideo');
    const backgroundMusic = document.querySelector('audio');
    
    // Mostrar video al hacer clic en la imagen
    thumbnail.addEventListener('click', function(e) {
        e.stopPropagation();
        thumbnail.style.display = 'none';
        video.style.display = 'block';
        video.play();
        
        // Pausar música de fondo
        if (backgroundMusic && !backgroundMusic.paused) {
            backgroundMusic.pause();
        }
    });

    // Pausar video y mostrar imagen al hacer clic en el fondo
    document.getElementById('spoilerContent').addEventListener('click', function(e) {
        if (e.target === this) {
            video.pause();
            video.style.display = 'none';
            thumbnail.style.display = 'block';
            
            // Reanudar música si estaba sonando
            if (backgroundMusic && backgroundMusic.paused) {
                backgroundMusic.play();
            }
        }
    });

    // Pausar video cuando termina
    video.addEventListener('ended', function() {
        this.style.display = 'none';
        thumbnail.style.display = 'block';
    });
});

// Control de audio y video mejorado
document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.querySelector('audio');
    const spoilerTrigger = document.getElementById('spoilerTrigger');
    const spoilerContent = document.getElementById('spoilerContent');
    const spoilerThumbnail = document.getElementById('spoilerThumbnail');
    const spoilerVideo = document.getElementById('spoilerVideo');
    let isMusicPlaying = false;

    // Función para pausar música y reproducir video
    function playVideo() {
        // Guardar estado de la música
        isMusicPlaying = !backgroundMusic.paused;
        
        // Pausar música si está sonando
        if (isMusicPlaying) {
            backgroundMusic.pause();
        }
        
        // Mostrar y reproducir video
        spoilerContent.style.display = 'block';
        spoilerThumbnail.style.display = 'none';
        spoilerVideo.style.display = 'block';
        spoilerVideo.play().catch(e => console.error("Error al reproducir video:", e));
    }

    // Función para pausar video y reanudar música
    function pauseVideo() {
        spoilerVideo.pause();
        spoilerContent.style.display = 'none';
        
        // Reanudar música si estaba sonando
        if (isMusicPlaying) {
            backgroundMusic.play().catch(e => console.error("Error al reanudar música:", e));
        }
    }

    // Eventos principales
    spoilerTrigger.addEventListener('click', function() {
        if (spoilerContent.style.display === 'block') {
            pauseVideo();
        } else {
            playVideo();
        }
    });

    spoilerThumbnail.addEventListener('click', playVideo);

    // Controlar cuando el video termina
    spoilerVideo.addEventListener('ended', pauseVideo);

    // Controlar cuando el video se pausa manualmente
    spoilerVideo.addEventListener('pause', function() {
        if (isMusicPlaying && spoilerContent.style.display === 'block') {
            backgroundMusic.play().catch(e => console.error("Error al reanudar música:", e));
        }
    });

    // Inicialización de audio
    if (backgroundMusic) {
        backgroundMusic.muted = true;
        backgroundMusic.play()
            .then(() => {
                backgroundMusic.muted = false;
                isMusicPlaying = true;
            })
            .catch(e => {
                console.log("Autoplay bloqueado, se requerirá interacción del usuario");
                // Alternativa: Iniciar con cualquier interacción del usuario
                document.body.addEventListener('click', function initMusic() {
                    backgroundMusic.play()
                        .then(() => {
                            isMusicPlaying = true;
                            document.body.removeEventListener('click', initMusic);
                        })
                        .catch(e => console.error("Error al iniciar música:", e));
                }, { once: true });
            });
    }
});

// animate.js - Versión mejorada
document.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.nightcity-intro');
    const titleParts = document.querySelectorAll('.nightcity-title-part');
    const introText = document.querySelector('.intro-content p');
    
    // Animación mejorada para las letras
    titleParts.forEach((part, idx) => {
        setTimeout(() => {
            part.classList.add('nc-glow');
            // Añadir efecto de sonido (opcional)
            if(idx === 0) new Audio('./sounds/glitch.mp3').play().catch(e => {});
        }, idx * 100);
    });

    // Animación para el texto descriptivo
    setTimeout(() => {
        introText.style.animation = 'textFadeIn 1.5s forwards';
    }, 1200);

    // Efecto de humo mejorado
    setTimeout(() => {
        titleParts.forEach((part, idx) => {
            setTimeout(() => {
                part.classList.remove('nc-glow');
                part.classList.add('nc-smoke');
            }, idx * 40);
        });
    }, 3000);

    // Transición de salida con efectos adicionales
    setTimeout(() => {
        intro.style.opacity = '0';
        intro.style.top = '-100vh';
        intro.style.transform = 'rotateX(60deg)';
        setTimeout(() => {
            intro.style.display = 'none';
            // Mostrar contenido principal con fade in
            document.querySelector('.night-city-section').style.animation = 'contentFadeIn 2s forwards';
        }, 1000);
    }, 4500);
});
