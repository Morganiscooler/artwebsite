let loading = document.getElementById("loading");
let loadingIcon = document.getElementById("loadingicon");

setTimeout(function(){
    loading.style.opacity = 0;
    loadingIcon.style.opacity = 0;
    setTimeout(function(){
        loadingIcon.style.display = "none";
        loading.style.display = "none";
    }, 750);

}, 300);
setTimeout(function(){
    loadingIcon.style.opacity = 0;
    setTimeout(function(){
        loadingIcon.style.display = "none";
    }, 750);

}, 310);