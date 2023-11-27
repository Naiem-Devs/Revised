document.addEventListener('DOMContentLoaded',()=>{const $navbarBurgers=Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'),0);if($navbarBurgers.length>0){$navbarBurgers.forEach(el=>{el.addEventListener('click',()=>{const target=el.dataset.target;const $target=document.getElementById(target);el.classList.toggle('is-active');$target.classList.toggle('is-active');});});}
function onMouseOut(event){if(event.clientY<50){document.removeEventListener("mouseout",onMouseOut);document.getElementById("popup1").classList.add('is-active');}}
document.addEventListener("mouseout",onMouseOut);});$(document).ready(function(){let mobile=!$('.mobile-check').is(':visible')
// console.log(mobile)

$('.close-pop, .close-pop2').click(function(){$('#popup1').css('display','none');})

if(mobile){let scroll_status=0;let scroll_lowest=99999;let scroll=0;$(window).scroll(function(event){if(scroll_status==0){scroll_new=$(window).scrollTop();if(scroll_new>scroll){scroll_lowest=scroll_new}
scroll=scroll_new
if(scroll_lowest-scroll>100&&scroll_new<100){setTimeout(function(){scroll_status=1;$('#popup1').addClass('is-active')},250)}}});}})