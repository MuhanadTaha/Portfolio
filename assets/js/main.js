//change color navbar


let navbar = document.getElementById('navbar');
window.addEventListener('scroll',function(){
    if(scrollY> 50){
        navbar.classList.add('new-bg-color')
    }
    else{
        navbar.classList.remove('new-bg-color')
    }
    navbar.style.transition = '1s'
})



//go to top

document.querySelector('.top').style.opacity = '0';
window.addEventListener('scroll', function(){
    let aboutPos = document.querySelector('#about').offsetTop; // بعد سيكشين الأباوت عن بداية الصفحة
    if(window.scrollY > aboutPos){
        document.querySelector('.top').style.opacity ='1'
    }
    else{
        document.querySelector('.top').style.opacity ='0'
    }

    document.querySelector('.top').style.transition = '0.7s'


})



let topbtn = document.querySelector('.top button');
topbtn.addEventListener('click',function(){
    window.scroll(
        {
            top:0,
            behavior:'smooth'

        }
    )
})



//loading screen

let body = document.body
body.style.overflow = "hidden" //بخفي السكرول أثناء التحميل
document.querySelector('.loading').style.opacity='1';
document.querySelector('.loading').style.visibility='visible';




window.addEventListener('load',function(){
    setTimeout(function(){
        document.querySelector('.loading').style.opacity='0';
        document.querySelector('.loading').style.visibility='hidden';
        document.querySelector('.loading').style.transition='1s'
        body.style.overflow = "auto" // برحع السكرول بعد ما يخلص التحميل


    },2000)
})
