import React, { useState } from 'react'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm here to help with your questions about record writing services. How can I assist you today?",
    },
  ])

  const responses = {
    'How much per page?': '₹13 per page for all types of record writing services.',
    'How many days for delivery?':
      'Standard delivery time is 3-5 days. Urgent requests may be accommodated with prior discussion.',
    'Do you accept bulk work?':
      'Yes! I offer discounts for bulk orders of 50+ pages. Contact me for customized pricing.',
    'How can I contact you?':
      'You can reach me on WhatsApp at 9676728330 or email at venkatesh8330b@gmail.com. I typically respond within a few hours.',
  }

  const questions = [
    'How much per page?',
    'How many days for delivery?',
    'Do you accept bulk work?',
    'How can I contact you?',
  ]

  const handleQuestion = (question) => {
    // Add user message
    setMessages((prev) => [...prev, { type: 'user', text: question }])

    // Add bot response after a short delay
    setTimeout(() => {
      const response =
        responses[question] ||
        "I'm sorry, I don't have an answer for that question. Please contact me directly for more information."
      setMessages((prev) => [...prev, { type: 'bot', text: response }])
    }, 500)
  }

  return (
    <>
      <div
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-[50px] h-[50px] md:w-[60px] md:h-[60px] gradient-primary rounded-full flex items-center justify-center text-white text-xl md:text-2xl shadow-lg cursor-pointer z-50 hover:scale-110 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-comments"></i>
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-4 md:right-8 w-[280px] md:w-80 lg:w-96 h-[400px] md:h-[450px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className="gradient-primary text-white p-4 flex items-center justify-between">
            <div className="font-semibold text-lg">Record Writing Assistant</div>
            <div
              className="cursor-pointer text-xl"
              onClick={() => setIsOpen(false)}
            >
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                  msg.type === 'bot'
                    ? 'bg-gray-100 self-start rounded-bl-md'
                    : 'gradient-primary text-white self-end rounded-br-md'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200 flex flex-wrap gap-2">
            {questions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuestion(question)}
                className="bg-gray-100 border-none rounded-2xl px-4 py-2 text-xs cursor-pointer hover:bg-gray-200 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot

