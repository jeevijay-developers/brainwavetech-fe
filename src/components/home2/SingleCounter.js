export default function SingleCounter({ counterData }) {
    return (
        <>
            {
                counterData.length > 0 && counterData.map((dt) => {
                    const { count, status, id } = dt;
                    return (
                        <div key={id} className="col-lg-3 col-md-3 col-6 fadeInLeft">
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
