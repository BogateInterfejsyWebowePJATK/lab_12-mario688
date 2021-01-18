import React, { useState } from "react";

export default function Form() {
    const [number, setNumber] = useState("");
    
    
    const submit = e => {
        e.preventDefault();
        setSum(parseInt(number) + parseInt(sum));
        setNumberOfnumbers(NumberOfnumbers+1);
        
    };
    const average=sum/NumberOfnumbers;
    return (
        <>
            <h1>Sum:{sum} Average:{average}</h1>
            
            <form onSubmit={submit}>
                    <input value={number} onChange={e => setNumber(e.target.value)}
                    type="text"
                    placeholder="Insert number"
                    required
                />
                <button>Calculate</button>
            </form>
        </>
    );
}