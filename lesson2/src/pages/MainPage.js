import React, {useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Content from "../components/Content";
import Example from "../components/Example/Example";
import Modal from "../components/modal/Modal";
import Count from "../components/count/Count";
import List from "../components/List";

const MainPage = () => {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [name, setName] = useState('')
    const [inputValue, setInputValue] = useState('')
    console.log(inputValue)

    const lists = [
        { id: 1, title: 'coding', completed: false },
        { id: 2, title: 'eat', completed: false },
        { id: 3, title: 'sleep', completed: false }
    ];

    const handleInput = (event) => {
        setInputValue(event.target.value);
    }

    const handleShow = (name) => {
        setName(name)
        if (name==='show') setShow(prevState => !prevState)
        if (name==='show2')setShow2(prevState => !prevState)
    }
    return (
        <div>
            {/*<Header/>*/}
            {/*<div className='btn'> MainPage</div>*/}

            {/*<Button name={'Open'} color={'primary'}/>*/}
            {/*<Button name={'Close'} color={'error'}/>*/}
            {/*<Button name={'Save'} color={'secondary'}/>*/}
            {/*<Content text={'JavaScript'}/>*/}
            {/*<Footer/>*/}
            {/*<Example name={'Talgat'}>*/}
            {/*    <div style={{backgroundColor: 'blueviolet'}}>*/}
            {/*        <p style={{color: "red"}}>name Talgat</p>*/}
            {/*    </div>*/}
            {/*</Example>*/}
            inputValue:{inputValue}
            <Button onClick={() => handleShow('show')}>Открыть</Button>
            <Button onClick={() => handleShow('show2')}>Открыть</Button>
            {
                show && <Modal
                    handleShow={handleShow}
                    name={name}
                    handleInput={handleInput}
                >
                    <h1>Hello</h1>
                </Modal>
            }
            {
                show2 && <Modal handleShow={handleShow} name={name}>
                    <h1>Hello2</h1>
                </Modal>
            }
            <Count/>
            <List lists={lists} />
        </div>
    );
};

export default MainPage;