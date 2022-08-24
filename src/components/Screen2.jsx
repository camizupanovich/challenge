import React, { useState } from "react";

export default function Screen2(){
    const [input, setInput]= useState(
        {
            nombre:'',
            edad:'',
        }
    )
    
    const handleChange = (e)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(
            validate({
                ...input, [e.target.name]:e.target.value
            }, e)
        );
    }

    const handleSubmit = (e)=>{
        console.log(input);
        setInput({nombre:'',edad:''})
    }

    //validacion con javascript

    const [errors,setErrors]=useState('')

    const validate = (entry,e)=>{
        const {name}= e.target;
        let error = [];
        switch(name){
            case 'nombre':
                if(!/^[/A-Za-z\s]+$/g.test(entry.nombre)){
                    error.nombre = 'ingrese un nombre valido';
                }
                if(entry.nombre.length>25){
                    error.nombre = 'el nombre no puede exceder 25 caracteres'
                }
                if(entry.nombre.length<1){
                    error.nombre='campo requerido'
                }
                break
            case 'edad':
                if(entry.edad<=0){
                    error.edad = 'ingrese edad'
                }
                if(entry.edad>=102){
                    error.edad = 'ingrese edad valida'
                }
                break
            default:
                return '';
            }
        return error;
    }

    return(
        <div>

            <form>
            <label>nombre
                <input  
                name='nombre'
                type='text'
                onChange={(e)=>handleChange(e)} 
                value={input.nombre}/>
            </label>
            {errors.nombre? <span>{errors.nombre}</span> :null}

            <label>Edad
                <input  
                name='edad'
                type='number'
                onChange={(e)=>handleChange(e)} 
                value={input.edad}/>
            </label>
            {errors.edad? <span>{errors.edad}</span> :null}
            </form>

            {errors.length<=0 && input.nombre.length>1 && input.edad>1?

             <button 
             className="btn btn-primary" 
             data-toggle="button" 
             aria-pressed="false" 
             autoComplete="off" 
             onClick={()=>handleSubmit()}>Submit
             </button> 
             : null}
    </div>)
}