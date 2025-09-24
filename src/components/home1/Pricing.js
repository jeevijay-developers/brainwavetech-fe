import Link from 'next/link';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Pricing({ mt, spaceTop = true, spaceTopXl, spaceBottomXl }) {
    return (
        <>
            <div className="container">
                <div className="row">
                </div>
            </div>

            <div className={`price-area ${spaceTop ? 'pt-120' : ""} ${spaceTopXl ? 'pt-xxl' : ""} ${spaceBottomXl ? "section-gap-xl-bottom" : ""}`}>
                <div className="pricing-tab-btn">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="blog-header text-center">
                                    <h3 className="text-bright-gray">Our Pricing</h3>
                                    <p className="pt-3 body-disply-1 text-mid-gray">Fronted dramatically sped our go-to-market by cutting our up-front development time</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Tabs
                                    defaultActiveKey="Annually"
                                    id="uncontrolled-tab-example"
                                    className={`mb-3 price-nav ${mt && "mt-0"}`}
                                    style={{ maxWidth: "800px", margin: "50px auto" }}
                                >
                                    <Tab eventKey="Annually" title={`Annually`} className='price-nav justify-content-center'>
                                        <div className="price-wrap">
                                            <div className="row gy-4 justify-content-center">
                                                <div className="col-lg-6 col-md-6 col-xl-3 p-xl-0 price-col">
                                                    <div className="price-box">
                                                        <div className="price-title-box">
                                                            <h2 className="price-title">Time Free</h2>
                                                            <h3 className="price-number">$0 <sub>For one user only</sub></h3>
                                                        </div>
                                                        <div className="price-list">
                                                            <a className="d-inline-block btn-fill-rounded w-100 text-center" href="#">Chose Free</a>
                                                            <ul >
                                                                <li><b>Everything in Free, plus:</b></li>
                                                                <li>
                                                                    Time tracking
                                                                    <button type="button" className="btn btn-secondary tooltip-btn p-0 border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, reprehenderit?">
                                                                        <i className="bi bi-exclamation-circle"></i>
                                                                    </button>
                                                                </li>
                                                                <li>Timeshares</li>
                                                                <li>Timesheets</li>
                                                                <li>Timesheets</li>
                                                                <li>Timesheets</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-xl-3 p-xl-0 price-col">
                                                    <div className="price-box">
                                                        <div className="price-title-box">
                                                            <h2 className="price-title">Time Free</h2>
                                                            <h3 className="price-number">$0 <sub>For one user only</sub></h3>
                                                            <p>Starts at $140. Includes 2 users</p>
                                                        </div>
                                                        <div className="price-list">
                                                            <a className="d-inline-block btn-fill-rounded w-100 text-center" href="#">Chose Free</a>
                                                            <ul >
                                                                <li><b>Everything in Free, plus:</b></li>
                                                                <li>
                                                                    Time tracking
                                                                    <button type="button" className="btn btn-secondary tooltip-btn p-0 border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, reprehenderit?">
                                                                        <i className="bi bi-exclamation-circle"></i>
                                                                    </button>
                                                                </li>
                                                                <li>1 integration</li>
                                                                <li>24 hour support</li>
                                                                <li>Per user settings</li>
                                                                <li>Management roles</li>
                                                                <li>Modify time settings</li>
                                                                <li>Require reason for time edits</li>
                                                                <li>Edit other member's time</li>
                                                                <li>Export reports</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-xl-3 p-xl-0 price-col">
                                                    <div className="price-box popular">
                                                        <div className="price-title-box">
                                                            <h2 className="price-title">Time Free</h2>
                                                            <h3 className="price-number">$0 <sub>For one user only</sub></h3>
                                                            <p>Starts at $140. Includes 2 users</p>
                                                        </div>
                                                        <div className="price-list">
                                                            <a className="d-inline-block btn-fill-rounded w-100 text-center" href="#">Chose Free</a>
                                                            <ul >
                                                                <li><b>Everything in Free, plus:</b></li>
                                                                <li>
                                                                    Time tracking
                                                                    <button type="button" className="btn btn-secondary tooltip-btn p-0 border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, reprehenderit?">
                                                                        <i className="bi bi-exclamation-circle"></i>
                                                                    </button>
                                                                </li>
                                                                <li>Timesheets</li>
                                                                <li>Unlimited teams</li>
                                                                <li>Payments & payroll</li>
                                                                <li>Unlimited integration</li>
                                                                <li>Time off & holidays</li>
                                                                <li>Scheduling & attendance</li>
                                                                <li>
                                                                    Invoices
                                                                    <button type="button" className="btn btn-secondary tooltip-btn p-0 border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, reprehenderit?">
                                                                        <i className="bi bi-exclamation-circle"></i>
                                                                    </button>
                                                                </li>
                                                                <li>Timesheet approvals</li>
                                                                <li>
                                                                    Daily & weekly limits
                                                                    <button type="button" className="btn btn-secondary tooltip-btn p-0 border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, reprehenderit?">
                                                                        <i className="bi bi-exclamation-circle"></i>
                                                                    </button>
                                                                </li>
                                                                <li>Expense tracking</li>
                                                                <li>24 hour support</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-xl-3 p-xl-0 price-col">
                                                    <div className="price-box">
                                                        <div className="price-title-box">
                                                            <h2 className="price-title">Time Free</h2>
                                                            <h3 className="price-number">$0 <sub>For one user only</sub></h3>
                                                            <p>Starts at $140. Includes 2 users</p>
                                                        </div>
                                                        <div className="price-list">
                                                            <a className="d-inline-block btn-fill-rounded w-100 text-center" href="#">Chose Free</a>
                                                            <ul >
                                                                <li><b>Everything in Free, plus:</b></li>
                                                                <li>
                                                                    Time tracking
                                                                    <button type="button" className="btn btn-secondary tooltip-btn p-0 border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, reprehenderit?">
                                                                        <i className="bi bi-exclamation-circle"></i>
                                                                    </button>
                                                                </li>
                                                                <li>Timeshares</li>
                                                                <li>Timesheets</li>
                                                                <li>Timesheets</li>
                                                                <li>Timesheets</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Monthly" title="Monthly">
                                        <div className="price-wrap">
                                            <div className="row gy-4 justify-content-center">
                                                <div className="col-lg-6 col-md-6 col-xl-3 p-xl-0 price-col">
                                                    <div className="price-box">
                                                        <div className="price-title-box">
                                                            <h2 className="price-title">Time Free</h2>
                                                            <h3 className="price-number">$0 <sub>For one user only</sub></h3>
                                                            <p>Starts at $140. Includes 2 users</p>
                                                        </div>
                                                        <div className="price-list">
                                                            <a className="d-inline-block btn-fill-rounded w-100 text-center" href="#">Chose Free</a>
                                                            <ul >
                                                                <li><b>Everything in Free, plus:</b></li>
                                                                <li>
                                                                    Time tracking
                                                                    <button type="button" className="btn btn-secondary tooltip-btn p-0 border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, reprehenderit?">
                                                                        <i className="bi bi-exclamation-circle"></i>
                                                                    </button>
                                                                </li>
                                                                <li>1 integration</li>
                                                                <li>24 hour support</li>
                                                                <li>Per user settings</li>
                                                                <li>Management roles</li>
                                                                <li>Modify time settings</li>
                                                                <li>Require reason for time edits</li>
                                                                <li>Edit other member's time</li>
                                                                <li>Export reports</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-xl-3 p-xl-0 price-col">
                                                    <div className="price-box popular">
                                                        <div className="price-title-box">
                                                            <h2 className="price-title">Time Free</h2>
                                                            <h3 className="price-number">$0 <sub>For one user only</sub></h3>
                                                            <p>Starts at $140. Includes 2 users</p>
                                                        </div>
                                                        <div className="price-list">
                                                            <a className="d-inline-block btn-fill-rounded w-100 text-center" href="#">Chose Free</a>
                                                            <ul >
                                                                <li><b>Everything in Free, plus:</b></li>
                                                                <li>
                                                                    Time tracking
                                                                    <button type="button" className="btn btn-secondary tooltip-btn p-0 border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, reprehenderit?">
                                                                        <i className="bi bi-exclamation-circle"></i>
                                                                    </button>
                                                                </li>
                                                                <li>Timesheets</li>
                                                                <li>Unlimited teams</li>
                                                                <li>Payments & payroll</li>
                                                                <li>Unlimited integration</li>
                                                                <li>Limited public API</li>
                                                                <li>Time off & holidays</li>
                                                                <li>Scheduling & attendance</li>
                                                                <li>
                                                                    Invoices
                                                                    <button type="button" className="btn btn-secondary tooltip-btn p-0 border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, reprehenderit?">
                                                                        <i className="bi bi-exclamation-circle"></i>
                                                                    </button>
                                                                </li>
                                                                <li>Client & project budgets</li>
                                                                <li>Timesheet approvals</li>
                                                                <li>
                                                                    Daily & weekly limits
                                                                    <button type="button" className="btn btn-secondary tooltip-btn p-0 border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, reprehenderit?">
                                                                        <i className="bi bi-exclamation-circle"></i>
                                                                    </button>
                                                                </li>
                                                                <li>Expense tracking</li>
                                                                <li>24 hour support</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-xl-3 p-xl-0 price-col">
                                                    <div className="price-box">
                                                        <div className="price-title-box">
                                                            <h2 className="price-title">Time Free</h2>
                                                            <h3 className="price-number">$0 <sub>For one user only</sub></h3>
                                                            <p>Starts at $140. Includes 2 users</p>
                                                        </div>
                                                        <div className="price-list">
                                                            <a className="d-inline-block btn-fill-rounded w-100 text-center" href="#">Chose Free</a>
                                                            <ul >
                                                                <li><b>Everything in Free, plus:</b></li>
                                                                <li>
                                                                    Time tracking
                                                                    <button type="button" className="btn btn-secondary tooltip-btn p-0 border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, reprehenderit?">
                                                                        <i className="bi bi-exclamation-circle"></i>
                                                                    </button>
                                                                </li>
                                                                <li>Timeshares</li>
                                                                <li>Timesheets</li>
                                                                <li>Timesheets</li>
                                                                <li>Timesheets</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;