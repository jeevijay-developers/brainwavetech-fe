export default function SingleWorkProcess({ workFeaturesData }) {
    return (
        <>
            {
                workFeaturesData.length > 0 && workFeaturesData.map(dt => (
                    <div key={dt.id} className="work-feature-card wow fadeInUp" >
                        <div className="feature-icon">
                            <img src={`/images/Icons/${dt.icon}`} alt="" />
                        </div>
                        <div className="feature-info">
                            <h5 className="text-bright-gray">{dt.title}</h5>
                            <p>{dt.p}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
