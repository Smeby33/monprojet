import React from 'react';
import anime from 'animejs';
import './formulaire.css';

const Animation = () => {
  // Utilisation d'Anime.js ici
  anime({
    targets: '.Fish',
    translateX: [
      { value: 250, duration: 10, delay:1 },
      { value: 0, duration: 10, delay: 2 }
    ],
    translateY: [
      { value: -40, duration: 10 },
      { value: 40, duration: 10, delay: 4 },
      { value: 0, duration: 10, delay: 5 }
    ],
    scaleX: [
      { value: 4, duration: 10, delay: 7, easing: 'easeOutExpo' },
      { value: 1, duration: 10 },
      { value: 4, duration: 10, delay:8, easing: 'easeOutExpo' },
      { value: 1, duration: 10 }
    ],
    scaleY: [
      { value: [1.75, 1], duration: 10 },
      { value: 2, duration: 10, delay: 10, easing: 'easeOutExpo' },
      { value: 1, duration: 10 },
      { value: 1.75, duration: 10, delay: 10, easing: 'easeOutExpo' },
      { value: 1, duration: 10 }
    ],
    easing: 'easeOutElastic(1, .8)',
    loop: true
  });

  return (
    <div className="Fish">
      
    </div>
  );
};

export default Animation;
