import React, { useState } from 'react'
import "./style.css"
const Todo = () => {
    const [inputdata, setinputdata] = useState("")
    const [items, setItems] = useState([])

    // add items fun
    const addItem = () => {
        if (!inputdata) {
            alert("Plz enter data")
        }
        else {
            const mynewdata=([{
                id:new Date().getTime().toString(),
                name:inputdata,
            }]);
            setItems([...items, mynewdata])
            setinputdata("");
        }

    }
    // delete section
     const deleteItem=(index)=>{
            const updatedItem=items.filter((curElem)=>{
                return curElem.id!==index
        })
        setItems(updatedItem)
     }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="x" />
                        <figcaption>Add your list here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder='Enter your text' className='form-control' value={inputdata} onChange={(event) => setinputdata(event.target.value) &&
                            console.log(event.target.value)} />

                        <i className="fa fa-plus add-btn " onClick={addItem}></i>

                    </div>

                    {/* show our items */}
                    <div className="showItems">
                        {items.map((curElem) => {
                            return (
                                <div className="eachItem" key={curElem.id}>
                                    <h3>{curElem}</h3>
                                    <div className="toto-btn" >
                                        <i className="far add-btn fa-edit mx-3"></i>
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
                        <button className='btn effect04' data-sm-link-text="Remove All"><span> Check list</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo