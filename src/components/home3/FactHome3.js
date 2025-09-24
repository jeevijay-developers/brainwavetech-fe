import factsH3 from "@/constant/home3/factsData";

export default function FactHome3() {
    return (
        <div className="fun-fact-style-three pt-60">
            <div className="container">
                <div className="row gy-4">
                    {
                        factsH3.length > 0 && factsH3.map(fact => {
                            const { id, count, title, delay } = fact;
                            return (
                                <div key={id} className="col-lg-3 col-md-6 col-sm-6 wow fadeInRight" data-wow-delay={delay}>
                                    <div className="single-fact-style-three has-border-right">
                                        <h1 className="text-xxl text-soft-black">{count}</h1>
                                        <p>{title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
