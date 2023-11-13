import SkillListItem from "./SkillListItem"

function SkillList(props) {
    return (
        <ul>
            {props.skills.map(skill => (
                <SkillListItem skill={skill.name} level={skill.level}/>
            ))}
        </ul>
    )
}

export default SkillList