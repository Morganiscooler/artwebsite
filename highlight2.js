document.addEventListener("DOMContentLoaded", function() {
 
    let hue = 0;
    const loop = () => {
        document.body.style.setProperty("--color", 'hsl('+hue+',100%,43%)');
        hue+=5;
        if (hue > 360) {
            hue = 0;
        }
        requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  
});