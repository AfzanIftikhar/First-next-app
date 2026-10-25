export default function Cards({ title,description}){
    return(
        <>
        <div className = "bg-amber-700 p-4 w-fit rounded-2xl mt-5">
        <h1>{title}</h1>
        <p>{description}</p>
        </div>
        </>
    )
}