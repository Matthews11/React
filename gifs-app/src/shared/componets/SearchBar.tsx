
interface Props{
    ph?:string;
    btn:string;
}


export const SearchBar = ({ph ='Buscar',btn}:Props) => {
    return (
        <div className="search-container">
            <input type="text" placeholder={ph} />
            <button>{btn}</button>
        </div>
    )
}


