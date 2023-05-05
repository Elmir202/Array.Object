//task sort
let numbers = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
numbers.sort((a,b)=>a-b)
console.log(numbers);


//task union
var arr1=[1,2,3];
var arr2=[100,1,2,10];
var union=[...new Set([...arr1,...arr2])];
union.sort((a,b)=>a-b)
console.log(union);


// task remove
var arr=[NaN, 0, 15, false, -22, '',undefined, 47, null];
var res=arr.filter(value=>{
    return value!==null && value!==undefined && value!=='' && value!==false && value!==0 && !isNaN(value);
});
console.log(res);


//task sort
var element = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
 function customsort(a,b) 
  {
   if (a.title < b.title)
     return -1;
   if (a.title > b.title)
     return 1;
   return 0;
  }
 console.log(element.sort(customsort));


//task chain
function element(arr) { 
    for (var i = 0; i < arr.length - 1; i++) 
    {
      if (arr[i+1] % arr[i] != 0) {
        return false;            
      }
    }
    return true;
  }
  arr = [2, 4, 8, 16, 32]
  console.log("Original array: ",arr)
  console.log(element(arr));
  arr = [2, 4, 16, 32, 64]
  console.log("Original array: ",arr)
  console.log(element(arr));
  arr = [2, 4, 16, 32, 68]
  console.log("Original array: ",arr)
  console.log(element(arr));