let pageup_btn = document.getElementById('pageup');
function scrollfunction() {
  document.body.scrollTop = 0; //chrome
  document.documentElement.scrollTop = 0; //edge , firefox 
}






let nextButton = document.getElementById('next-btn')
let prevButton = document.getElementById('prev-btn')
let index = 1
let default_slide = document.getElementById('slide1')



function NextButton() {

  let slide = document.getElementById('slide'+index)
  // alert('test')
  if (index == 1 ){
    default_slide.classList.remove('default-slide')
    index +=1
    console.log(index , slide);
    slide.style.backgroundColor = 'red'
  }


  hero_section = document.getElementById('hero-data')
  hero_section.classList.remove('hero-data-animation')
  setTimeout(() => {
    hero_section.classList.add('hero-data-animation')
  }, 50)
}


