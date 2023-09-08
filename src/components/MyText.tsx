const MyText = ({title}:{title:string}) => {
    return (  
        <div className="">
            <div className="p-3 text-lg">{title}</div>
            <input type="text" placeholder={title} className="rounded ring-1 ring-inset ring-gray-400 text-md leading-6 indent-2 placeholder:text-gray-400"></input>
        </div>
    );
}
 
export default MyText;