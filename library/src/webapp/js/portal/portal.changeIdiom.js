function selectContentFromIdiom() {
   
    const lang = document.documentElement.getAttribute('lang');
    console.log(lang);
    let frameObj = document.getElementsByClassName('Mrphs-toolBody Mrphs-toolBody--sakai-motd')[0].firstElementChild;
    let contenidors = frameObj.
        contentWindow.document.getElementsByClassName('contingutsMOTD');;
    console.log(contenidors);
    for (var i = 0; i < contenidors.length; i++) 
                   if (contenidors[i].id === lang) {
                       console.log("Tracto "+contenidors[i].id);
                       contenidors[i].style.display="block";
                       }
               else {
                contenidors[i].style.display="none";
               }
}
window.onload = function() {
    selectContentFromIdiom();
};

