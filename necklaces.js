const A = [5,3,4,0,1,2];

const solution = (A) => {
    let maxNumber = 1;
    
    for(let i=0; i < A.length; i++) {
        let nextNumber = i;
        let currLength = 0;
        do {
            nextNumber = A[nextNumber];
            currLength++;
        } while (nextNumber !== i);
        
        if(currLength > maxNumber) maxNumber = currLength;
    }
    
    return maxNumber;
};

solution(A);
