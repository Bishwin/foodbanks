import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li style={{ display: 'inline-block', marginRight: '1rem' }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout({ children }) {
    return (
        <div className='container'>
            <header>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://www.foodbanks.fyi"> foodbanks.fyi</a>
                        <Link to='/about' className="navbar-item"> About </Link>
                    </div>
                </nav>
            </header>
            {children}
        </div>
    )
}
