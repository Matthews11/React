const iroman ={

    firstName:'Mathew',
    lastName:'Molina',
    age:12,
    addres:{
        postalcode:'ABC123',
        city:'New York',
    }
};

// crea un objeto independiente en base a iroman pero solo a las variables principales no arreglos u obejtos
// const spiderman = {...iroman};
// crea un clon para modificacion general
const spiderman = structuredClone(iroman);

spiderman.age=12;
spiderman.firstName='Jared';
spiderman.lastName='Pineda'
spiderman.addres.city='San jose';



console.log(iroman,spiderman);