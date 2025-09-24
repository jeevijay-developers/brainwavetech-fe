export default function SingleCounter({ counterData }) {
    return (
        <>
            {
                counterData.length > 0 && counterData.map((dt) => {
                    const { count, status, id } = dt;
                    return (
                        <div key={id} className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft">
                            <div className="single-fact-style-two">
                                <h2 className="text-soft-black">{count}</h2>
                                <span>{status}</span>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
