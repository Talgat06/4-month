import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Content from "../components/Content";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <div className='btn'> MainPage</div>

            <Button name={'Open'} color={'primary'}/>
            <Button name={'Close'} color={'error'}/>
            <Button name={'Save'} color={'secondary'}/>
            <Content text={'JavaScript'}/>
            <Footer/>
        </div>
    );
};

export default MainPage;