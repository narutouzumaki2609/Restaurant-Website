import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import Contact from './contact';
// import reportWebVitals from './reportWebVitals';

// function CreateCard(contact){
//   return(
//     <Card
//     Key={contact.id}
//     Name={contact.Name}
//     img={contact.img}
//     company={contact.company}
//     />
//   );
// }
// function Card(props){
//     return (
//     <div className="card">
//       <h2>{props.Name}</h2>
//       <img id="card1" src={props.img} alt="img.jpg" width="100px" height="100px" />
//       <p>{props.company}</p>
//     </div>
//     );
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Card Name="Elon Musk" img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" company="SpaceX" /> */}
    {/* {Contact.map(CreateCard)} */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
