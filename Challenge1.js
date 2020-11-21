function lifePathNumber(birthdate) {
  var x = birthdate.split("-");
  var finaldigit = (x.map(e=>parseInt(e)).reduce((a,b)=>a+b )) % 9;
  console.log(finaldigit)
}
lifePathNumber("1879-03-14");