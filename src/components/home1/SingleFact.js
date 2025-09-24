import { useEffect } from 'react'
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

export default function SingleFact({ factsData }) {
    useEffect(() => {
        new WOW().init()
    }, [])
    return (
        <>
            {
                factsData.length > 0 && factsData.map(dt => (
                    <div key={dt.id} className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.5s" style={{ width: 'max-content' }}>
                        <div className="single-fact">
                            <div className={`fact-icon ${dt.varient ? dt.varient : ""}`}>
                                <img src={`/images/Icons/${dt.icon}`} alt="" />
                            </div>
                            <div className="fact-disc">
                                <h2>{dt.count}</h2>
                                <p>{dt.title}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
