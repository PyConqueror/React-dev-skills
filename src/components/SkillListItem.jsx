function SkillListItem(props) {
    return (
        <li className="SkillListItem">{props.skill} LEVEL {props.level}</li>
    )
}

export default SkillListItem