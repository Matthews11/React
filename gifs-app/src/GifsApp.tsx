import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/componets/CustomHeader';
import { SearchBar } from './shared/componets/SearchBar';
import { PreviousSearches } from './gifs/PreviousSearches';
import {GifList} from './gifs/GifList';

export const GifsApp = () => {
    return (
        <>
            {/* Componente HEADERS */}
            <CustomHeader titulo="Buscador de Gifs" descripcion="Descrubre y comparte el gifs perfecto"></CustomHeader>
          
            {/* Component SearchBar */}
            <SearchBar btn="Buscar" ph="Buscar Gifs"></SearchBar>

            {/* Componente PreviousSearches */}
            <PreviousSearches searches={['Naruto','Opera','Apple']}></PreviousSearches>
            {/* Componente Lista de gifs */}
           <GifList gif={mockGifs}></GifList>
        </>
    )
}


