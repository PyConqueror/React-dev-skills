function SkillListItem(props) {
    return (
        <li className="SkillListItem">
            {props.skill.name}
            <span className="level">LEVEL {props.skill.level}</span>
        </li>
    );
}

export default SkillListItem