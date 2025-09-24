import React, { useEffect } from 'react'
import SingleFact from './SingleFact'
import facts from '@/constant/home1/factsData'


export default function Fact() {
    return (
        <div className="fun-fact-style-one position-relative">
            <div className="container">
                <div className="row gy-4 d-flex flex-md-row justify-content-between">
                    <SingleFact factsData={facts} />
                </div>
            </div>
        </div>
    )
}
