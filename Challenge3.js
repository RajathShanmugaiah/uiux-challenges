function solve(str)
{
  var numUpper = (str.match(/[A-Z]/g) || []).length;    
  var numLower = (str.match(/[a-z]/g) || []).length;
  if(numUpper == numLower)
    {
      console.log( str.toLowerCase() );
    }
    else if(numUpper > numLower)
    {
      console.log( str.toUpperCase() );
    }
    else if(numUpper < numLower)
    {
        console.log( str.toLowerCase() );
    } 
}
let x = solve("JoHn");
let y = solve("joHn");
let z = solve("JOHn"); 