function SkillListItem(props) {
    return (
        <li className="SkillListItem">
            {props.skill}
            <span className="level">LEVEL {props.level}</span>
        </li>
    );
}

export default SkillListItem