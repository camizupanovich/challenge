import React from "react";

let users = [{nombre:"Pedro",edad:20,carrera:"Ingeniería",hobbie:"Futbol"},{nombre:"Rodrigo",edad:22,carrera:"Arquitectura",hobbie:"Bajo eléctrico"},{nombre:"Romina",edad:21,carrera:"Abogacía",hobbie:"Acrobacia"},{nombre:"Ana",edad:23,carrera:"Contadora",hobbie:"Astronomía"}]
export default function Screen1(){

    return(
        <div>
        <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Carrera</th>
                    <th scope="col">Hobbie</th>
                </tr>
            </thead>
            <tbody>
                {users?.map((u,i)=>
                <tr key={i}>
                    <td>{u.nombre}</td>
                    <td>{u.edad}</td>
                    <td>{u.carrera}</td>
                    <td>{u.hobbie}</td>
                </tr>)}
            </tbody>
        </table>
        </div>
    )
}