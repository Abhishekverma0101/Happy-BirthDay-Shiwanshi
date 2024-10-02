let angle = 0;
function rotateCarousel() {
    angle = (angle + 1) % 360; 
    document.querySelector('.carousel-inner').style.transform = `rotateY(${angle}deg)`;
}
setInterval(rotateCarousel, 20); 



const leafImages = [
    'https://static.vecteezy.com/system/resources/thumbnails/020/008/596/small/3d-love-heart-balloon-valentine-3d-illustration-png.png',
    'https://static.vecteezy.com/system/resources/previews/019/025/560/original/3d-realistic-party-decoration-helium-balloon-png.png',
    'https://wallpapers.com/images/high/3d-heart-balloon-png-kyi56-7qkt5o2w0hg5oia6.png',
    'https://cdn3d.iconscout.com/3d/premium/thumb/love-balloon-4940550-4112654.png?f=webp',
    'https://png.pngtree.com/png-vector/20230803/ourmid/pngtree-2024-text-effect-balloon-gold-vector-png-image_9120378.png',
    'https://ouch-cdn2.icons8.com/nG3e_MxjGZ9ObHz-9mNeWzi8azMN4LYgBSM3qutRJ9U/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzMv/YmUyYmQ3ZWMtNDZh/OC00MjI1LWJjNDYt/YjllZjYwOGJlNmMz/LnBuZw.png',
    'https://purepng.com/public/uploads/large/purepng.com-pink-balloonsballoonrubber-balloonlatex-balloonpink-1421526449999zrf3m.png'
];

const numberOfLeaves =25; // Adjust the number of leaves
const container = document.querySelector('.flying-balloons');

for (let i = 0; i < numberOfLeaves; i++) {
    const leaf = document.createElement('img');
    leaf.src = leafImages[Math.floor(Math.random() * leafImages.length)];
    leaf.classList.add('balloon');
    leaf.style.left = `${Math.random() * 100}vw`;
    leaf.style.animationDuration = `${Math.random() * 10 + 7}s`; // Speed variation
    leaf.style.animationDelay = `${Math.random() * 5}s`; // Delay variation
    leaf.style.width = `${Math.random() * 50 + 60}px`; // Random size
    container.appendChild(leaf);
}




