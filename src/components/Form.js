import React from "react";
import '../App.css'

export default function Form() {

    const [name, setName] = React.useState()
    const [surname, setSurname] = React.useState()
    const [gender, setGender] = React.useState("Male")
    const [car, setCar] = React.useState("Coupe")
    const [answer, setAnswer] = React.useState(false)
    const [send, setSend] = React.useState(false)
    const submit = e => {
        e.preventDefault();
        setSend(true)
    }
    const reset = () => {
        setName("")
        setSurname("")
        setGender("Male")
        setCar("Coupe")
        setAnswer(false)
    }
    return (
        <div id="form">
            {!send ? 
                <form onSubmit={submit}>
                    <label>Name:</label>
                    <input value={name} type="text" required onChange={(e) => setName(e.target.value)}/><br/>
                    <label>Surname:</label>
                    <input value={surname} type="text" required onChange={(e) => setSurname(e.target.value)}/><br/>
                    <label>Sex:</label><br/>
                    <label>M:</label><input name="gender" type="radio" onChange={() => setGender("Male")}/>
                    <label>F:</label><input name="gender" type="radio" onChange={() => setGender("Female")}/><br/>
                    <label>Favorite type of car</label>
                    <select value={car} onChange={e => setCar(e.target.value)} required>
                        <option value="Coupe">Coupe</option>
                        <option value="SUV">SUV</option>
                        <option value="Sedan ">Sedan</option>
                        <option value="Green">Minivan</option>
                    </select><br/>
                    <label>Check if u have a car:</label>
                    <input type="checkbox" checked={answer} onChange={() => setAnswer(!answer)} /><br/>
                    <button onClick={() => reset()}>Reset</button>
                    <input type="submit" value="submit"/>
                </form>
            :
                <table >
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td>Surname:</td>
                            <td>{surname}</td>
                        </tr>
                        <tr>
                            <td>Sex</td>
                            <td>{gender}</td>
                        </tr>
                        <tr>
                            <td>Favorite typ of car:</td>
                            <td>{car}</td>
                        </tr>
                        <tr>
                            <td>have a car:</td>
                            <td>{answer ? "yes" : "no"}</td>
                    </tr>
                    </tbody>
                </table>    
            } 
        </div>
    );
}