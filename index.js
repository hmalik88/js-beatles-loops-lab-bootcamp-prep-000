function theBeatlesPlay (musicians, instruments) {
var newlist= [];
for (let i=0; i<musicians.length; i++) {
newlist[i]=`${musicians[i]} plays ${instruments[i]}`;
}
return newlist;
}
function johnLennonFacts(facts) {
  let i = facts.length;
  while (facts.length>0) {
    facts[i] = facts[i] + "!!!";
  }
  return facts;
}