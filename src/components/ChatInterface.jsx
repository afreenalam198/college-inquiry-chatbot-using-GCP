import { useEffect } from 'react';

function ChatInterface() {
  useEffect(() => {

    const scriptId = 'dialogflow-messenger';
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <df-messenger
        chat-title="college-inquiry-bot"
        agent-id="" /*Replace with Diagflow messenger agent ID*/
        chat-icon="/chatLogo.svg"
        language-code="en"
      ></df-messenger>
    </>
  );
}

export default ChatInterface;
