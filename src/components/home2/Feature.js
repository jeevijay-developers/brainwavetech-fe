import React from 'react'

export default function Feature({ featuresData }) {
    return (
        <>
            {featuresData.length > 0 &&
             featuresData.map((dt, i) => {
            const { title, p1, p2, icon, varient } = dt;
              return (
                    <div key={i} className="col-lg-4 col-md-6 col-12 mb-4 wow fadeInUp">
        <div className={`feature-card-style-one ${varient} h-100 text-center text-md-start px-3 py-4`}>
          
          {/* Icon */}
          <div className="feature-icon mb-3">
            <img src={icon} alt={title} className="img-fluid" />
          </div>
          
          {/* Text */}
          <div className="feature-disc">
            <h5 className="fs-5 fs-md-6">{title}</h5>
            <p className="fs-6 fs-md-5 mb-0">{p1} <br /> {p2}</p>
          </div>
        </div>
      </div>
      
    );
  })}
           
        </>
    )
}
