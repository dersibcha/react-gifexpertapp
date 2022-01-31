import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GigGridItem } from './GigGridItem';


export const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs(category);


    //useEffect( () => {
    //    getGifs(category).then(setImages);
    //}, [ category ])
    
  
        return (
            <>
            <h3 className="card animate__animated animate__fadeIn">{category}</h3>
            { loading && <p className="card animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                {
                    images.map( img => (
                        <GigGridItem key={img.id} {...img}/>
                    ))
                }
                
            </div> 
            </>
        )
}
