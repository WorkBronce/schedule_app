import React, { useState, useEffect } from 'react';
import './TodoList.css';
import circleIcon from '../images/circle.png';
import circle_cross from '../images/circle_cross.png';
import checkIcon from '../images/circle_check.png';
import userImage from '../images/user.png';
import todoListJson from '../data/todoList.json';
import crossIcon from '../images/cross.png';

const TodoList = ({ contact, onCancel }) => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [dateValue, setDateValue] = useState('');  // New state for the date
    const [editing, setEditing] = useState(false);
    const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
    const [showInputFields, setShowInputFields] = useState(false); // Control visibility of input fields

    useEffect(() => {
        const contactTodo = todoListJson.find(item => item.id === contact.id);
        if (contactTodo) {
            setTodos(contactTodo.tasks);
        }
    }, [contact.id]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescriptionValue(e.target.value);
    };

    const handleDateChange = (e) => {
        setDateValue(e.target.value);  // Handle date input change
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '' && descriptionValue.trim() !== '' && dateValue.trim() !== '') {
            const newTodo = { task: inputValue, status: "toBeDone", description: descriptionValue, date: dateValue };
            setTodos([...todos, newTodo]);
            resetInputFields();
            setShowInputFields(false); // Hide input fields after adding
        }
    };

    const handleEdit = () => {
        if (selectedTaskIndex !== null) {
            const updatedTodos = todos.map((todo, index) =>
                index === selectedTaskIndex ? { ...todo, task: inputValue, description: descriptionValue, date: dateValue } : todo
            );
            setTodos(updatedTodos);
            resetInputFields();
            setEditing(false);
            setSelectedTaskIndex(null);
            setShowInputFields(false); // Hide inputs after editing
        } else {
            setShowInputFields(true);  // Show inputs if editing is triggered
        }
    };

    const handleDeleteTodo = () => {
        if (selectedTaskIndex !== null) {
            const updatedTodos = todos.filter((_, i) => i !== selectedTaskIndex);
            setTodos(updatedTodos);
            resetInputFields();
            setSelectedTaskIndex(null);
        }
    };

    const handleSelectTask = (index) => {
        setSelectedTaskIndex(index);
        const selectedTask = todos[index];
        setInputValue(selectedTask.task);
        setDescriptionValue(selectedTask.description);
        setDateValue(selectedTask.date);  // Populate date input with selected task's date
        setEditing(true);
        setShowInputFields(true);  // Show inputs when a task is selected for editing
    };

    const resetInputFields = () => {
        setInputValue('');
        setDescriptionValue('');
        setDateValue('');  // Reset date input field
    };

    const cycleStatus = (currentStatus) => {
        return currentStatus === "toBeDone" ? "completed" : currentStatus === "completed" ? "cancelled" : "toBeDone";
    };

    const handleStatusClick = (index) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, status: cycleStatus(todo.status) } : todo
        );
        setTodos(updatedTodos);
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case "completed":
                return checkIcon;
            case "cancelled":
                return circle_cross;
            case "toBeDone":
            default:
                return circleIcon;
        }
    };

    return (
        <div className="todo-list-container">
            <button className="backbutton" onClick={onCancel}>
                <img src={crossIcon} className="back" alt="back" />
            </button>
            <div className="header_TodoList">
                <div className='user-image-container'>
                    <img src={userImage} alt={contact.name} className="user-image" />
                </div>
                <div className="contact-detail">
                    <h2>{contact.name}</h2>
                    <h3>To-do List</h3>
                </div>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        className={`todo-item ${selectedTaskIndex === index ? 'selected' : ''}`}  // Add 'selected' class
                        onClick={() => handleSelectTask(index)}
                    >
                        <img 
                            src={getStatusIcon(todo.status)} 
                            alt={todo.status} 
                            className="status-icon" 
                            onClick={(e) => {
                                e.stopPropagation();
                                handleStatusClick(index);
                            }}
                        />
                        <div className="todo-details">
                            <p className="task-title">{todo.task}</p>
                            <p className="task-description">{todo.description}</p>
                            <p className="task-date">{todo.date}</p> {/* Show selected date */}
                        </div>
                    </li>
                ))}
            </ul>

            {showInputFields && (
                <div className="add-todo-container">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Task"
                    />
                    <input
                        type="text"
                        value={descriptionValue}
                        onChange={handleDescriptionChange}
                        placeholder="Description"
                    />
                    <input
                        type="date"
                        value={dateValue}
                        onChange={handleDateChange}  // Date input field
                    />
                    <button onClick={editing ? handleEdit : handleAddTodo}>
                        {editing ? "Update Task" : "Add Task"}
                    </button>
                </div>
            )}

            <div className="action-buttons">
                <button onClick={() => { setShowInputFields(true); setEditing(false); }}>Add Task</button>
                <button onClick={handleEdit} disabled={selectedTaskIndex === null}>Edit</button>
                <button onClick={handleDeleteTodo} disabled={selectedTaskIndex === null}>Delete</button>
            </div>
        </div>
    );
};

export default TodoList;
