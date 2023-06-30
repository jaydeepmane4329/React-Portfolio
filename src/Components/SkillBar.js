
function SkillBar(props) {
    return (
        <div className="skillsBar">
            <p>{props.skill}</p>
            <h6>{props.name}</h6>
        </div>
    )
}
export default SkillBar;