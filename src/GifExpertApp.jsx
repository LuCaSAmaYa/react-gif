import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    
    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return; //esta es una forma de verificar si incluye la categoria si la incluye no hace nada

        setCategories([ newCategory, ...categories]); //1era forma de agregar si lo quieren poner al inicio
        //setCategories([...categories, 'valorant']); //1era forma de agregar
        //setCategories( cat => [...cat, 'valorant']); //2da forma de agregar
    }
    

    

  return (
    <>
        {/*titulo*/}
        <h1>GifExpertApp</h1>

        {/*input*/}
        <AddCategory 

            
            //setCategories= { setCategories } 
            onNewCategory={ (value) => onAddCategory (value ) } //el primer argumento no imprta el nombre puede ser event o value
        />

        {/*listado de gifs*/}
        {/*<button onClick={ onAddCategory } >Agregar</button>*/}
        
        {
        categories.map( ( category ) =>  (
                <GifGrid 
                    key = { category } 
                    category = { category }  
                    />                
            ))
        }
            
            

        
            {/*Git item*/}



    </>
  )
}
