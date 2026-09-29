import {useState, userEffect} from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

function App(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Home />}/>
                <Route path="/CourseIndex" element ={<CourseIndex />}/>
                <Route path="/CourseCreation" element ={<CourseCreation />}/>
                <Route path="/CourseDeletion" element ={<CourseDeletion />}/>
            </Routes>
            <NavigationBar />
            <h1>Welcome to the Course Management System</h1>
        </BrowserRouter>       
    );
}

function NavigationBar(){
    return ( 
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active text-warning" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/CourseIndex" className="nav-link">Course Index</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/CourseCreation" className="nav-link">Add Course</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/CourseDeletion" className="nav-link">Delete Course</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

function Home(){
    return( 
    <>
        <title>Teacher Home</title>       
        <h1>HOME</h1>   
    </>);
}
function CourseIndex(){
    return(<><CourseIndex /></>);
}
function CourseCreation(){
    return(
    <>
        <title>Course Creation</title>
         <h1>COURSE CREATION</h1>
    </>);
}
function CourseDeletion(){
    return(
    <>
        <title>Course Deletion</title>
         <h1>COURSE DELETION</h1>
    </>);
}

export default App;