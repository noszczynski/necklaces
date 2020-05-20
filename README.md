const A = [5,3,4,0,1,2];

const solution = (A) => {
  let maxN = 1;
  for(let i=0; i < A.length; i++) {
      let nextN = i;
      let currLength = 0;
      do {
          nextN = A[nextN];
          currLength++;
      } while (nextN !== i);

      if(currLength > maxN) maxN = currLength;
  }

  return maxN;
}
