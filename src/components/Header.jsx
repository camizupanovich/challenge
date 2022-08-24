import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="bg-dark">
            <ul className="nav nav-pills nav-fill nav-justified">
                <li className="nav-item" ><Link className="nav-link text-info" to='/'>Screen 1</Link></li>
                <li className="nav-item" ><Link className="nav-link text-info" to='/1'>Screen 2</Link></li>
            </ul>
        </header>
    )
}