export default function SingleTeamMember({ teamData }) {
    return (
        <>
            {
                teamData.length > 0 && teamData.map(dt => {
                    return (
                        <div key={dt.id} className="col-lg-4 col-md-6">
                            <div className="team-card-style-one">
                                <div className="team-avater">
                                    <img src={dt.img} alt={dt.title} />
                                </div>
                                <div className="team-disc">
                                    <h5>{dt.title}</h5>
                                    <p>{dt.designation}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
