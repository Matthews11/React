const persona ={
    name: 'Tony',
    age:12,
    key:'Iroman'
};

const { name:iroman, key, age } = persona;

console.log({iroman, key, age});

interface Hero{
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = (hero:Hero) => {

    const {name,age,key,rank='sin rango'} = hero;

    return {
        keyName:key,
        user:{
            name:name,
            age:age,
        },
        rank: rank
    }
}

const {keyName,
     rank,
      user,
 } = useContext(persona);
const {name} = user;

console.log(keyName, rank,name)