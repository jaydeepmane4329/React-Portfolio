
function SkillBar(props){
    return(
     
         <div  data-aos="slide-up"
         data-aos-offset="0"
         data-aos-delay="10"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
         data-aos-anchor-placement="bottom-bottom">
             <p3>{props.skill}</p3>
             <h6>{props.name}</h6>
         </div>
    )
}
export default SkillBar;