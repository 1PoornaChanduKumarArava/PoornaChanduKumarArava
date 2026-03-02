import React, { useState } from 'react';
import ChatbotKit from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { createChatBotMessage } from 'react-chatbot-kit';
import { IconButton, Box,Typography,Tooltip } from '@mui/material';

const config = {
  botName: 'Poorna',
  initialMessages: [createChatBotMessage('Hello! How can I help you today?', {})],
};

class MessageParser {
  actionProvider: any;

  constructor(actionProvider: any) {
    this.actionProvider = actionProvider;
  }

  parse(message: string) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hello')) {
      this.actionProvider.greet();
    }
  }
}

class ActionProvider {
  createChatBotMessage: any;
  setState: any;

  constructor(createChatBotMessage: any, setStateFunc: any) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage('Hi, friend.');
    this.updateChatbotState(greetingMessage);
  }

  updateChatbotState(message: any) {
    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

const ChatbotComponent: React.FC = () => {
  const [showChatbot] = useState(false);

  // const handleToggle = () => {
  //   setShowChatbot(prev => !prev);
  // };
  //   const handleClick = () => {
  //   alert("ChatBot coming soon! 🚀");
  // };

  return (
    <Box>
      <Tooltip 
      title={
        <Typography sx={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
          Coming Soon! 
        </Typography>
      } 
      arrow 
      placement="left"
    >

      <IconButton
        style={{ position: 'fixed', right: '20px', bottom: '20px', zIndex: 1000 }}
        // onClick={handleClick}
        color="primary"
      >
        <Box
          sx={{
            width: 56,
            height: 50,
            borderRadius: '0%',
            overflow: 'hidden',
          }}
        >
          <img src="/chat-bot-icon.png" alt="Chatbot Icon" style={{ width: '100%', height: '100%' }} />
        </Box>

      </IconButton>
      </Tooltip>

      {showChatbot && (
        <Box style={{ position: 'fixed', right: '20px', bottom: '80px', zIndex: 1000 }}>
          <ChatbotKit
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </Box>
      )}

    </Box>
  );
};

export default ChatbotComponent;
