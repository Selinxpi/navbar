
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // console.log(links.classList);
    
    // add and remove
    // if (links.classList.contains("show-links")){
    //     links.classList.remove("show-links");
    // } else {
    //     links.classList.add("show-links");
    // }

    // toggle
    links.classList.toggle("show-links");
});