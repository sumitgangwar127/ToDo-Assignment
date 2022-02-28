import "./list.css"

let List =({element,name, age , data, setData})=>{

    const deleteHandler =()=>{
        setData(data.filter((el)=> el.id !==element.id))
        // console.log(element.id);
    }
 
    return(
        <div className="list">
            <ul>{name}</ul>
            <ul>{age}</ul>
            <button onClick={deleteHandler} className="clr-btn" >CLEAR</button>
        </div>
    )
}

export default List;