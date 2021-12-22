import React from 'react';
import ReactDOM from 'react-dom';
import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Films from './components/films';
import Details from './components/details';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Add from './components/add';


ReactDOM.render(
 <BrowserRouter>
     <React.StrictMode>

    <Header/>

                        <Routes>
                            <Route path='/' element={<Films />} />
                            <Route path='/details' element={<Details />} />
                            <Route path='/signin' element={<SignIn />} />
                            <Route path='/signup' element={<SignUp />} />
                            <Route path='/add' element={<Add />} />
                       </Routes>

        <Footer/>
     </React.StrictMode>
     </BrowserRouter>,
 document.getElementById('root'));





