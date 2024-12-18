import React, { useState } from "react"
import Header from "../components/Header"

export default function GoogleNumbers() {
  const [inputValue, setInputValue] = useState("")
  const [outputValue, setOutputValue] = useState("")
  const [count, setCount] = useState(0)

  const handleConvert = () => {
    // Remove commas from the input
    const sanitizedInput = inputValue.replace(/,/g, "")

    // Extract valid numbers starting with 3 and exactly 10 digits
    const validNumbers = sanitizedInput
      .match(/(?:\D|^)(3\d{9})(\d+)?(?:\D|$)/g)
      ?.map((match) => {
        const number = match.match(/3\d{9}/)?.[0]
        return number ? `92${number}` : null
      })

    if (validNumbers) {
      const uniqueNumbers = [...new Set(validNumbers.filter(Boolean))]
      setOutputValue(uniqueNumbers.join("\n"))
      setCount(uniqueNumbers.length)
    } else {
      setOutputValue("No valid numbers found")
      setCount(0)
    }
  }

  const handleCopy = () => {
    navigator.clipboard
      .writeText(outputValue)
      .then(() => alert("Copied to clipboard!"))
      .catch((err) => console.error("Failed to copy:", err))
  }

  return (
    <>
      <Header />
      <div className="w-11/12 m-auto max-w-[1400px] mx-auto mt-20 py-10">
        <h1 className="text-4xl font-poppins text-white mb-5">
          Whatsapp Formatter :
        </h1>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side - Input */}
          <div>
            <div className="w-full lg:w-auto">
              <label className="text-white text-[24px] mb-3">
                ADD NUMBER LIST HERE
              </label>
              <textarea
                id="message"
                rows="10"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={`Enter your numbers here`}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              ></textarea>
              <div className="mt-3 text-end">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={handleConvert}
                >
                  Convert
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Output */}
          <div>
            <label className="text-white text-[24px] mb-3">
              YOUR LIST ({count})
            </label>
            <textarea
              id="message"
              rows="10"
              cols="30"
              disabled
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Valid numbers will appear here"
              value={outputValue}
            ></textarea>
            <div className="mt-3 text-end">
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                onClick={handleCopy}
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
