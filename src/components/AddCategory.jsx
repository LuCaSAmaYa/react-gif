import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => { // (target) se puede desestructurar y poner target en vez de (event)
        setInputValue(event.target.value); // asi evitamos ponerlo event.target.value
    }

    const onSubmit = (event ) =>{
        event.preventDefault();
        if (inputValue.trim().length <= 1 ) return;
        
        //console.log(inputValue);
        //setCategories( categories => [ inputValue, ...categories ]);
        
        setInputValue('');
        onNewCategory ( inputValue.trim() );        
    }

  return (
    <form onSubmit={  onSubmit } >
        <input
            type= 'text'
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
    
  )
}
