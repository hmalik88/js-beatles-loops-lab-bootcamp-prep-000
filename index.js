// add solution here
function theBeatlesPlay (musicians, instruments) {
var newlist= [];
for (let i=0; i<musicians.length+1; i++) {
newlist[i]=`${musicians[i]} plays ${instruments[i]}`;
  return newlist;
}
}