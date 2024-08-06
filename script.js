//________________QUERYSELECTS___________________

const body = document.querySelector('body');
const box = document.querySelector('.box');

//________________CREATEELEMENTS___________________

const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const saitico1 = document.createElement('div');
const saitico2 = document.createElement('div');
const saitico3 = document.createElement('div');
const fico1 = document.createElement('i');
const tico1 = document.createElement('i');
const gico1 = document.createElement('i');
const fico2 = document.createElement('i');
const tico2 = document.createElement('i');
const gico2 = document.createElement('i');
const fico3 = document.createElement('i');
const tico3 = document.createElement('i');
const gico3 = document.createElement('i');
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');
const name1 = document.createElement('h1');
const name2 = document.createElement('h1');
const name3 = document.createElement('h1');
const job1 = document.createElement('h2');
const job2 = document.createElement('h2');
const job3 = document.createElement('h2');
const starblok1 = document.createElement('div');
const starblok2 = document.createElement('div');
const starblok3 = document.createElement('div');
const star1 = document.createElement('i');
const star2 = document.createElement('i');
const star3 = document.createElement('i');
const star4 = document.createElement('i');
const star5 = document.createElement('i');
const star11 = document.createElement('i');
const star21 = document.createElement('i');
const star31 = document.createElement('i');
const star41 = document.createElement('i');
const star51 = document.createElement('i');
const star12 = document.createElement('i');
const star22 = document.createElement('i');
const star32 = document.createElement('i');
const star42 = document.createElement('i');
const star52 = document.createElement('i');
const buttons1 = document.createElement('div');
const buttons2 = document.createElement('div');
const buttons3 = document.createElement('div');
const bt1 = document.createElement('h1');
const bt2 = document.createElement('h1');
const bt3 = document.createElement('h1');
const bt4 = document.createElement('h1');
const bt5 = document.createElement('h1');
const bt6 = document.createElement('h1');

//________________CLASSLISTS___________________

div1.classList.add('div1');
div2.classList.add('div2');
div3.classList.add('div3');
saitico1.classList.add('saitico1');
saitico2.classList.add('saitico2');
saitico3.classList.add('saitico3');
fico1.classList.add('fa-brands', 'fa-facebook');
tico1.classList.add('fa-brands', 'fa-twitter');
gico1.classList.add('fa-brands', 'fa-github');
fico2.classList.add('fa-brands', 'fa-facebook');
tico2.classList.add('fa-brands', 'fa-twitter');
gico2.classList.add('fa-brands', 'fa-github');
fico3.classList.add('fa-brands', 'fa-facebook');
tico3.classList.add('fa-brands', 'fa-twitter');
gico3.classList.add('fa-brands', 'fa-github');
img1.classList.add('img1');
img2.classList.add('img2');
img3.classList.add('img3');
name1.classList.add('name1');
name2.classList.add('name2');
name3.classList.add('name3');
job1.classList.add('job1');
job2.classList.add('job2');
job3.classList.add('job3');
starblok1.classList.add('star1')
starblok2.classList.add('star2')
starblok3.classList.add('star3')
star1.classList.add('fa-solid', 'fa-star');
star2.classList.add('fa-solid', 'fa-star');
star3.classList.add('fa-solid', 'fa-star');
star4.classList.add('fa-solid', 'fa-star');
star5.classList.add('fa-solid', 'fa-star');
star11.classList.add('fa-solid', 'fa-star');
star21.classList.add('fa-solid', 'fa-star');
star31.classList.add('fa-solid', 'fa-star');
star41.classList.add('fa-regular', 'fa-star');
star51.classList.add('fa-regular', 'fa-star');
star12.classList.add('fa-regular', 'fa-star');
star22.classList.add('fa-regular', 'fa-star');
star32.classList.add('fa-regular', 'fa-star');
star42.classList.add('fa-regular', 'fa-star');
star52.classList.add('fa-regular', 'fa-star');
buttons1.classList.add('but1');
buttons2.classList.add('but1');
buttons3.classList.add('but1');
bt1.classList.add('bt1');
bt2.classList.add('bt2');
bt3.classList.add('bt3');
bt4.classList.add('bt4');
bt5.classList.add('bt5');
bt6.classList.add('bt6');

//________________APENDS___________________

body.appendChild(box)
box.append(div1, div2, div3);
div1.append(saitico1, img1, name1, job1, starblok1, buttons1);
div2.append(saitico2, img2, name2, job2, starblok2, buttons2);
div3.append(saitico3, img3, name3, job3, starblok3, buttons3);
saitico1.append(fico1, tico1, gico1);
saitico2.append(fico2, tico2, gico2);
saitico3.append(fico3, tico3, gico3);
starblok1.append(star1, star2, star3, star4, star5);
starblok2.append(star11, star21, star31, star41, star51);
starblok3.append(star12, star22, star32, star42, star52);
buttons1.append(bt1, bt2);
buttons2.append(bt3, bt4);
buttons3.append(bt5, bt6);

//__________________STYLES___________________

img1.src = '/HOME-WORK/DAY1/Style/image.png';
img2.src = '/HOME-WORK/DAY1/Style/image copy.png';
img3.src = '/HOME-WORK/DAY1/Style/photo_2024-06-10_11-52-44.jpg';

//________________INNERHTML___________________

name1.innerHTML = 'Muhammmadsurur Abdulloev';
name2.innerHTML = 'Muhammad Mulloev';
name3.innerHTML = 'Islam Makhachev';
job1.innerHTML = 'SENIOR-DEVELOPER';
job2.innerHTML = 'JUNIOR-CODER';
job3.innerHTML = 'BEKOR';
bt1.innerHTML = 'About Me';
bt2.innerHTML = 'Hire Me';
bt3.innerHTML = 'About Me';
bt4.innerHTML = 'Hire Me';
bt5.innerHTML = 'About Me';
bt6.innerHTML = 'Hire Me';