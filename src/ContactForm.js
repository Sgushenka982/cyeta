function ContactForm() {
    return (
        <form className="contactForm">
            <h3 className="contactForm-header">Request a free quote</h3>
            <label className="inputLabel" htmlFor="serviceNeed">Service needed *</label>
            <input type="text" name="serviceNeed" id="serviceNeed" required placeholder="General building job"/>
            <label className="inputLabel" htmlFor="name">Name*</label>
            <input type="text" name="name" id="name" required/>
            <label className="inputLabel" htmlFor="email">Email*</label>
            <input type="email" name="email" id="email" required/>
            <label className="inputLabel" htmlFor="phone">Phone:</label>
            <input type="phone" name="phone" id="phone" required/>
            <button type="submit" className="contactForm-submit">Submit</button>
        </form>
    )
}

export default ContactForm