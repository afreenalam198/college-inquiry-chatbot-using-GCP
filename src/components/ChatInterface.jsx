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
        agent-id="87ac7cb8-71de-40c3-b9fb-12e586929b5b"
        chat-icon="/chatLogo.svg"
        language-code="en"
      ></df-messenger>
    </>
  );
}

export default ChatInterface;
