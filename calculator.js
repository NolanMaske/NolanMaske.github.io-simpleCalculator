const results = [];
document.write('<table>');
document.write('<caption>Calculations</caption>');
document.write('<tr><th>Number 1</th><th>Operation</th><th>Number 2</th><th>result</th></tr>');

while(true){
  const xNum = prompt();
  if (xNum === null) break;

  cont oper = prompt();
  if (oper === null) break;

  const yNum = prompt();
  if (yNum === null) break;

  const x = parseFloat(xNum);
  const y = parseFloat(yNum);

  const xBad = isNaN(x);
  const yBad = isNan(y);

  let rowRes;
  let isValid = true;

  if (xBad || yBad){
    rowRes = '<span class = "error">wrong input number</span>';
    isValid = false;
  }
  else{
    switch(oper){
      case '+': rowRes = x + y;break;
      case '-': rowRes = x - y;break;
      case '*': rowRes = x * y;break;
      case '/': 
        if (y === 0){rowRes = '<span class = "error">division by zero</span>';isValid = false;}
        else {rowRes = x / y;}
        break;
      case '%':
        if (y === 0){rowRes = '<span class = "error">modulus by zero</span>';isValid = false;}
        else{rowRes = x % y;}
        break;
      default:
        rowRes = <'span class = "error">computation error</span>';
        isValid = false;
     }
    }
    document.write('<tr><td>${xNum}</td><td>${oper}</td><td>${yNum}</td><td>${rowRes}</td></tr>');
    if (isValid) results.push(Number(rowRes));
}
      
let min = '_', max = '_', avg = '_', total = '_';
if (results.length >0){
  total = results.reduce((a,b) => a+b, 0);
  min = Math.min(...results);
  max = Math.max(...results);
  avg = total / results.length;

document.write('<table>');
document.write('<caption>Summary (Valid Results Only)</caption>');
document.write('<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>');
document.wirte('<tr><td>${min}</td><td>${max}</td><td>${avg}</td><td>${total}</td></tr>');
document.write('</table>');
