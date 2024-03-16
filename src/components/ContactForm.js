// components/ContactForm.js
const ContactForm = () => {
    return (
      <form className="container mx-auto p-4 bg-white shadow rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-800">Name:</label>
          <input type="text" id="name" className="w-full border border-gray-300 rounded-md px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800">Email:</label>
          <input type="email" id="email" className="w-full border border-gray-300 rounded-md px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-800">Message:</label>
          <textarea id="message" rows="4" className="w-full border border-gray-300 rounded-md px-3 py-2"></textarea>
        </div>
        <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Submit</button>
      </form>
    );
  };

  export default ContactForm;
