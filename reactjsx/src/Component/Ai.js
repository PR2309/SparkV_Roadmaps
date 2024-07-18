import React, { useEffect } from 'react';
import Navbar from './Navbar';

const Ai = () => {
  useEffect(() => {

    const validateDetails = (name, age, days, language, question) => {
      document.getElementById("output_prompt").textContent = "";
      if (name.length <= 1) {
        document.getElementById("output_prompt").textContent += "Please fill all the details correctly...\nName length > 2 letter.";
        return false;
      }
      if (age <= 8) {
        document.getElementById("output_prompt").textContent += "Please fill all the details correctly...\nAge > 8.";
        return false;
      }
      if (days <= 0) {
        document.getElementById("output_prompt").textContent += "Please fill all the details correctly...\nDays > 0.";
        return false; 
      }
      if (language.length <= 0) {
        document.getElementById("output_prompt").textContent += "Please fill all the details correctly...\nLanguage Name Length > 0.";
        return false;
      }
      if (question.length <= 0) {
        document.getElementById("output_prompt").textContent += "Please fill all the details correctly...\nAsk the Problem i.e, Prompt Length > 0.";
        return false;
      }
      return true;};

    const formatMarkdown = (text) => {
      // Bold ()
      text = text.replace(/\\(\*.*?\*)\\/g, "<strong>$1</strong>");
      // Italic (*)
      text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");
      // Bold-Italic (_)
      text = text.replace(/_(.*?)_/g, "<strong><em>$1</em></strong>");
      // Line break
      text = text.replace(/\n/g, "<br>");
      // Inline code (`)
      text = text.replace(/`(.*?)`/g, "<code>$1</code>");
      // Link ([Link](url))
      text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
      // Image (![Alt](url))
      text = text.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1">');

      return text;
    };

    const addToHistory = (question) => {
      const historyList = document.getElementById('history_list');
      const listItem = document.createElement('p');

      listItem.textContent = "➤ " + question;
      listItem.classList.add('history-item');
      listItem.onclick = () => searchHistory(question);
      historyList.appendChild(listItem);
    };

    const searchHistory = async (question) => {
      document.getElementById("input_prompt").value = question;
      await answer();
    };

    const answer = async () => {
      const User = document.getElementById("input_name").value;
      const age = document.getElementById("input_age").value;
      const level = document.getElementById("input_level").value;
      const days = document.getElementById("input_day").value;
      const language = document.getElementById("input_language").value;
      const question = document.getElementById("input_prompt").value;
      // const User = "Rana";
      document.getElementById("output_prompt").textContent = "Typing...";
      document.getElementById("input_prompt").value = "";
      // if (validateDetails(User,age,days,language,question) == true) {
        document.getElementById("output_prompt").textContent = "Typing...";
      try {
        const response = await fetch("https://sparkv-server.onrender.com/ai/ans", {
          method: "POST",
          headers: {

            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: User, age: age, level: level, days: days, language:language, problem: question }),
        });
        const data = await response.json();
        document.getElementById("output_prompt").innerHTML = formatMarkdown(data.letter);
        addToHistory(question);
      } catch (error) {
        console.error("Error:", error);
        document.getElementById("output_prompt").textContent = "An error occurred.";
      }
    // } else {
    //   document.getElementById("output_prompt").textContent = "Please fill all the details correctly...\nName Length > 2 letter,\nAge > 8,\nDays > 0,\nLanguage Name Length > 0.";
    // }

    };

    document.getElementById('sendButton').addEventListener('click', answer);

    // Cleanup
    return () => {
      document.getElementById('sendButton').removeEventListener('click', answer);
    };
  }, []);

  return (
    <div className="">
      <div className="aiPage">
      <div><Navbar /></div>
        <div>
          <h1 className="aiPage_head display-4">SparkV ChatBot</h1>
        </div>
        <div className="d-flex">
          <aside className="history px-2 container rounded shadow" style={{ margin: '2%' }}>
            <h2>History</h2>
            <hr />
            <div className="text-light">
              <div id="history_list"></div>
            </div>
          </aside>
          <main className="chatWindow col-9 px-2 pt-3 container rounded shadow-lg" style={{ margin: '2%' }}>
            <div className="bg-secondary rounded shadow-lg ai_win">
              <p id="output_prompt" className="container rounded p-5 shadow-lg mb-2"></p>
              <div className="container input-container rounded">
                <input type="text" id="input_name" name="input_name" placeholder="Enter your name" className="mt-3 px-2"/>
                <input type="number" id="input_day" name="input_day" placeholder="Days" className="mt-3 px-2"/>
                <input type="number" id="input_age" name="input_age" placeholder="Age" className="mt-3 px-2"/>
                <select id="input_level" name="input_level" class="custom-select" placeholder="--">
                  <option value="option1" style={{color:'grey',fontStyle:'italic',fontSize:'0.9em'}}>&nbsp;Your Level</option>
                  <option value="option2" style={{color:'red',fontStyle:'italic',fontSize:'0.9em'}}>&nbsp;Beginner</option>
                  <option value="option3" style={{color:'blue',fontStyle:'italic',fontSize:'0.9em'}}>&nbsp;Intermediate</option>
                  <option value="option4" style={{color:'green',fontStyle:'italic',fontSize:'0.9em'}}>&nbsp;Advance</option>
                </select>
                <input type="text" id="input_language" name="input_language" placeholder="Language you want to learn" className="mt-3 px-2"/>
                <div class="input_bar">
                  <input type="text" id="input_prompt" placeholder="Ask your query..." className="mt-3" />
                  <button id="sendButton" className="send-button btn ">»</button>
                </div>
              </div>
            </div>
          </main>
        </div>
        <footer className="roadmapfooter">
    &copy;2024 All rights reserved to SparkV   

    </footer>
      </div>
      

    </div>
  );
};

export default Ai;
