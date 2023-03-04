import React ,{useState} from 'react'
import "./style.css"
const Todo = () => {
    const [inputdata,setinputdata]=useState("")
  return (
    <>
    <div className="main-div">
        <div className="child-div">
            <figure>
                <img src="./images/todo.svg" alt="image" />
                <figcaption>Add your list here</figcaption>
            </figure>
            <div className="addItems">
                <input type="text" placeholder='Enter your text' className='form-control' value={inputdata} onChange={(event)=>setinputdata(event.target.value) &&
                console.log(event.target.value)}/>
                
                <i className="fa fa-plus add-btn "></i>

            </div>
            
            {/* show our items */}
            <div className="showItems">
                <div className="eachItem">
                    <h3>Apple</h3>
                    <div className="toto-btn">
                    <i className="far add-btn fa-edit mx-3"></i>
                    <i className="far fa-trash-alt add-btn"></i>
                    </div>
                </div>
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