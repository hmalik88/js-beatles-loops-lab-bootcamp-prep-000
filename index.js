function theBeatlesPlay (musicians, instruments) {
var newlist= [];
for (let i=0; i<musicians.length; i++) {
newlist[i]=`${musicians[i]} plays ${instruments[i]}`;
}
return newlist;
}

function iLoveTheBeatles (n) {
var emptyarray = [];
  do {
    emptyarray.push("I love the Beatles!");
    n++;
  }
  while (n<15);
  return emptyarray;
}