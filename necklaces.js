const A = [5,3,4,0,1,2];

const solution = (A) => {
    let maxNumber = 1;
    const repetitions = new Set();
    
    for(let i=0; i < A.length; i++) {
        if(!repetitions.has(i)){
            let nextNumber = i;
            let currLength = 0;
            do {
                nextNumber = A[nextNumber];
                currLength++;
                repetitions.add(nextNumber);
            } while (nextNumber !== i);

            if(currLength > maxNumber) maxNumber = currLength;
        }
    }
    
    return maxNumber;
};

solution(A);
