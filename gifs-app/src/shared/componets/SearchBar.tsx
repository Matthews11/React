import { useState } from "react";

interface Props {
    ph?: string;
    btn: string;

    onQuery: (query: string) => void;

}


export const SearchBar = ({ ph = 'Buscar', btn, onQuery }: Props) => {

    const [query, setQuery] = useState("");

    const handleSearch = () => {

        onQuery(query);

    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {

        if (event.key == "Enter") {
            handleSearch();
        }
    }

    return (
        <div className="search-container">

            <input

                type="text"
                placeholder={ph}
                value={query}
                onChange={(event) => setQuery(event.target.value)}

                onKeyDown={(event) => handleKeyDown(event)}
            />
            <button
                onClick={handleSearch}
            >{btn}</button>
        </div>
    )
}


