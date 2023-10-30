import {useState} from 'react';
const MyText = ({title,onValChange}:{title:string,onValChange?:Function}) => {
    const [val,setVal] = useState<string>('');
    return (  
        <div className="">
            <div className="p-3 text-base">{title}</div>
            <div className="p-2">
                <input className="p-1 rounded ring-1 ring-inset ring-gray-400 text-md leading-6 indent-2 placeholder:text-gray-400"
                type="text" 
                placeholder={title}
                value={val}
                onChange={(e)=>{
                    setVal(e.target.value); 
                    if(onValChange){
                        onValChange(e.target.value);
                    }} }></input>
            </div>
        </div>
    );
}
 
export default MyText;