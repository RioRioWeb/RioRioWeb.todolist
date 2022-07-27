'use strict'

const add = document.querySelector('.add');
const check_ul = document.querySelector('.check');
const content_ul = document.querySelector('.table > .content');
const time_ul = document.querySelector('.table > .time');
const del_ul = document.querySelector('.table > .del');
const todo = document.querySelector('#todo');
const time = document.querySelector('#time');
const time2 = document.querySelector('#time2');
const time3 = document.querySelector('#time3');
const time4 = document.querySelector('#time4');


var today=new Date();

var year = today.getFullYear();
var month = today.getMonth()+1;
var week = today.getDay();
var day = today.getDate();

var week_ja= new Array("日","月","火","水","木","金","土");

document.querySelector('.date').textContent = month+"/"+day+"("+week_ja[week]+")";

add.addEventListener('click', () => {

  if(todo.value == "") {
    alert("todoを入力してください");
    return;
  } 
  // if(time.value == "" ||time2.value == "" ||time3.value == "" ||time4.value == "") {
  //   alert("時間帯を入力してください");
  //   return;
  // }

  const new_list1 = document.createElement('li');
  const new_checkbox = document.createElement('input');
  new_checkbox.type = "checkbox";
  new_list1.appendChild(new_checkbox); 
  check_ul.appendChild(new_list1)

  const new_list2 = document.createElement('li');
  const new_content = document.createElement('section');
  new_content.textContent = todo.value;
  new_list2.appendChild(new_content);
  content_ul.appendChild(new_list2)

  const new_list3 = document.createElement('li');
  const new_time = document.createElement('section');
  if(time.value == "" && time2.value == "" && time3.value == "" && time4.value == "") {
      new_time.textContent = "";
  } else if(time2.value == "" && time4.value == ""){
    new_time.textContent = time.value +"~"+ time3.value;
  } else if(time3.value == "" && time4.value == "") {
    new_time.textContent = time.value +":"+ time2.value+"~";
  } else if(time.value == "" && time2.value == ""){
    new_time.textContent =  "~"+ time3.value +":"+ time4.value;
  } else {
    new_time.textContent = time.value +":"+time2.value+"~"+ time3.value +":"+ time4.value;
  }
  new_list3.appendChild(new_time); 
  time_ul.appendChild(new_list3)

  const new_list4 = document.createElement('li');
  const new_del = document.createElement('button');
  new_del.type = "button";
  new_del.textContent = "削除";
  new_list4.appendChild(new_del); 
  del_ul.appendChild(new_list4)


  new_del.addEventListener('click', () => {
    new_list1.remove();
    new_list2.remove();
    new_list3.remove();
    new_list4.remove();
  });

});

  const del = document.querySelector('.del button');

  del.addEventListener('click', () => {
    del_ul.firstElementChild.remove();
    check_ul.firstElementChild.remove();
    content_ul.firstElementChild.remove();
    time_ul.firstElementChild.remove();
  });