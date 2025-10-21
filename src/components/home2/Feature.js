import React from 'react'

export default function Feature({ featuresData }) {
    return (
        <>
            {
                featuresData.length > 0 && featuresData.map((dt, i) => {
                    const { title, p1, p2, icon, varient } = dt;
                    return (
                        <div key={i} className="col-lg-4 col-md-6 col-6 wow fadeInUp" >
                            <div className={`feature-card-style-one ${varient}`}>
                                <div className="feature-icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="feature-disc">
                                    <h5>{title}</h5>
                                    <p>{p1} <br /> {p2}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
