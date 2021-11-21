import React from 'react'
import { Link } from 'react-router-dom'
import "./about.css"

const About = () => {
    return (
        < div className=" contText">
            <div className=" noCardText">
                <h2>This app was crated by Carlos Janon as a challenge for Alkemy </h2> <p>Challenge Frontend
                    Deberás desarrollar un cliente para un Blog.
                    El mismo debe ser armado en React, y consumir los datos de una JSON Placeholder, una API
                    que expone datos ficticios en formato JSON.</p>
                <p> Criterios a evaluar
                    ● Diseño responsive, moderno e intuitivo.
                    ● Debe utilizarse Bootstrap para permitir que el proyecto sea responsive, y media queries
                    para los elementos personalizados que se desarrollen.
                    ● Conocimientos básicos de React.
                    ● Validación de formularios utilizando la librería Formik.
                    ● Buenas prácticas de codificación.
                    ● Buenas prácticas para nombre de rutas.
                    ● Código modularizado en componentes reutilizables e independientes.</p>
                <p>● Email: challenge@alkemy.org</p>
                <p> ● Password: react</p>
                <Link to='login'><button
                    className="btn btn btn-outline-light btn-lg goToSearch"
                >Login</button></Link></div>
        </div>
    )
}
export default About
