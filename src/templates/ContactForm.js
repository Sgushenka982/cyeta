import axios from 'axios'

function ContactForm() {
    const sendEmail = (e)=>{
        e.preventDefault();
        const data = JSON.stringify({
            serviceNeed:document.getElementById('serviceNeed').value,
            name:document.getElementById('name').value,
            email:document.getElementById('email').value,
            phone:document.getElementById('phone').value
        })
        const options = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        axios.post("http://localhost:8081/mail",data,options)
            .then(response => console.log("response", response.data))
            .catch(error => console.log(error))
    }
    return (
        <form className="contactForm">
            <h3 className="contactForm-header">Request a free quote</h3>
            <label className="inputLabel" htmlFor="serviceNeed">Service needed*</label>
            <select className="contactForm-input" name="serviceNeed" id="serviceNeed" required >
                <option value="">General building job</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
            </select>
            <label className="inputLabel" htmlFor="name">Name*</label>
            <input className="contactForm-input" type="text" name="name" id="name" required/>
            <label className="inputLabel" htmlFor="email">Email*</label>
            <input className="contactForm-input" type="email" name="email" id="email" required/>
            <label className="inputLabel" htmlFor="phone">Phone:</label>
            <input className="contactForm-input" type="phone" name="phone" id="phone" required/>
            <button type="submit" className="contactForm-submit" onClick={(e)=>sendEmail(e)}>Submit</button>
        </form>
    )
}

export default ContactForm