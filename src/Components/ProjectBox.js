function ProjectBox(props) {
    return (
        <div className='box'
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">
            <div className='background'>
                <div className='img'>{props.img}</div>
            </div>
            <h3>{props.project}</h3>
            <h5>{props.technologies}</h5>
            <h6>{props.Demo}</h6>
        </div>
    )
}
export default ProjectBox;