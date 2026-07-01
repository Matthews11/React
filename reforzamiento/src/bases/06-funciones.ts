interface User{
    uid:string;
    userName:string;
}


function saludar (nombre:string):string{
    return `hola ${nombre}`;
    
}

// no cambia la referencia del objeto this
// const saludar2 = (nombre:string):string=> {
//     return `hola ${nombre}`;
// }

const saludar2 = (nombre:string)=> `hola ${nombre}`;


function getUser():User{
    return {
        uid:'ABC-123',
        userName:'Benson'
    };
}

// const getUser2 = ():object=>{
//     return {
//         uid:'ABC-123',
//         userName:'Benson'
//     };
// }

const getUser2 = ()=>({
        uid:'ABC-123',
        userName:'Benson'
});


// const message = saludar('Goku');
// const message2 = saludar2('Vegeta');

// const user = getUser();

const user2 = getUser2();

const myNumbers: number[] = [1,2,3,4,5]
// myNumbers.forEach(function(value){
//     console.log({value});
// });

// myNumbers.forEach((value)=>{
// console.log(value);
// });

myNumbers.forEach(console.log);


console.log({ user2})
