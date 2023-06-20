import '../style/styles.css';
import React, { useEffect } from 'react';

function Sidebar() {


    useEffect(() => {
        const linkColor = document.querySelectorAll('.nav__link');

        const colorLink = (event) => {
            linkColor.forEach((l) => l.classList.remove('active'));
            event.target.classList.add('active');
        };

        linkColor.forEach((l) => l.addEventListener('click', colorLink));

        return () => {
            linkColor.forEach((l) => l.removeEventListener('click', colorLink));
        };
    }, []);


    return (
        <div className="nav" id="navbar">
            <nav className="nav__container">
                <div>
                    <a href="#" className="nav__link nav__logo">
                        <i className="bx bxs-user-detail bx-md nav__icon" />
                        <span className="nav__logo-name">HRMS</span>
                    </a>
                    <div className="nav__list">
                        <div className="nav__items">
                            <h3 className="nav__subtitle">Dashboard</h3>
                            <a href="#" className="nav__link active">
                                <i className="bx bx-home nav__icon" />
                                <span className="nav__name">Home</span>
                            </a>
                            <div className="nav__dropdown">
                                <a href="#" className="nav__link">
                                    <i className="bx bx-user nav__icon" />
                                    <span className="nav__name">Admin</span>
                                    <i className="bx bx-chevron-down nav__icon nav__dropdown-icon" />
                                </a>
                                <div className="nav__dropdown-collapse">
                                    <div className="nav__dropdown-content">
                                        <a href="#" className="nav__dropdown-item">
                                            Acc Charge
                                        </a>
                                        <a href="#" className="nav__dropdown-item">
                                            Bill Category
                                        </a>
                                        <a href="#" className="nav__dropdown-item">
                                            Bill Type
                                        </a>
                                        <a href="#" className="nav__dropdown-item">
                                            Department
                                        </a>
                                        <a href="#" className="nav__dropdown-item">
                                            Financial Year
                                        </a>
                                        <a href="#" className="nav__dropdown-item">
                                            Funding Source
                                        </a>
                                        <a href="#" className="nav__dropdown-item">
                                            Ledger Type
                                        </a>
                                        <a href="#" className="nav__dropdown-item">
                                            Payment Type
                                        </a>
                                    </div>
                                </div>
                                {/* <div class="nav__dropdown-collapse">
                              <div class="nav__dropdown-content">
                                  <a href="#" class="nav__dropdown-item">Acc Charge</a>
                                  <a href="#" class="nav__dropdown-item">Bill Category</a>
                                  <a href="#" class="nav__dropdown-item">Bill Type</a>
                                  <a href="#" class="nav__dropdown-item">Department</a>
                                  <a href="#" class="nav__dropdown-item">Financial Year</a>
                                  <a href="#" class="nav__dropdown-item">Funding Source</a>
                                  <a href="#" class="nav__dropdown-item">Ledger Type</a>
                                  <a href="#" class="nav__dropdown-item">Payment Type</a>
                              </div>
                          </div> */}
                            </div>
                            <div className="nav__dropdown">
                                <a href="#" className="nav__link">
                                    <i className="bx bx-code nav__icon" />
                                    <span className="nav__name">Developers</span>
                                    <i className="bx bx-chevron-down nav__icon nav__dropdown-icon" />
                                </a>
                                <div className="nav__dropdown-collapse">
                                    <div className="nav__dropdown-content">
                                        <a href="#" className="nav__dropdown-item">
                                            A
                                        </a>
                                        <a href="#" className="nav__dropdown-item">
                                            B
                                        </a>
                                        <a href="#" className="nav__dropdown-item">
                                            C
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="nav__dropdown">
                                <a href="#" className="nav__link">
                                    <i className="bx bx-group nav__icon" />
                                    <span className="nav__name">Employee</span>
                                    <i className="bx bx-chevron-down nav__icon nav__dropdown-icon" />
                                </a>
                                <div className="nav__dropdown-collapse">
                                    <div className="nav__dropdown-content">
                                        <a href="#" className="nav__dropdown-item">
                                            A
                                        </a>
                                        <a href="#" className="nav__dropdown-item">
                                            B
                                        </a>
                                        <a href="#" className="nav__dropdown-item">
                                            C
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" className="nav__link nav__logout">
                    <i className="bx bx-log-out nav__icon" />
                    <span className="nav__name">Log Out</span>
                </a>
            </nav>
        </div>
    )

}

export default Sidebar;