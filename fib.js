function fibonacci(n) {
  var i = 1, j = 0, k, t;
  for (k = 1; k <= Math.abs(n); k++) {
     t = i + j;
     i = j;
     j = t;
  	print(j);
  }
  
}

fibonacci(30)