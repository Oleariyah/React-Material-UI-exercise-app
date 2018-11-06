const myFunction = (x, y) => {
  //   Code here
  let count = [];
  for (let i = x+1;  i < y; i++) {
  if (x<y && (i % 2 == 0)){
    console.log(i);
   count == count.push(i);

  }}
  for (let i = y+1;  i < x; i++) {
if (x>y && (i % 2 == 1)){
    console.log(i);
     count == count.push(i);

      }

  }
return count;
}

myFunction(12, 0);