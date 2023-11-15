import SkillListItem from "./SkillListItem"

function SkillList(props) {
    return (
        <ul>
            {props.skills.map((skill,index) => (
                <SkillListItem skill={skill} key={index}/>
            ))}
        </ul>
    )
}

export default SkillList