function NewSkillForm() {
    return(
        <form >
            <label>Skill</label>
            <input type="text" name="" id="" />
            <label>Level</label>
            <select name="level">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button type="submit">ADD SKILL</button>
        </form>
    );
};

export default NewSkillForm