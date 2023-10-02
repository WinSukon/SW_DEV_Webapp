import {useState,useEffect,useRef} from 'react'

const TestHook = () => {
    




    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
        console.log(inputValue)
    });
    return ( 
        <div>
            
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <h1>Render Count: {count.current}</h1>
            </div>
        </div>
     );
}
 
export default TestHook;