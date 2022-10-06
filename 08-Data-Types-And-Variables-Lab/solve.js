function solve(n){

    for(let i = 0; i < n; i++){
        
        for(let j = 0; j < n; j++){
            
            for(let k = 0; k < n; k++){
                let ch1 = String.fromCharCode(97 + i);
                let ch2 = String.fromCharCode(97 + j);
                let ch3 = String.fromCharCode(97 + k);

                console.log(`${ch1}${ch2}${ch3}`);
            }
        }
    }

}

solve('3');