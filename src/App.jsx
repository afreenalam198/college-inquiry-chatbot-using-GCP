import { useState, useEffect } from 'react'
import './App.css'
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of Dialogflow resources
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">
      <Header />
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading chatbot...</p>
        </div>
      ) : (
        <main className="main-container">
          
          <div className="info-container">
            <h2>About Our College Inquiry Chatbot</h2>
            <p>
              This interactive chatbot is designed to answer common questions about
              our college. Feel free to ask about our programs, campus facilities,
              tuition fees, and more!
            </p>
            <div className="sample-questions">
              <h3>Try asking:</h3>
              <ul>
                <li>"Does the college have a football team?"</li>
                <li>"Does it offer a Computer Science major?"</li>
                <li>"What is the in-state tuition?"</li>
                <li>"Does it provide on-campus housing?"</li>
              </ul>
            </div>
          </div>
            <ChatInterface />
        </main>
      )}
      <footer className="footer">
        <p>© 2025 College Inquiry Chatbot | Created for GCP Project</p>
      </footer>
    </div>
  );
}

export default App
