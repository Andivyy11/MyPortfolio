import './Project.scss'
import {useState} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
export default function Projects()
{

    const list = [
        {
           name:"YouTube Clone",
           desc:"A Video Uploading Web App, where users can upload and watch videos, It uses Firebase storage for uploading thumbnails and videos.",
           img :"./images/youtube.png",
           stack : [
            {
                tech : "FrontEnd",
                skills : ["React" , "Styled-Components" , "Redux"]
            },
            {
                tech : "BackEnd",
                skills : ["JavaScript" , "NodeJs" ,"NoSql" ,"MongoDB" ,"API" ,"PostMan API" , "Firebase","JWT Token"]
            }
           ],
           code:"https://github.com/Andivyy11/YouTube_Clone"
        },
        {
           name:"Social Media App",
           desc:"A social media website with its own Node.js REST API. Features include user feeds, profile pages, messaging, and real-time online status tracking.",
           img:"./images/social.png",
           stack : [
            {
                tech : "FrontEnd",
                skills : ["React" , "CSS" , "ContextAPI"]
            },
            {
                tech : "BackEnd",
                skills : ["JavaScript" , "NodeJs" ,"NoSql" ,"MongoDB" ,"API" ,"PostMan API" ,"Socket.io"]
            }
           ],
           code:"https://github.com/Andivyy11/Social_media"
        },
        { 
           name:"Pixel Playground",
           desc:"A beautiful React website featuring a captivating collection of various 2D games. Designed with creativity and user engagement in mind, this platform offers a delightful gaming experience for users of all ages.",
           img:"./images/pixel.png",
           stack : [
            {
               tech:"FrontEnd",
               skills : ["React" , "CSS" , "JavaScript"]
            }
           ],
           code:"https://github.com/Andivyy11/Pixel_Playground/tree/master",
           live :"https://melodious-heliotrope-2af01a.netlify.app/"
        }
    ]

    const [currentCard , setCard] =useState(0)
    const [stack , setStack] =useState([])
    const [leftBtn , setLeftBtn] =useState(false)
    const [rightBtn , setrightBtn] =useState(true)
    const n= list.length-1;

    function leftSwipe(){ 
        const c=stack[stack.length-1]
        setStack(prevStack => prevStack.slice(0, -1));
        const currCard = document.getElementById("card"+c);
        currCard.classList.remove('disappear')
        const x=currentCard-1
        setCard(x)
        if(x===0)
            setLeftBtn(false)
        if(!rightBtn)
            setrightBtn(true)
    }

    function rightSwipe(){
        const arr = stack;
        arr.push(currentCard)
        setStack(arr)
        const currCard = document.getElementById("card"+currentCard)
        const x=currentCard+1
        setCard(x)
        currCard.classList.add('disappear')
        if(x===n)
            setrightBtn(false)
        if(!leftBtn)
            setLeftBtn(true)
    }

    return (
        <div className='containerP'>
                <button onClick={leftSwipe} id="swipe1" style={{display: leftBtn ? "block" : "none"}}><ArrowBackIosIcon style={{color:"white",fontSize:"40px"}}/></button>
                <div>
                { list.map( (p ,index) => 
                    <div key={index} className='card' style={{zIndex:4-index}} id={`card${index}`}>
                        <div className='pic'>
                            <img src={p.img} alt="pic"/>
                        </div>
                        <div className='desc'>
                            <h2>{p.name}</h2>
                            <p>{p.desc}</p>
                            <h3>Tech Stack</h3>
                            { (p.stack).map( t => 
                                <div className='stack'>
                                <span>{t.tech}</span>
                                <div className='skill'>
                                    {
                                        t.skills.map(s => <span>{s}</span>)
                                    }
                                </div>
                                </div>
                            )}
                            <a href={p.code}>View Code</a>
                            { p.live && <a href={p.live}>Live</a>}
                        </div>
                    </div>
                )
            }
            </div>
            <button onClick={rightSwipe} style={{display: rightBtn ? "block":"none" }} id="swipe2"><ArrowForwardIosRoundedIcon style={{color:"white",fontSize:"40px"}}/></button>
        </div>
    )
}