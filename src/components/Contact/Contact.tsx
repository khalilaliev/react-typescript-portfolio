import React, {useState} from 'react';

const ContactForm = () => {

  const [result, setResult] = useState<{
    message: string;
    type: "loading" | "success" | "error" | null;
  }>({
    message: "",
    type: null,
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult({ message: "Sending...", type: "loading" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult({ message: "Form Submitted Successfully!", type: "success" });
        form.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult({ message: "Something went wrong!", type: "error" });
    }
  };
  console.log('works');
  return (
    <section>
      {result.message && (
        <span
          className={`
            block text-center text-lg my-4 font-semibold 
            ${result.type === "loading" ? "text-blue-500" : ""}
            ${result.type === "success" ? "text-green-500" : ""}
            ${result.type === "error" ? "text-red-500" : ""}
          `}
        >
            {result.message}
          </span>
      )}

      <form onSubmit={onSubmit}>
        <div className="w-full dark:bg-dark-bg dark:shadow-header-bg bg-white rounded-xl shadow-lg py-10 px-5 flex flex-col">
          <div className="mb-5 flex flex-col">
            <label className="mb-3 dark:text-white"> Full name: </label>
            <input
              required
              name="name"
              className="dark:bg-dark-bg border focus:outline-none focus:border-gray-400 dark:focus:border-gray-300 dark:text-white dark:border-gray-500 p-4 rounded-xl w-full"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-5 flex flex-col">
            <label className="mb-3 dark:text-white"> E-Mail: </label>
            <input
              required
              name="email"
              className="dark:bg-dark-bg border focus:outline-none focus:border-gray-400 dark:focus:border-gray-300 dark:text-white dark:border-gray-500 p-4 rounded-xl w-full"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-5 flex flex-col">
            <label className="mb-3 dark:text-white"> Message: </label>
            <textarea
              required
              name="message"
              className="dark:bg-dark-bg border focus:outline-none focus:border-gray-400 dark:focus:border-gray-300 dark:text-white dark:border-gray-500 p-4 rounded-xl w-full"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 dark:bg-blue-600 text-xl dark:hover:drop-shadow-xl  text-white   active:scale-[0.99] py-3 text-center w-full rounded-xl hover:drop-shadow-md transition-all duration-150"
          >
            Send message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;