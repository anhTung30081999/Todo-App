import React, {useState} from 'react'
import ClearIcon from '@material-ui/icons/Clear';

function TodoItem({ item, data, setData, filteredData, setFilteredData}) {
    const [show, setShow] = useState(false);
    const [clear, setClear] = useState(false);
    const [input, setInput] = useState("");


    const handleChange = () => {
        setShow(!show);
    }

    const handleBlurEvent = () => {
        setShow(false);
    }

    const handleMouseover = () => {
        setClear(true);
    }

    const handleMouseleave = () => {
        setClear(false);
    }

    const handleCheckbox = () => {
            setData(data.map(i => {
                if(i.key === item.key){
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return i;
            }))

            setFilteredData(filteredData.map(i => {
                if(i.key === item.key){
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return i;
            }))

    }

    const handleClear = () => {
        setData(data.filter(i => i.key !== item.key));
        setFilteredData(filteredData.filter(i => i.key !== item.key));
    }

    const handleUpdate = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setData(data.map(i => {
            if(i.key === item.key){
                return {
                    ...item,
                    title: input
                }
            }
            return i;
        }))

        setFilteredData(data.map(i => {
            if(i.key === item.key){
                return {
                    ...item,
                    title: input
                }
            }
            return i;
        }))

        handleBlurEvent();
    }

    return (
        <form className="flex justify-between items-center w-full bg-white border-b" onSubmit={handleSubmit} onMouseOver={handleMouseover} onMouseLeave={handleMouseleave}> 
            <input type="checkbox" defaultChecked={item.completed} onChange={handleCheckbox} className="mx-4 form-checkbox h-6 w-6"/>
            
            {show
                ? <input type="text" 
                    className="flex-1 p-4 text-lg" defaultValue={item.title} onChange={handleUpdate} onBlur={handleBlurEvent} autoFocus/>
                : <p className={`p-4 text-lg transition-all duration-1000 ${item.completed ? "line-through text-gray-500" : ""}`}  onDoubleClick={handleChange}>{item.title}</p>
            }
            <ClearIcon onClick={handleClear} className={`text-gray-400 mx-4 ${!clear ? "invisible" : ""}`}/>
        </form>
    )
}

export default TodoItem
