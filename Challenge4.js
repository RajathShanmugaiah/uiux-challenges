function calculateTime(speed) {
  let TotalDistance = 5 * 80,time = 0;
  if(speed > 0){
    time = TotalDistance / speed;
  }
  return (time+" sec");
}
console.log(calculateTime(100));