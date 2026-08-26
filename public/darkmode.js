let html = document.documentElement

let darkModeToggle = document.getElementById("toggle")

function darkMode(){
if( localStorage.getItem('theme') ==='dark'|| (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
{
  html.classList.add('dark');
}else{
  html.classList.remove('dark');
}

darkModeToggle.addEventListener('click',()=>{
  html.classList.toggle('dark');


//guardar en localStorage
if(html.classList.contains('dark')){
  localStorage.setItem('theme','dark');
}else{
  localStorage.setItem('theme','light')
}
})};

export{darkMode}