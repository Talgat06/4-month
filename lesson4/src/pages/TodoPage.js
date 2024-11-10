import React, { useEffect, useState } from 'react';
import TodoList from '../components/todoList/TodoList';
import Button from '../components/button/Button';
import Modal from '../components/modal/Modal';


const TodoPage = () => {
    const [ show, setShow ] = useState(false);
    const [ show2, setShow2 ] = useState(false);
    const [ name, setName ] = useState('');
    const [ inputValue, setInputValue ] = useState('');
    const [ todoList, setTodoList ] = useState([]);
    const handleInput = (event) => {
        setInputValue(event.target.value);
    };

    const handleAdd = () => {
        console.log('add');
        setTodoList(prevState => [ ...prevState, {
            id: todoList.length === 0 ? 1 : todoList[ todoList.length - 1 ].id + 1,
            title: inputValue,
            completed: false
        } ]);
    };

    const handleEdit = (todoEdit) => {
        console.log(todoEdit);
        todoList.map(todo=> {
            if (todoEdit.id === todo.id) return todo.title=todoEdit.title
        })
        setTodoList([ ...todoList ]);
    }

    const handleDone = (id) => {
        setTodoList(todoList.map(todo=> {
            if (id === todo.id) {
                return todo.completed = !todo.completed
            }
        }))
        setTodoList([ ...todoList ]);
    };

    const handleDelete = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };
    const handleShow = (name) => {
        setName(name);
        if (name === 'show') setShow(prevState => !prevState);
        if (name === 'show2') setShow2(prevState => !prevState);
    };

    useEffect(() => {
        console.log('useEffect');
    }, [ show ]);


    useEffect(() => {
        localStorage.setItem('user', JSON.stringify({
            id: 5,
            name: 'Bakyt'
        }));
    }, []);

    console.log(JSON.parse(localStorage.getItem('user')).id);
    useEffect(() => {
        const myLocalStorage = JSON.parse(localStorage.getItem('todo'));
        if (myLocalStorage === null) {
            return localStorage.setItem('todo', JSON.stringify(todoList));
        }
        if (myLocalStorage !== 0) {
            setTodoList(myLocalStorage);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todoList));
    }, [ todoList ]);


    return (
        <div>
            <TodoList
                todoList={todoList}
                handleDone={handleDone}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
            <Button name={'Открыть'} action={() => handleShow('show')}/>
            <Button name={'Открыть2'} action={() => handleShow('show2')}/>
            {
                show && <Modal
                    handleShow={handleShow}
                    name={name}
                    handleInput={handleInput}
                    handleAdd={handleAdd}
                >
                    <h1>Hello</h1>
                </Modal>
            }
            {
                show2 && <Modal handleShow={handleShow} name={name}>
                    <h1>Hello2</h1>
                </Modal>
            }
        </div>
    );
};

export default TodoPage;