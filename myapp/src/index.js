import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import NavigationBar from './NavBarr/NavigationBar';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import Page5 from './Components/Page5';
import Page6 from './Components/Page6';
import Page7 from './Components/Page7';
import Page8 from './Components/Page8';
import Page9 from './Components/Page9';
import Page10 from './Components/Page3';
import Page11 from './Components/Page11';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<NavigationBar/>
<Page1/>
<Page2/>
{/* <Page3/> */}
<Page10/>
<Page4/>
<Page11/>
<Page5/>
<Page6/>
<Page7/>
<Page8/>
<Page9/>




  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
