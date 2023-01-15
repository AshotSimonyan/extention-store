import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {ButtonLink, Icon} from "components/UIKit";

const Header = () => {

    const {pathname} = useLocation()

    const devCompanyPage = pathname === '/dev-company-dashboard'
    const extension = pathname === '/add-extension'
    return (
        <header>
            <div className="container">
                <div className="header-content">
                    <div className="left">
                        <Link to='/' className='logo'>
                            <img src="/logo.svg" alt=""/>
                        </Link>
                        <h2>Extensions</h2>
                    </div>
                    <div className="right">
                        {
                            (devCompanyPage || extension) ?
                                <>
                                    <ButtonLink
                                        className={`${devCompanyPage ? 'active' : ''}`}
                                        to='/dev-company-dashboard'
                                        variant='no-style'
                                        size='large'
                                    >
                                        <Icon name='home'/>
                                        My Extensions
                                    </ButtonLink>
                                    <ButtonLink
                                        to='/add-extension'
                                        variant='primary'
                                        size='large'
                                        disabled={extension}
                                    >
                                        <Icon name='add-circle'/>
                                        Add New  Extension
                                    </ButtonLink>
                                </>

                                :
                                <ButtonLink

                                    to='/dev-company-dashboard'
                                    variant='white'
                                    size='large'
                                >
                                    Not find? <strong className='ml-12'>Add your own</strong>
                                </ButtonLink>
                        }

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
