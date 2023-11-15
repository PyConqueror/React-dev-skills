import {useState} from "react";

function NewSkillForm( {addSkill} ) {
    const [formData, setFormData] = useState({
        name: "",
        level: 3
    });
    // function handleChange(event) {
    //     const newFormData = {[event.target.name]: event.target.value };
    //     setFormData(...formData, newFormData);
    // }
    function addNewSkill(event) {
        event.preventDefault();
        addSkill(formData);
        setFormData({
            name: "CSS",
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
            onChange={(e) => setFormData({...formData, name: e.target.value})}            value={formData.name}
            /> 
            <label>Level</label>
            <select 
            name="level"
            onChange={(e) => setFormData({...formData, level: e.target.value})}            value={formData.level}
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