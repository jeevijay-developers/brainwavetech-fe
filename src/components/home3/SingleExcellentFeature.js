import React from 'react'

export default function SingleExcellentFeature({ excellentFeatures }) {
    return (
        <>
            {
                excellentFeatures.length > 0 && excellentFeatures.map(dt => {
                    const { id, title, p, icon, delay } = dt;
                    return (
                        <div key={id} className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft" data-wow-delay={delay}>
                            <div className="feature-card-style-four">
                                <div className="feature-icon">
                                    <img src={icon} alt="features-icon" />
                                </div>
                                <div className="feature-disc">
                                    <h5>{title}</h5>
                                    <p className="body-disply-2">{p}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
