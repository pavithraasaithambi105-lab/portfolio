import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Contact.css";


function Contact(){
const [sent, setSent] = useState(false);
const [error, setError] = useState(null);


async function handleSubmit(e){
e.preventDefault();
const form = e.target;
const fd = new FormData(form);
fd.append('access_key', 'YOUR_WEB3FORMS_KEY_HERE'); // replace


try{
const res = await fetch('https://api.web3forms.com/submit', {method:'POST',body:fd});
const data = await res.json();
if(data.success){
setSent(true);
form.reset();
setTimeout(()=>setSent(false),2000);
} else {
setError('Failed to send');
}
}catch(err){setError(String(err))}
}


return (
<div className="contact-grid">
<div className="contact-left card">
<h2>Connect With Me</h2>
<p className="subtitle">Professional profiles & quick links</p>
<div className="social-list">
<a className="glow-link" href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin/> LinkedIn</a>
<a className="glow-link" href="https://github.com" target="_blank" rel="noreferrer"><FaGithub/> GitHub</a>
<a className="glow-link" href="mailto:youremail@gmail.com"><FaEnvelope/> Email</a>
</div>
<div style={{marginTop:18}} className="unique-box">
<h4>Signature</h4>
<p style={{opacity:0.8}}>Floating assistant + neon theme — my personal brand.</p>
</div>
</div>


<form className="contact-form card" onSubmit={handleSubmit}>
<h2>Send a Message</h2>
<div className="input-group">
<input name="name" type="text" required />
<label>Name</label>
</div>
<div className="input-group">
<input name="email" type="email" required />
<label>Email</label>
</div>
<div className="input-group textarea-group">
<textarea name="message" maxLength={1000} required></textarea>
<label>Your Message</label>
<div className="char-count">Scrollable & capped at 1000 chars</div>
</div>


<button className={`send-btn ${sent? 'sent':''}`} type="submit">{sent? '✔ Sent':'Send Message'}</button>
{error && <p style={{color:'#ffb3c6'}}>{error}</p>}
</form>
</div>
)
}
export default Contact;