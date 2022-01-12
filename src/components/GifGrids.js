
import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifGridItem } from "./GifGridItem";

export const GifGrids = ({category}) =>{
    
    //const [images, setImages] = useState([]); 
    const {data, loading} = useFetchGifs(category);

    //setImages(gifs)


    return (
        <div>
            <h3>{category}</h3> 
            {loading && <p>Cargando datos...</p> }
            <div className="card-grid">
                {
                    data.map( img => (
                        <GifGridItem
                            key={img.id} 
                            {...img} />
                        )   
                    )
                }
            </div>
                
        </div>
    )
}