import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Mail from './components/Mail/Mail';
import EmailList from './components/Mail/EmailList';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mail/mailSlice';
import SendMail from './components/Mail/SendMail';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
      <div className="app">
        <Header />
        <div className='app__body'>
          <Sidebar />

          {/* Navigation */}
          <Routes>
            <Route path='/mail' element={<Mail />} />
            <Route path='/' element={<EmailList />}/>
          </Routes>
        </div>
        {sendMessageIsOpen && <SendMail/>}
      </div>
    </Router>
  );
}

export default App;
