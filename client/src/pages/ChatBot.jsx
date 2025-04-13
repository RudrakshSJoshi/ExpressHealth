import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const ChatBot = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  
  const [inputValue, setInputValue] = useState('');
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === '' || isWaitingForResponse) return;

    // Add user message
    const userMessage = { 
      text: inputValue, 
      sender: 'user', 
      timestamp: new Date().toISOString() 
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsWaitingForResponse(true);

    try {
      // Prepare request data
      const lastUserMessage = messages
        .slice()
        .reverse()
        .find(msg => msg.sender === 'user');
      
      const lastBotResponse = messages
        .slice()
        .reverse()
        .find(msg => msg.sender === 'bot');

      const requestData = {
        input: inputValue,
        last_input: lastUserMessage?.text || "NULL",
        last_output: lastBotResponse?.text || "NULL"
      };

      // Call API endpoint
      const response = await fetch('http://localhost:8080/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Add bot message
      const botMessage = { 
        text: data.answer, 
        sender: 'bot',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
      // Add error message
      const errorMessage = { 
        text: "Sorry, I'm having trouble connecting to the server. Please try again later.", 
        sender: 'bot',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsWaitingForResponse(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem('chatMessages');
  };

  const goBack = () => {
    localStorage.removeItem('chatMessages');
    navigate('/');
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={styles.pageContainer}>
      <div style={styles.chatContainer}>
        {/* Header */}
        <div style={styles.header}>
          <button onClick={goBack} style={styles.backButton}>
            <span style={{ ...styles.buttonIcon, fontWeight: 'bold', fontSize: '1.2rem' }}>
              ←
            </span>
            <br />
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
              Back to<br />SmartClinic
            </span>
          </button>
          <h1 style={styles.headerTitle}>SmartClinic Assistant</h1>
          <button onClick={clearChat} style={styles.clearButton}>
            <span style={{ ...styles.buttonIcon, fontWeight: 'bold', fontSize: '1.2rem' }}>
              ✕
            </span>
            <br />
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
              Clear Chat
            </span>
          </button>
        </div>
        
        {/* Messages Area */}
        <div style={styles.messagesContainer}>
          {messages.length === 0 && (
            <div style={styles.welcomeMessage}>
              <div style={styles.welcomeIcon}>🩺🤖💬</div>
              <h3 style={styles.welcomeTitle}>Welcome to SmartClinic Concierge</h3>
              <p style={styles.welcomeText}>I'm your all-in-one virtual healthcare assistant.<br/> Whether you need help with health concerns, understanding how the app works, or general medical assistance—I'm here to guide you every step of the way. Just ask!</p>
            </div>
          )}
          
          {messages.map((message, index) => (
            <div 
              key={`${message.timestamp}-${index}`} 
              style={{
                ...styles.messageBubble,
                ...(message.sender === 'user' ? styles.userBubble : styles.botBubble),
                animation: `${message.sender === 'bot' ? 'fadeInRight' : 'fadeInLeft'} 0.3s ease-out`
              }}
            >
              {message.sender === 'bot' && (
                <div style={styles.botAvatar}>AI</div>
              )}
              <div style={styles.messageContent}>
                <ReactMarkdown>{message.text}</ReactMarkdown>
                <div style={styles.messageTime}>
                  {new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
              {message.sender === 'user' && (
                <div style={styles.userAvatar}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Area */}
        <form onSubmit={handleSendMessage} style={styles.inputForm}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your health question..."
            style={styles.inputField}
            disabled={isWaitingForResponse}
          />
          <button 
            type="submit" 
            style={{
              ...styles.sendButton,
              opacity: isWaitingForResponse ? 0.7 : 1,
              cursor: isWaitingForResponse ? 'not-allowed' : 'pointer'
            }}
            disabled={isWaitingForResponse}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={styles.sendIcon}>
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#f8f1e9', // Soft light brown background
    overflow: 'hidden',
    fontFamily: '"Poppins", sans-serif',
  },
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    maxWidth: '100%',
    margin: '0 auto',
    background: 'linear-gradient(135deg, #f8f1e9 0%, #e8d9c5 100%)',
    boxShadow: '0 0 30px rgba(215, 112, 22, 0.2)',
    position: 'relative',
  },
  header: {
    backgroundColor: '#a68161', // Rich brown
    color: '#fff',
    padding: '1rem 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    boxShadow: '0 2px 10px rgba(154, 109, 75, 0.3)',
    zIndex: 10,
  },
  headerTitle: {
    color: 'rgb(93, 40, 0)',
    margin: 0,
    fontSize: '1.4rem',
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
    minWidth: '200px',
    textShadow: '1px 1px 2px rgb(255, 255, 255)',
  },
  backButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: '500',
    padding: '0.6rem 1rem',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: 'rgba(255,255,255,0.2)',
    },
  },
  clearButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: '500',
    padding: '0.6rem 1rem',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: 'rgba(255,255,255,0.2)',
    },
  },
  buttonIcon: {
    fontSize: '1.2rem',
  },
  messagesContainer: {
    flex: 1,
    padding: '1.5rem',
    overflowY: 'auto',
    background: 'linear-gradient(to bottom, #f8f1e9, #f0e6d8)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  welcomeMessage: {
    textAlign: 'center',
    color: '#9a6d4b',
    margin: 'auto',
    maxWidth: '400px',
    padding: '2rem',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.6)',
    boxShadow: '0 4px 15px rgba(166, 129, 97, 0.1)',
  },
  welcomeIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  welcomeTitle: {
    margin: '0 0 0.5rem 0',
    color: '#7a5c3c',
  },
  welcomeText: {
    margin: 0,
    lineHeight: '1.6',
    color: '#9a6d4b',
  },
  messageBubble: {
    padding: '0.8rem 1.2rem',
    borderRadius: '18px',
    maxWidth: '85%',
    wordWrap: 'break-word',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'flex-end',
    gap: '0.8rem',
    position: 'relative',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  userBubble: {
    backgroundColor: '#a68161', // Rich brown
    color: '#fff',
    marginLeft: 'auto',
    borderBottomRightRadius: '3px',
    flexDirection: 'row-reverse',
    color: 'white',
  },
  botBubble: {
    backgroundColor: '#fff',
    color: '#5a4a3a',
    marginRight: 'auto',
    borderBottomLeftRadius: '3px',
    border: '1px solid #e0d5c8',
  },
  botAvatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#ba9f88',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    flexShrink: 0,
  },
  userAvatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#9a6d4b',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  messageContent: {
    flex: 1,
  },
  messageTime: {
    fontSize: '0.7rem',
    opacity: 0.7,
    marginTop: '0.3rem',
    textAlign: 'right',
  },
  inputForm: {
    display: 'flex',
    borderTop: '1px solid #e0d5c8',
    padding: '1rem',
    backgroundColor: '#fff',
    boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
  },
  inputField: {
    flex: 1,
    padding: '0.8rem 1.2rem',
    border: '1px solid #e0d5c8',
    borderRadius: '50px',
    outline: 'none',
    fontFamily: '"Poppins", sans-serif',
    fontSize: '1rem',
    backgroundColor: '#f9f5f0',
    transition: 'all 0.2s ease',
    ':focus': {
      borderColor: '#ba9f88',
      boxShadow: '0 0 0 3px rgba(186, 159, 136, 0.2)',
    },
  },
  sendButton: {
    marginLeft: '0.8rem',
    width: '48px',
    height: '48px',
    backgroundColor: '#a68161',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: '#9a6d4b',
      transform: 'scale(1.05)',
    },
  },
  sendIcon: {
    transform: 'rotate(-30deg)',
  },
  '@keyframes fadeInLeft': {
    from: {
      opacity: 0,
      transform: 'translateX(-20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  '@keyframes fadeInRight': {
    from: {
      opacity: 0,
      transform: 'translateX(20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
};

export default ChatBot;