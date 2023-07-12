import React from 'react';

function ContactPage() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <textarea placeholder="Your message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
