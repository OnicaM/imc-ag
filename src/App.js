
import './App.css';
import {useState} from 'react';


 function App() {
   const [text, setText] = useState("");
  function removeItem(e){
    e.target.parentNode.remove();
  }

  return (
    <div className="App">
      <div className="container">
      <div className="section-info relative">
      <button className="remove-btn" onClick={removeItem}>Remove</button>
        <h1>Oana Macamete</h1>
        <p>
          Address: Craiova, Bld.Decebal <br/>
          Email: mac.oana92@yahoo.ro<br/>
          Linkedin: https://www.linkedin.com/in/oana-macamete-125107b5/<br/>
          Phone: 0737720751<br/>
          Skype: oanae04
        </p>
      </div>
      <div className="section-digital relative">
      <button className="remove-btn" onClick={removeItem}>Remove</button>
         <h2>SKILLS AND ABILITIES - TECHNICAL AND SOFT</h2>
         <p>Digital skills</p>
          <ul>
            <li>PHP (basic level), MySQL</li>
            <li> HTML, CSS, JavaScript, JQuery, ReactJs(basic level)</li>
            <li>Photoshop</li>
            <li>GIT</li>
          </ul>
          <p>Job-related skills</p>
          <ul>
            <li>good organisation skills</li>
            <li> team work skills</li>
            <li>ability to work under pressure according to the short deadlines</li>
            <li> flexibility and adaptability</li>
          </ul>
      </div>
      <div className="section-digital relative">
      <button className="remove-btn" onClick={removeItem}>Remove</button>
         <h2>PROFESSIONAL EXPERIENCE</h2>
         <div className="section-digital_first relative">
         <button className="remove-btn" onClick={removeItem}>Remove</button>
            <h3><span>Front-end Developer</span><span>2016 – Present</span></h3>
            <p>Inside Media Comunication, Craiova (Romania)</p>
            <p>Creating and developing of websites using HTML, Css, JQuery</p>

              <ul>
                <li>working with JIRA</li>
                <li>working with Mavenlink</li>
                <li>working with Ace Project Management software</li>
                <li>working with Adobe Photoshop</li>
                <li>working with Invision</li>
                <li>working with Microsoft Office package</li>
                <li>working with BugHerd platform for resolving bugs</li>
                <li>training work</li>
              </ul>
              <p>Projects developed within the company:</p>
              <ul>
                <li> http://www.telsonminig.com</li>
                <li>http://investors.medmen.com</li>
                <li>http://investors.ceridian.com</li>
                <li>http://ir.freshii.com</li>
                <li>https://investors.nuance.com</li>
                <li>and others</li>
              </ul>
              <p>In the projects presented above were used:</p>
              <ul>
                <li> various animations that were created with css but also with jquery</li>
                <li> widgets in which I put my "fingerprint" by modifying them so as to correspond to the client's requirements</li>
                
                <li> sliders created with jquery</li>
                <li> various plug-ins</li>
              </ul>
         </div>
         <div className="section-digital_second relative">
           <button className="remove-btn" onClick={removeItem}>Remove</button>
            <h3><span>Junior Web Developer front-end and back-end</span><span>2015 – 2016</span></h3>
            <p>380 Creative Engine (http://treioptzeci.ro/), Craiova (Romania)</p>
            <ul>
              <li>Creating and developing of websites from PSD using HTML, Css, Bootstrap, JQuery</li>
              <li>Back-end development PHP</li>
            </ul>
            <p>Projects developed within the company:</p>
            <ul>
              <li> http://clinica-dermamed.ro</li>
              <li> http://34fx.com</li>
              <li> http://ginecologiq.ro</li>
              <li> http://eurotehnicaitc.ro</li>
            </ul>
         </div>
      </div>
      <div className="section-languages relative">
        <button className="remove-btn" onClick={removeItem}>Remove</button>
        <h2>LANGUAGES</h2>
        <ul>
          <li>English – intermediate</li>
          <li>Romanian- native</li>
        </ul>
      </div>
      <div className="section-trainings relative">
        <button className="remove-btn" onClick={removeItem}>Remove entire section</button>
        <h2> PROFESSIONAL TRAININGS</h2>
        <div className="section-trainings_iquest relative">
        <button className="remove-btn" onClick={removeItem}>Remove this section</button>
          <h3><span>iQuest Academy</span><span>Feb 2019 - Aug 2019</span></h3>
          <ul>
            <li>Basic GIT concepts</li>
            <li>HTML, Css, JavaScript, ReactJS</li>
          </ul>
          <a href="https://github.com/OnicaM/letseat" target="_blank">letseat</a>
          <p>Project developed within academy with React :</p>
          <ul>
            <li><a href="https://github.com/OnicaM/todo-useState" target="_blank">todo-useState</a></li>
            <li><a href="https://github.com/OnicaM/letseat-react" target="_blank">letseat-react(in progress)</a></li>
          </ul>
          <p>During this academy I developed a project in which I worked with:</p>
          <ul>
            <li>ReactJs</li>
            <li>Javascript Vanilla</li>
            <li>Html</li>
            <li>Css</li>
            <li>Json files</li>
            <li>REST services</li>
          </ul>
        </div>
        <div className="section-trainings_osf relative">
          <button className="remove-btn" onClick={removeItem}>Remove this section</button>
            <h3><span>OSF Global Services Academy</span><span>1 Nov 2019 – 30 Nov 2019</span></h3>
            <ul>
              <li>GIT</li>
              <li>HTML, Css, Scss</li>
              <li>JavaScript</li>
              <li>Photoshop</li>

            </ul>
            <a href="https://github.com/OnicaM/osf-academy" target="_blank">osf-academy</a>
            
            <p>During this academy I developed a project in which I worked with:</p>
            <ul>
              <li>Javascript Vanilla</li>
              <li>Html</li>
              <li>Scss</li>
              <li>Css</li>
              <li>Json files</li>
              <li>REST services</li>
              <li>Photoshop</li>
            </ul>
        </div>
      </div>
      <div className="section-education relative">
        <button className="remove-btn" onClick={removeItem}>Remove entire section</button>
        <h2>EDUCATION</h2>
        <div className="section-education_first relative">
        <button className="remove-btn" onClick={removeItem}>Remove this section</button>
          <h4>Nov 2014 – Jul 2016</h4>
          <p>Faculty of Science, Methods and Models in Artificial 
          <span className="subtitle">Intelligence, Craiova (Romania)</span></p>
        </div>
        <div className="section-education_second relative">
        <button className="remove-btn" onClick={removeItem}>Remove this section</button>
          <h4>Oct 2011 – Jul 2014</h4>
          <p>Bachelor's degree 
          <span className="subtitle">Faculty of Computer Science, Informatics., Craiova (Romania)</span></p>

        </div>
        <div className="section-education_third relative">
        <button className="remove-btn" onClick={removeItem}>Remove this section</button>
          <h4>2007–2011</h4>
          <p>Technician in tourism
          <span className="subtitle">National Economic College, Craiova (Romania)</span></p>

        </div>
      </div>
      <button className="displayText" onClick={() => setText('Hello! This is my CV')}>Add text</button>
      <h3>{text}</h3>
      </div>
    </div>
  );
}

export default App;
