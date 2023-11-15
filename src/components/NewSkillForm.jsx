import {useState} from "react";

function NewSkillForm( {addSkill} ) {
    const [formData, setFormData] = useState({
        name: "",
        level: 3
    });
    function handleChangeName(event) {
        setFormData({ ...formData, name: event.target.value });

    }
    function handleChangeLevel(event) {
        setFormData({ ...formData, level: event.target.value });

    }

    function addNewSkill(event) {
        event.preventDefault();
        addSkill(formData);
        setFormData({
            name: "",
            level: 3
        });
    }
    return(
        <div>
        <form className="NewSkillForm" onSubmit={addNewSkill}>
            <label>Skill</label>
            <input 
            type="text" 
            name="name"  
            onChange={handleChangeName}
            value={formData.name}
            /> 
            <label>Level</label>
            <select 
            name="level"
            onChange={handleChangeLevel}
            value={formData.level}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type="submit">ADD SKILL</button>
        </form>
        <h1>{formData.name} {formData.level}</h1>
        </div>
        
    );
};

export default NewSkillForm