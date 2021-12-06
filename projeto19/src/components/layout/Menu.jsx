import React from "react"
import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = props => (
<aside className="Menu">
    <nav>
        <ul>
            <li>
         <Link to="/">Início</Link>
            </li>
            <li>
            <Link to="/Introducao">Introdução</Link>
            </li>
            <li>
            <Link to="/Hirtória">História</Link>
            </li>           
        </ul>
    </nav>
</aside>
)
export default Menu