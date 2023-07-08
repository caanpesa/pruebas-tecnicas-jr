//hasme una funcion que te retorne cuantos 9 hay del 1 al 100



const constarcien = ()=>{
    let count = 0

    for (let i = 1 ; i <=100 ; i++){
        
        const digito = String(i).split("");
        
        
        for (let j = 0; j < digito.length; j++){
            
            if(digito[j] === '9'){
                count++ ;
            }
        }

    }

    return count;
}

console.log(constarcien())