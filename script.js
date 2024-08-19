let menuVisible = false;
//ফাংশন যা মেনু লুকায় বা দেখায়
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //আমি মেনু হাইড করার জন্য একটি বিকল্প নির্বাচন করেছি
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//দক্ষতার জন্য প্রয়জনিও অ্যানিমেশন ফাংশন
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


// স্কিল বার অ্যানিমেশন এবং স্ক্রোলিং এর জন্য প্রয়োজনীয় ফাংশন
window.onscroll = function(){
    efectoHabilidades();
} 