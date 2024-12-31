import "./../styles/ContactForm.css";

function ContactForm() {
  return (
    <div className="contact-form" id="contact">
      <h2>Contact Me</h2>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Your name" required />
        <label>Email</label>
        <input type="email" placeholder="Your email" required />
        <label>Message</label>
        <textarea rows="5" placeholder="Leave a message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
export default ContactForm;