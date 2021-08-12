import React, {useEffect, useState} from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TodoItem from './TodoItem';
import TodoState from './TodoState';

function CenterPage() {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        getLocalTodos();
    }, [])

    useEffect(() => {
        saveToLocal();
    },[data])

    const handleInput = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, {
            title: input,
            completed: false,
            editing: false,
            key: Math.random().toString(16).slice(2)
        }])
        setFilteredData([...filteredData,{
            title: input,
            completed: false,
            editing: false,
            key: Math.random().toString(16).slice(2)
        }])
        setInput("");
    }


    const saveToLocal = () => {
        localStorage.setItem("todos", JSON.stringify(data));
    }

    const getLocalTodos = () => {
        if(localStorage.getItem("todos") === null){
            localStorage.setItem("todos", JSON.stringify([]));
        }else {
            setData(JSON.parse(localStorage.getItem("todos")));
            setFilteredData(JSON.parse(localStorage.getItem("todos")));
        }
    }

    return (
        <div className="md:ml-64 flex flex-col items-center">
            <h1 className="text-8xl text-gray-300">todos</h1>
            <div className="md:w-2/4 sm:w-3/4 mt-5">
                <form onSubmit={input ? handleSubmit : ""} className="w-full flex items-center bg-white border-b">
                    <ArrowForwardIosIcon className="text-gray-300 mx-4 transform rotate-90"/>
                    <input type="text" onChange={handleInput} value={input}
                        className=" text-2xl p-4 w-full placeholder-gray-300 placeholder-opacity-80 placeholder-italic outline-none" placeholder="What needs to be done?" />
                </form>
                {filteredData.map(item => (
                    <TodoItem 
                        key={item.key} item={item} data={data} setData={setData} filteredData={filteredData} setFilteredData={setFilteredData}
                    />
                ))}
                <TodoState amount={data.length} data={data} setData={setData} filteredData={filteredData} setFilteredData={setFilteredData}/>
            </div>
        </div>
    )
}

export default CenterPage
