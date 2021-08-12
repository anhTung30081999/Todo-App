import React from 'react'

function TodoState({amount, data, setData, filteredData, setFilteredData}) {

    const handleClear = () => {
        setData(data.filter(i => i.completed === false));
        setFilteredData(data.filter(i => i.completed === false));
    }

    const handleOption = (e) => {
        switch(e.target.value){
            case "active":
                setFilteredData(data.filter(i => i.completed === false));
                break;
            case "completed":
                setFilteredData(data.filter(i => i.completed === true));
                break;
            default:
                setFilteredData(data);
                break;
        }
    }

    return (
        <div className="flex justify-between w-full bg-white text-gray-500 p-2">
            <div>
                <p>{amount} items left</p>
            </div>
            <select onChange={handleOption} name="todos" className="flex justify-center">
                <option value="all" className="mr-1 px-1 border border-gray-200 rounded">All</option>
                <option value="active" className="mr-1 px-1 border border-gray-200 rounded">Active</option>
                <option value="completed" className="mr-1 px-1 border border-gray-200 rounded">Completed</option>
            </select>
            <div>
                <button 
                    onClick={handleClear}
                    className={`hover:underline ${data.find(i => i.completed === true) ? "visible" : "invisible"}`}>Clear completed
                </button>
            </div>
        </div>
    )
}

export default TodoState
