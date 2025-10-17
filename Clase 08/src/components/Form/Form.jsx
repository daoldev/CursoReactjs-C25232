import { useState } from "react";

export const Form = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Contraseña:", pass);
        setEmail("");
        setNombre("");
        setPass("");
    }

        return (
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ingrese nombre" name="nombre" value={nombre} onChange={(e) => {
                    setNombre(e.target.value);
                }} />
                <input type="email" placeholder="Ingrese email" name="email" value={email}  onChange={(e) => {
                    setEmail(e.target.value);
                }} />
                <input type="password" placeholder="Ingrese contraseña" name="pass" value={pass}  onChange={(e) => {
                    setPass(e.target.value);
                }} />
                <input type="submit" value={"Enviar"} />
            </form>
        );
    };
