import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/componets/CustomHeader';
import { SearchBar } from './shared/componets/SearchBar';
import { PreviousSearches } from './gifs/PreviousSearches';
import {GifList} from './gifs/GifList';
import { useState } from 'react';



export const GifsApp = () => {


    const [previousTerm, setPreviousTerm] = useState('Opera');

    const handleTermClicked = (term:string)=>{
        console.log({term});
        setPreviousTerm(term);
    }

    const handleSearch = (query:string)=>{
        console.log({query});
    }
    return (
        <>
            {/* Componente HEADERS */}
            <CustomHeader titulo="Buscador de Gifs" descripcion="Descrubre y comparte el gifs perfecto"></CustomHeader>
          
            {/* Component SearchBar */}
            <SearchBar btn="Buscar" ph="Buscar Gifs"
            onQuery={handleSearch}
            ></SearchBar>

            {/* Componente PreviousSearches se envia la funcion como referencia */}
            <PreviousSearches searches={[previousTerm]} onLabelClicked={handleTermClicked}></PreviousSearches>

            {/* Componente Lista de gifs */}
           <GifList gif={mockGifs}></GifList>
        </>
    )
}


