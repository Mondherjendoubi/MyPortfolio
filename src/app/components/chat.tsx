"use client"; // This is a client component 👈🏽
import { useState, useEffect } from "react";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const Chat = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);
  const [chatLog, setChatLog] = useState<{ role: string; content: string }[]>(
    []
  );
  const [isChatVisible, setIsChatVisible] = useState(false);

  const assistantId = process.env.NEXT_PUBLIC_ASSISTANT_ID;

  useEffect(() => {
    const createThread = async () => {
      try {
        // Create a Thread
        const thread = await openai.beta.threads.create();
        setThreadId(thread.id);
      } catch (error) {
        console.error("Error creating thread:", error);
      }
    };

    createThread();
  }, []);

  const handleSendMessage = async () => {
    if (!assistantId || !threadId) {
      console.error("Assistant ID or Thread ID is missing");
      return;
    }

    setLoading(true);
    try {
      // Add user message to chat log

      setChatLog((prevLog) => [...prevLog, { role: "user", content: message }]);
      // Add a Message to the Thread

      // Add a Message to the Thread
      await openai.beta.threads.messages.create(threadId, {
        role: "user",
        content: message,
      });

      // Create and Poll a Run
      let run = await openai.beta.threads.runs.createAndPoll(threadId, {
        assistant_id: assistantId,
        instructions: message,
      });

      if (run.status === "completed") {
        const messages = await openai.beta.threads.messages.list(run.thread_id);

        let newMessages = messages.data
          .map((message) => {
            const contentBlock = message.content[0];
            if ("text" in contentBlock) {
              return {
                role: message.role,
                content: contentBlock.text.value,
              };
            }
            // Handle other content types if needed
            return {
              role: message.role,
              content: "Unsupported content type", // or handle it appropriately
            };
          })
          .reverse();

        setChatLog(newMessages);
      } else {
        console.log(run.status);
      }

      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      setChatLog((prevLog) => [
        ...prevLog,
        { role: "system", content: "Error communicating with OpenAI API" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          setIsChatVisible((prev) => !prev);
        }}
        disabled={loading}
        className="fixed text-white bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-blue-600 hover:bg-blue-700 m-0 cursor-pointer border-gray-200 p-0 normal-case leading-5 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
      </button>

      {isChatVisible && (
        <div
          className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-gray-300 w-[440px] h-[634px]"
          style={{
            boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
          }}
        >
          {/* Heading */}
          <div className="flex flex-col space-y-1.5 pb-6">
            <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
            <p className="text-sm text-gray-500 leading-3">Powered by me</p>
          </div>

          {/* Chat Container */}
          <div className="flex flex-col  pr-4  h-[calc(100%-120px)]  overflow-y-auto min-w-full">
            {chatLog.map((entry, index) => (
              <div
                key={index}
                className={`flex gap-3 my-4 text-gray-600 text-sm flex-1 ${
                  entry.role === "user" ? "justify-end" : ""
                }`}
              >
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                  <div className="rounded-full bg-gray-100 border p-1">
                    <svg
                      stroke="none"
                      fill="black"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      ></path>
                    </svg>
                  </div>
                </span>
                <p className="leading-relaxed">
                  <span className="block font-bold text-gray-700">
                    {entry.role === "user" ? "You" : "AI"}{" "}
                  </span>
                  {entry.content}
                </p>
              </div>
            ))}
          </div>

          {/* Input box */}
          <div className="flex  mt-5  items-center pt-0">
            <form
              className="flex items-center justify-center w-full space-x-2"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:cursor-not-allowed disabled:opacity-50 text-gray-900 focus-visible:ring-offset-2"
                placeholder="Type your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium text-white disabled:pointer-events-none disabled:opacity-50 bg-blue-600 hover:bg-blue-700 h-10 px-4 py-2"
                type="submit"
                disabled={loading}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
