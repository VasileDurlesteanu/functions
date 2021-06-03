function pow(x, n) {
  let result = x;
  
  for (i=1; n>1; i++) {
    result = x**n;
  } 

  return result
}