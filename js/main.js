var navBtn = document.getElementById('navBtn');
var department = document.getElementById('departmentBox');

navBtn.addEventListener('click', function(){
  department.classList.toggle('show-department')
})