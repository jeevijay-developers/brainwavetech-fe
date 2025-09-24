import React from 'react'
import SingleTeamMember from './SingleTeamMember'

export default function TeamMember({ teamData }) {
    return (
        <div className={`team-style-one section-gap-bottom-y-1 position-relative z-index-1`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center pb-60">
                        <h3 className="text-bright-gray">
                            Our valueabe team member
                        </h3>
                    </div>
                </div>
                <div className="row gy-4">
                    <SingleTeamMember teamData={teamData} />
                </div>
            </div>
        </div>
    )
}
