document.addEventListener('DOMContentLoaded', function() {
    // Initialize all weather animations
    initWindAnimation();
    initRainAnimation();
    initSunAnimation();
    initSnowAnimation();
});

// Wind Animation
function initWindAnimation() {
    const windCard = document.querySelector('.wind-card');
    
    // Create clouds that will move with the wind
    for (let i = 0; i < 3; i++) {
        createCloud(windCard, i);
    }
    
    // Create wind elements (streaks)
    for (let i = 0; i < 20; i++) {
        createWindElement(windCard);
    }
}

function createCloud(windCard, index) {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    
    // Different sizes and positions for each cloud
    const sizes = [60, 40, 30];
    const topPositions = [40, 90, 140];
    const delays = [0, 4, 2];
    
    cloud.style.width = sizes[index] + 'px';
    cloud.style.height = sizes[index] / 2 + 'px';
    cloud.style.top = topPositions[index] + 'px';
    cloud.style.left = '-80px';
    
    // Animate cloud movement with CSS animation
    cloud.style.animation = `moveCloud ${8 + index}s linear ${delays[index]}s infinite`;
    
    windCard.appendChild(cloud);
}

function createWindElement(windCard) {
    const windElement = document.createElement('div');
    windElement.className = 'wind-element';
    
    // Random size and position
    const size = Math.random() * 4 + 1;
    windElement.style.width = size + 'px';
    windElement.style.height = size + 'px';
    windElement.style.top = Math.random() * 350 + 'px';
    windElement.style.left = Math.random() * 250 + 'px';
    
    // Animate wind element with random horizontal distance
    const xDistance = Math.random() * 30 + 70;
    const yVariation = Math.random() * 10 - 5;
    
    // Create unique animation name for this element
    const animName = `moveWind_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Add keyframes for this specific wind element
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ${animName} {
            0% { 
                transform: translateX(0) translateY(0);
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% { 
                transform: translateX(${xDistance}px) translateY(${yVariation}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Apply the custom animation
    windElement.style.animation = `${animName} ${Math.random() * 3 + 1}s linear infinite`;
    
    windCard.appendChild(windElement);
    
    // Remove and recreate after animation completes
    setTimeout(() => {
        windElement.remove();
        style.remove();
        createWindElement(windCard);
    }, Math.random() * 3000 + 1000);
}

// Rain Animation
function initRainAnimation() {
    const rainCard = document.querySelector('.rain-card');
    
    // Create raindrops
    for (let i = 0; i < 40; i++) {
        createRaindrop(rainCard);
    }
}

function createRaindrop(rainCard) {
    const raindrop = document.createElement('div');
    raindrop.className = 'raindrop';
    
    // Random position
    raindrop.style.left = Math.random() * 250 + 'px';
    raindrop.style.top = -20 + 'px';
    
    // Animate raindrop with slightly random path
    const xVariation = Math.random() * 10 - 5;
    
    // Create unique animation name for this raindrop
    const animName = `falling_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Add keyframes for this specific raindrop
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ${animName} {
            0% { 
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% { 
                transform: translateY(350px) translateX(${xVariation}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Apply the custom animation
    const duration = Math.random() * 1 + 0.5;
    const delay = Math.random() * 2;
    raindrop.style.animation = `${animName} ${duration}s linear ${delay}s infinite`;
    
    rainCard.appendChild(raindrop);
}

// Sun Animation
function initSunAnimation() {
    const sunCard = document.querySelector('.sun-card');
    const sun = sunCard.querySelector('.sun');
    
    // Add pulsating effect to sun
    sun.style.animation = 'pulseSun 3s ease-in-out infinite';
    
    // Create sun rays
    for (let i = 0; i < 12; i++) {
        createSunRay(sunCard, i);
    }
}

function createSunRay(sunCard, index) {
    const ray = document.createElement('div');
    ray.className = 'ray';
    
    // Position ray around the sun
    const angle = (index / 12) * 360;
    ray.style.top = '80px';
    ray.style.left = '125px';
    ray.style.transform = `rotate(${angle}deg) translateY(-60px)`;
    
    // Animate ray with staggered timing
    ray.style.animation = `pulseRay 3s ease-in-out ${index * 0.25}s infinite`;
    
    sunCard.appendChild(ray);
}

// Snow Animation
function initSnowAnimation() {
    const snowCard = document.querySelector('.snow-card');
    
    // Create snowflakes
    for (let i = 0; i < 30; i++) {
        createSnowflake(snowCard);
    }
}

function createSnowflake(snowCard) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    
    // Random size
    const size = Math.random() * 5 + 3;
    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';
    
    // Random position
    snowflake.style.left = Math.random() * 250 + 'px';
    snowflake.style.top = -10 + 'px';
    
    // Random horizontal drift
    const xDrift = Math.random() * 100 - 50;
    
    // Create unique animation name for this snowflake
    const animName = `snowing_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Add keyframes for this specific snowflake
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ${animName} {
            0% { 
                transform: translateY(0) translateX(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 0.8;
            }
            100% { 
                transform: translateY(300px) translateX(${xDrift}px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Apply the custom animation
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 5;
    snowflake.style.animation = `${animName} ${duration}s linear ${delay}s infinite`;
    
    snowCard.appendChild(snowflake);
}