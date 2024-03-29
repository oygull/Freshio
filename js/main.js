var navBtn = document.getElementById('navBtn');
var department = document.getElementById('departmentBox');
var sidebarBtn = document.getElementById('sidebarBtn');
var sidebar = document.getElementById('sidebar');
var closeSidebar = document.getElementById('closeSidebar');
var homeLink = document.getElementById('homeLink');
var sidebarInner = document.getElementById('sidebarInner');
var closeSidebarInner = document.getElementById('closeSidebarInner');
var shopLink = document.getElementById('shopLink');
var sidebarInner2 = document.getElementById('sidebarInner2');
var closeSidebarInner2 = document.getElementById('closeSidebarInner2');
var pagesLink = document.getElementById('pagesLink');
var sidebarInner3 = document.getElementById('sidebarInner3');
var closeSidebarInner3 = document.getElementById('closeSidebarInner3');

navBtn.addEventListener('click', function(){
  department.classList.toggle('show-department');
});
sidebarBtn.addEventListener('click', function(){
  sidebar.classList.add('show-sidebar');
});
closeSidebar.addEventListener('click', function(){
  sidebar.classList.remove('show-sidebar');
});
homeLink.addEventListener('click', function(){
  sidebarInner.classList.add('show-sidebar');
});
closeSidebarInner.addEventListener('click', function(){
  sidebarInner.classList.remove('show-sidebar');
});
closeSidebarInner2.addEventListener('click', function(){
  sidebarInner2.classList.remove('show-sidebar');
});
shopLink.addEventListener('click', function(){
  sidebarInner2.classList.add('show-sidebar');
});
pagesLink.addEventListener('click', function(){
  sidebarInner3.classList.add('show-sidebar');
});
closeSidebarInner3.addEventListener('click', function(){
  sidebarInner3.classList.remove('show-sidebar');
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 10,
    loop:true,
    nav:true,
    margin:20,
    autowidth:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },            
        960:{
            items:3
        },
        1200:{
            items:4
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 50) {
    document.getElementById("goTop").style.display = "block";
  } else {
    document.getElementById("goTop").style.display = "none";
  }
}