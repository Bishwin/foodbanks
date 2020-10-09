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
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://www.foodbanks.fyi"> foodbanks.fyi</a>
                        <Link to='/about' class="navbar-item"> About </Link>
                    </div>
                </nav>
            </header>
            {children}
        </div>
    )
}
