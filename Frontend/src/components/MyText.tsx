const MyText = ({title}:{title:string}) => {
    return (  
        <div className="">
            <div className="p-3 text-base">{title}</div>
            <div className="p-2">

            <input type="text" placeholder={title} className="p-1 rounded ring-1 ring-inset ring-gray-400 text-md leading-6 indent-2 placeholder:text-gray-400"></input>

            </div>
        </div>
    );
}
 
export default MyText;