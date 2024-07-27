import './Skill.scss'

export default function Skill()
{
    const skillSet = [
        {
            name : "Front-End",
            set : [ "HTML" , "CSS" , "React" , "Redux" , "Styled-Components" , "SCSS" , "Bootstrap"]
        },
        {
            name: "Back-End",
            set: ["JavaScript" , "NodeJs" , "PostMan API" , "API Development" , "MongoDB" , "Oracle", ,"Firebase","Socket.io"]
        },
        {
            name: "Programming",
            set:["Java", "Python", "Data Structures and Algorithms" ]
        }
    ]
    return  <div className='containerS'>
               <div className='skillBox'>
                <div className='mySkills'>
                {skillSet.map((s,index) => <div key={index} className='skillSet'>
                    <h1>{s?.name}</h1>
                    <div className='skillNames'>
                        {(s.set).map((item ,index)=> <span key={index }>{item} </span>)}
                    </div>
                    </div> )} 
                </div>
                <img src="./images/code.png" alt="pic" />
            </div>
            </div>
}