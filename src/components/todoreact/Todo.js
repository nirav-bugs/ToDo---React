import React, { useState , useEffect} from 'react'
import "./style.css"
const getLocaldata=()=>{
    const lists=localStorage.getItem("mytodolist")
    if(lists){
        return JSON.parse(lists);
    }
    else{
        return [];
    }
}
const Todo = () => {
    const [inputdata, setinputdata] = useState("")
    const [items, setItems] = useState(getLocaldata())
    const [isedit, setisedit] = useState("")
    const [tooglebtn,settooglebtn ] = useState(false)

    // add items fun 
    const addItem =async () => {
        if (!inputdata) {
            alert("Plz enter data")
        }
        else if(inputdata && tooglebtn) {
                setItems(
                    items.map((curElem)=>{
                        if(curElem.id===isedit){
                            return {...curElem,name:inputdata}
                        }
                        return curElem
                    })
                )
                setinputdata("") 
                setisedit(null)
                settooglebtn(false)
        }
        else {
            const mynewdata=({
                id:new Date().getTime().toString(),
                name:inputdata}
            ); 
            setItems([ ...items, mynewdata ])
            setinputdata("");
        }

    }
    // edit section  
const editItem=(index)=>{
     const item_todo_edit=items.find((curElem)=>{
            return curElem.id===index
     })
     setinputdata(item_todo_edit.name) 
     setisedit(index)
     settooglebtn(true)

}


    // delete section
     const deleteItem=(index)=>{
            const updatedItem=items.filter((curElem)=>{
                return curElem.id!==index
        })
        setItems(updatedItem)
     }
    //  remove all
     const deleteall=()=>{
         setItems([])
     }

    //  localstorage
    useEffect(()=>{
        localStorage.setItem("mytodolist",JSON.stringify(items))
    },[items])


    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="x" />
                        <figcaption>Add your list here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder='Enter your text' className='form-control' value={inputdata} onChange={(event) => setinputdata(event.target.value)    }/>
                    {tooglebtn ?  <i className="far add-btn fa-edit " onClick={addItem}></i>:  <i className="fa fa-plus add-btn " onClick={addItem}></i>}
                       

                    </div>

                    {/* show our items */}
                    <div className="showItems">
                        {items.map((curElem) => {
                            return (
                                <div className="eachItem" key={curElem.id}>
                                    <h3>{curElem.name}</h3>
                                    <div className="toto-btn" >
                                        <i className="far add-btn fa-edit mx-3" onClick={()=>{editItem(curElem.id)}}></i>
                                        <i className="far fa-trash-alt add-btn" onClick={( )=>{
                                            deleteItem(curElem.id)
                                        }}> </i>
                                    </div>
                                </div>
                            )

                        })}


                    </div>

                    {/* remove all btn */}
                    <div className="showItems">
                        <button className='btn effect04' data-sm-link-text="Remove All" onClick={deleteall}><span> Check list</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo