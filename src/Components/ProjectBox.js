function ProjectBox(props){
    return(
        <div className='box' 
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="10"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center">
        <div className='background'>
             <div className ='img'>{props.img}</div>
        </div>
        
       <h4>{props.project}</h4>
       <h3>{props.technologies}</h3>
       <h3>{props.Demo}</h3>
    </div>
    )
}
export default ProjectBox;