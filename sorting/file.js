

let arr = [];
var n = 20;
for (let i = 0; i < n; i++) {

   arr[i] = Math.floor((Math.random() * 30) + 1);


   var board = document.createElement('div');
   board.id = "bar";
   board.className = "bar" + i;
   board.style.height = arr[i] * 10 + "px";
   document.getElementById('bars').appendChild(board);
}

var b_sort = document.getElementById('bs');
var s_sort = document.getElementById('ss');
b_sort.addEventListener('click', Bubble_Sort);
s_sort.addEventListener('click', Selection_Sort);




function swap(el1, el2) {

   const b1 = document.getElementsByClassName("bar" + el1);
   const b2 = document.getElementsByClassName("bar" + el2);

   const style1 = window.getComputedStyle(b1[0]);
   const style2 = window.getComputedStyle(b2[0]);

   const transform1 = style1.getPropertyValue("height");
   const transform2 = style2.getPropertyValue("height");

   b1[0].style.height = transform2;
   b2[0].style.height = transform1;

   let temp = arr[el1];
   arr[el1] = arr[el2];
   arr[el2] = temp;

}
const timer = ms => new Promise(res => setTimeout(res, ms))

async function Bubble_Sort() {
   for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {

         if (arr[j] > arr[j + 1]) {
            var b1 = document.getElementsByClassName("bar" + j);
            var b2 = document.getElementsByClassName("bar" + (j + 1));
            b1[0].style.background = "red";
            b2[0].style.background = "red";
            await timer(100);
            swap(j, j + 1)

            b1[0].style.background = "green";
            b2[0].style.background = "green";
         }
      }

   }
   check();

}
async function Selection_Sort() {
   for (let i = 0; i < (n - 1); i++) {
      let min_idx = i;
      var b1 = document.getElementsByClassName("bar" + i);
      var b2 = document.getElementsByClassName("bar" + min_idx);
      for (j = i + 1; j < n; j++) {
         b1[0].style.background = "red";
         var b3 = document.getElementsByClassName("bar" + j);
         b3[0].style.background = "#023020";
         if (arr[j] < arr[min_idx]) {
            b2[0].style.background = "green";
            min_idx = j;
            b2 = document.getElementsByClassName("bar" + min_idx);
            b2[0].style.background = "red";
         }
         await timer(100);
         if (j !== min_idx) {
            b3[0].style.background = "green";
         }
      }
      swap(min_idx, i);
      b1[0].style.background = "green";
      b2[0].style.background = "green";
   }
   check();
}
async function insertionSort(arr, n) {
   let i, key, j;
   for (i = 1; i < n; i++) {
      var b1 = document.getElementsByClassName("bar" + i);
      b1[0].style.background = "red";
      key = arr[i];
      j = i - 1;
      var b2 = document.getElementsByClassName("bar" + j);
      while (j >= 0 && arr[j] > key) {
         arr[j + 1] = arr[j];
         j = j - 1;
      }
      arr[j + 1] = key;
   }
}
async function check() {
   for (let i = 0; i < n; i++) {
      const b1 = document.getElementsByClassName("bar" + i);
      const b2 = document.getElementsByClassName("bar" + (i + 1));
      b1[0].style.background = "#023020";
      await timer(100);
      b1[0].style.background = "green";
   }
}
