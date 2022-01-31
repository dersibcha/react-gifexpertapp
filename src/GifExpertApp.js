import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () => {

    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);
    
   // const handleAdd = () => {
        //let a = [...categories]
       // a.push('hunter x hunter');
        //setCategories(a);
       //  setCategories(['Hunter x Hunter',...categories]);
    //   setCategories(cats => ['Hunter x Hunter',...cats]); //callback
   // }
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>

           
            <ol>
                {
                    categories.map( category => 
                        <GifGrid category={category} 
                        key={category}/>
                 )
                }
                
            </ol>
           
        </>
    )

}

export default GifExpertApp;