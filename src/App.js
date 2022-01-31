import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
    height='100vh'
    userName='####'
    userSecret='###'
    projectID='ffa9b02d-8b0a-4dc1-8fab-cc9df0345cc7'
    renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps }/>}
         />
  );
}


export default App;

