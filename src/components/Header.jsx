import React from 'react'

const Header = ({ menus }) => {
    console.log(menus);
    return (
        <header>
           
            <nav>
                <ul>
                    {
                        menus.map((item) => {
                            return (
                                <li><a href={item.path}>{item.name}</a></li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header