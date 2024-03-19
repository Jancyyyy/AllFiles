import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <a href='https://www.zensar.com' className='navbar-brand'>
                    Zensar Technologies
                </a>
                <button className='navbar-toggler' type='button'
                    data-bs-toggle='collapse' data-bs-target='#navbarCollapse'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarCollapse'>
                    <ul className='navbar-nav'>
                        <li className='nav-item '>
                            <Link className='nav-link active' to='/home'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/cricketer/allCricketers'>
                                Cricketers
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/schedule'>
                                Schedule
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)

export default Header;