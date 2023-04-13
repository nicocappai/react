import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar.js';

export default function App() {
  
  let message = 'Benvenuti al corso di React';
  let names = ['Valerio', 'Nico', 'Giovanna'];
  let lessons = [
    { id: 1, title: 'lezione 1' , teacher: 'Valerio'},
    { id: 1, title: 'lezione 2' , teacher: 'Roberto'},
    { id: 1, title: 'lezione 3' , teacher: 'Laura'}
  ]
  
  return (


    <Navbar />
    // <>
    
    //   <h1 classNameNameName='titolo'>Welcome</h1>
    //   <p>{2 + 2}</p>
    //   <p> {('') ? 4 : NaN}</p>
    //   <p>{message}</p>

    //   {lessons.map((lesson) => {

    //     return (

    //       <div key={lesson.id}>
    //         <h2> {lesson.title} </h2>
    //         <p> Docente: {lesson.teacher} </p>
    //       </div>
    //     );

    //   })}

    //   /*
    //   <input type="" />
    //   <img src=''> </img>
    //   */
    // </>
    
    
    
    );
  }
  
   // Tag speciale -> <React.Fragment>