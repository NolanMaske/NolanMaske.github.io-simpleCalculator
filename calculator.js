//Nolan Maske
//COMP 322
(() => {
  const results = [];

  // makes table and header
  document.write('<table>');
  document.write('<caption>Calculations</caption>');
  document.write('<tr><th>Number 1</th><th>Operation</th><th>Number 2</th><th>Result</th></tr>');
  
  //runs until the cancel button is pressed
  try {
    while (true) {
      const xStr = prompt('Enter the first number (x). Click Cancel to finish.');
      if (xStr === null) break;

      const op = prompt('Enter operator: +  -  *  /  % . Click Cancel to finish.');
      if (op === null) break;

      const yStr = prompt('Enter the second number (y). Click Cancel to finish.');
      if (yStr === null) break;

      const x = parseFloat(xStr);
      const y = parseFloat(yStr);

      let rowResult;
      let isValid = true;

      if (Number.isNaN(x) || Number.isNaN(y)) {
        rowResult = '<span class="error">Error: x and y must be numbers.</span>';
        isValid = false;
      } else {
        //computes based on what operation was used
        switch (op) {
          case '+': rowResult = x + y; break;
          case '-': rowResult = x - y; break;
          case '*': rowResult = x * y; break;
          case '/':
            if (y === 0) { rowResult = '<span class="error">Error: division by zero.</span>'; isValid = false; }
            else { rowResult = x / y; }
            break;
          case '%':
            if (y === 0) { rowResult = '<span class="error">Error: modulus by zero.</span>'; isValid = false; }
            else { rowResult = x % y; }
            break;
          default:
            rowResult = '<span class="error">Error: invalid operator.</span>';
            isValid = false;
        }
      }

      //displays all calculations or errors
      document.write(`<tr><td>${xStr}</td><td>${op}</td><td>${yStr}</td><td>${rowResult}</td></tr>`);
      if (isValid) results.push(Number(rowResult));
    }
  } catch (e) {
    document.write(`<tr><td colspan="4" class="error">Runtime error: ${e && e.message ? e.message : e}</td></tr>`);
  }

  document.write('</table>');

  // summary of valid results
  let min = '—', max = '—', avg = '—', total = '—';
  if (results.length > 0) {
    total = results.reduce((a, b) => a + b, 0);
    min = Math.min(...results);
    max = Math.max(...results);
    avg = total / results.length;
  }
  
  document.write('<table>');
  document.write('<caption>Summary (Valid Results Only)</caption>');
  document.write('<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>');
  document.write(`<tr><td>${min}</td><td>${max}</td><td>${avg}</td><td>${total}</td></tr>`);
  document.write('</table>');
})();
