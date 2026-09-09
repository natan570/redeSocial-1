document.addEventListener("DOMContentLoaded", ()=>{
    const likeBtn= document.querySelector(".like-btn");
    const postMedia = document.querySelector(".post-media");
    if (!likeBnt) return;

    const likesCountSpan = likeBtn.querySelector(".likes-count");
    const bookmarkBtn = document.querySelector(".bookmark-btn");

    let isLiked = false;
    let baseLikes = 0;
    //texto inicial
    if(likesCountSpan){
        likesCountSpan.textContent = "0";
    }

    //numeros acima de 1mil
    function formatLikes (num){
        if(num >=1000){
            return(num/1000).toFixed(1)+"K"; 
        }      
        return num.toString();







})