import {useState} from "react";

function NewSkillForm( {addSkill} ) {
    const [formData, setFormData] = useState({
        skill: " ",
        level: " "
    });
    function handleChange(event) {
        const newFormData = {[event.target.name]: event.target.value };
        setFormData(newFormData);
    }
    function addNewSkill(event) {
        event.preventDefault();
        addSkill(formData);
    }
    return(
        <div>
        <form className="NewSkillForm" onSubmit={addNewSkill}>
            <label>Skill</label>
            <input 
            type="text" 
            name="skill"  
            onChange={handleChange}
            /> 
            <label>Level</label>
            <select 
            name="level"
            onChange={handleChange}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type="submit">ADD SKILL</button>
        </form>
        <h1>{formData.skill} {formData.level}</h1>
        </div>
        
    );
};

export default NewSkillForm