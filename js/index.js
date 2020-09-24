window.addEventListener("load", function(event) {
const hiddenButton = document.getElementsByClassName('exit');
for (let button of hiddenButton) {
    button.addEventListener("click", e => {
    const projectInformationContent = button.parentElement;
    if (projectInformationContent.classList.contains('hidden')){
        projectInformationContent.classList.remove('hidden');
    }else{
        projectInformationContent.classList.add('hidden');
    }
  });
}

});