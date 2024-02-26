import './App.css';

// const skillsList= ['HTML+CSS', 'JavaScript', 'Web Design', 'Git & Github', 'React', 'Svelte' ]

export default function App() {
  return (
    <div className='card' >     
      <body>
        <Image img = {'dev_photo.jpg'} alt="dev_photo"/>
        <DeveloperInfo 
        name={"Jonas Schmedtmann"} 
        text= {'Full-stack web dveloper and teacher ay Udemy. When not coding or preparing a course, I lie to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.'}/>      
        <SkillList />
      </body>
    </div>
  );
}

function Image(props){
  return(
    <div className='avatar'>
      <img src={props.img}alt={props.alt} />
    </div>
  )
}

function DeveloperInfo(props){
  return(
    <div className='data'>
      <h1>{props.name}</h1>
      <p>{props.text}</p>
    </div>
  )
}

function SkillList(){ 
  return(
    <div className='skill-list'>
      <Skill skill='HTML+CSS' color= 'red'/> 
      <Skill skill='Web Design' color= 'orange'/>
      <Skill skill='Git & Github' color= 'yellow'/>
      <Skill skill='React'color= 'blue'/>
      <Skill skill='Svelte'color= 'pink'/>
    </div>
  )
}

function Skill(props){ 

  return(
    <div className='skill' style={{backgroundColor: props.color}}>
      <span >{props.skill}</span>
    </div>
  )
}

