import './Contat.scss'

export default function Contact(){

    function sendEmail(e){
        e.preventDefault();
        e.target.reset();
    }
    return (
        <div className='containerC'>
            <p>Thank you for visiting my portfolio! <br />I am always excited to connect with fellow enthusiasts, potential collaborators, and clients. Whether you have a project in mind, or simply want to discuss the latest in tech and development, feel free to reach out.</p>
            <div>
                <form onSubmit={sendEmail} autoComplete='off'>
                    <input type="text" placeholder="Enter name" name="from_name" />
                    <input type="email" placeholder="Enter e-mail" name="from_email"/>
                    <textarea placeholder="Type message" name="message"></textarea>
                    <button type="submit">Send</button>
                </form>
            
                <div className="links">
                    <a href="https://www.linkedin.com/in/anuradhasingh12/"><img src="./images/linkedIn.png" alt="linkedin" /></a>
                    <a href="https://github.com/Andivyy11"><img src="./images/github.png" alt="github" /></a>
                </div>
            </div>
        </div>
        )
}