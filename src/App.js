import './App.css'



const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD66D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

export default function App() {
  return (
    <div className="card">
      <Image img={'dev_photo.jpg'} alt="dev_photo" />
      <div className="data">
        <DeveloperInfo
          name={'Jonas Schmedtmann'}
          text={
            'Full-stack web dveloper and teacher ay Udemy. When not coding or preparing a course, I lie to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.'
          }
        />
        <SkillList />
      </div>
    </div>
  )
}

function Image(props) {
  return <img className="avatar" src={props.img} alt={props.alt} />
}

function DeveloperInfo(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.text}</p>
    </div>
  )
}

function SkillList() {
  return (
    <div className="skill-list">
     {skills.map((skill) => (
      <Skill skill={skill.skill} 
      color={skill.color} 
     level={skill.level}
      />
      ))}
    </div>
  )
}

function Skill({skill, color, level}) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{ level === 'beginner' && '👶'}</span>
      <span>{ level === 'intermediate' && '👌'}</span>
      <span>{ level === "advanced" && '💪'}</span>
    </div>
  )
}
