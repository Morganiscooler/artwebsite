document.addEventListener("DOMContentLoaded", function() {
 
    let hue = 201;
    const loop = () => {
        document.body.style.setProperty("--otherColor", 'hsl('+hue+',100%,35%)');
        hue+=5;
        if (hue > 345) {
            hue = 201;
        }
        requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  
});