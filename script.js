const heading = document.querySelector('#heading');
const keyframes = {
    // opacity: [0, 1],
    // translate: ['0 50px', 0],
    color: ['#Ef66', '#fc2', '#0c6', '#0bd']
};

const options = {
    duration: 2000,
    direction: 'alternate',
    iterations: Infinity,
    // easing: 'ease',
}
heading.animate(keyframes, options);