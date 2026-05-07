import { useState, useEffect } from 'react';


const useAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [aiResponse, setAiResponse] = useState(null); // For the ContentBox
  const [boxTitle, setBoxTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState(null);

  // Load API Key
  useEffect(() => {
    const storedKey = localStorage.getItem('gemini_api_key');
    const envKey = import.meta.env.VITE_AI_API_KEY;

    if (storedKey) {
      setApiKey(storedKey);
    } else if (envKey) {
      setApiKey(envKey);
    } else {
      // No key found, prompt via speech or UI (handled in processAI)
    }
  }, []);

  const speak = (text, onEnd) => {
    window.speechSynthesis.cancel();
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    text_speak.onstart = () => setIsSpeaking(true);
    text_speak.onend = () => {
      setIsSpeaking(false);
      if (onEnd) onEnd();
    };
    window.speechSynthesis.speak(text_speak);
  };

  const wishMe = () => {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) speak("Good Morning Sir");
    else if (hours >= 12 && hours < 16) speak("Good afternoon Sir");
    else speak("Good Evening Sir");
  };

  const processAI = async (command) => {
    if (!apiKey) {
      speak("Please set your AI API Key in the settings first.");
      setError("API Key not set.");
      return;
    }

    // Stop Command Check
    const lowerCommand = command.toLowerCase();
    if (lowerCommand.includes("stop") || lowerCommand.includes("dot")) {
      speak("Goodbye sir. Have a great day.");
      return;
    }

    setIsLoading(true);
    try {
      // GROQ API CALL
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile", // Updated to current supported model
          messages: [
            { role: "system", content: "You are Jarvis. Respond in JSON. Structure: { \"speech\": \"...\", \"action\": \"...\", \"url\": \"...\", \"text_content\": \"...\", \"content_title\": \"...\" }." },
            {
              role: "user",
              content: `User command: "${command}".
                            Respond in STRICT JSON format (no markdown):
                            1. "speech": Conversational response.
                            2. "action": ["none", "open_url", "search"].
                            3. "url": URL if action is open_url.
                            4. "text_content": Detailed info/article (Markdown ok).
                            5. "content_title": Title for content box.`
            }
          ],
          response_format: { type: "json_object" }
        })
      });

      const json = await response.json();
      if (json.error) throw new Error(json.error.message);
      const text = json.choices[0].message.content;

      console.log("AI Response:", text);

      // Sanitize JSON (remove markdown code blocks if present)
      const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
      const data = JSON.parse(cleanJson);

      // Execute Action
      if (data.action === "open_url" && data.url) {
        window.open(data.url, "_blank");
      } else if (data.action === "search") {
        window.open(`https://www.google.com/search?q=${command}`, "_blank");
      }

      // Update UI Content
      if (data.text_content) {
        setAiResponse(data.text_content);
        setBoxTitle(data.content_title || "Result");
      }

      // Execute Speech AND Restart Loop
      if (data.speech) {
        speak(data.speech, () => {
          // Loop: Start listening again after speech finishes
          startListening();
        });
      } else {
        // If no speech, still restart listening
        startListening();
      }

    } catch (error) {
      console.error("AI Error:", error);
      const msg = error.message || "Unknown";
      setError(msg); // Set error state
      if (msg.includes("401") || msg.includes("403")) speak("Authentication failed. Check your API Key.");
      else {
        speak("System error: ");
        console.log(msg);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const startListening = () => {
    setError(null); // Clear previous errors
    if (!apiKey) {
      speak("Please set your Gemini API Key in the settings first.");
      setError("API Key not set.");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const currentIndex = event.resultIndex;
      const transcriptText = event.results[currentIndex][0].transcript;
      setTranscript(transcriptText);
      processAI(transcriptText);
    };
    recognition.start();
  };

  return {
    isListening,
    isSpeaking,
    transcript,
    startListening,
    aiResponse,
    boxTitle,
    isLoading
  };
};

export default useAssistant;
