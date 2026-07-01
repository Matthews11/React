interface Person{
    firstName: string;
    lastName:string;
    age:number;
    address:Address;
   
}

interface Address{
 
        postalCode:string;
        city:string;
   
}

const iroman: Person = {
    firstName: 'Jared',
    lastName: 'Pineda',
    age: 12,
    address: {
        postalCode: 'ABC-123"',
        city: 'New York',
    },
}

console.log(iroman.age)
 

