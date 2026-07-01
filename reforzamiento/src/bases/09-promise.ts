const promesa = new Promise <number>((resolve, reject)=>{


    setTimeout(()=>{
// quiero el dinero 
   // reject('Me robaron el dinero');
    resolve(100);
    },200);


});


promesa.then(
    (miDineroEsRegresado)=>{
        console.log(`tengo el dinero pa ${miDineroEsRegresado}`);
    }
).catch((reason)=>{
    console.warn(reason)
}).finally(()=>{
    console.log('No se le vuelve a prestar')
});