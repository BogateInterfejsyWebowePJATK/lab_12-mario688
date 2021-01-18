import React, { useState } from "react";

export default function Form() {
    const [number, setNumber] = useState(0);
    const [sum, setSum] = useState(0);
    const [NumberOfnumbers, setNumberOfnumbers] = useState(0);
    
    const submit = e => {
        e.preventDefault();
        setSum(parseInt(number) + parseInt(sum));
        setNumberOfnumbers(NumberOfnumbers+1);
        
    };
    const average=sum/NumberOfnumbers;
    return (
        <div className="CalcForm">
            <h1>Sum:{sum} Average:{average}</h1>
            
            <form onSubmit={submit}>
                    <input value={number} onChange={e => setNumber(e.target.value)}
                    type="text"
                    placeholder="Input number"
                    required
                />
                <button>ADD</button>
            </form>
        </div>
    );
}