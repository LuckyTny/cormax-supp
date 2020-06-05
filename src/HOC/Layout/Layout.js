import React, {Component} from 'react'
import styles from './Layout.module.css'

class Layout extends Component {
    render() {
        return (
            <div className = {styles.layout}>
                <main>
                    <h1>Layout test 1</h1>
                </main>
            </div>
        )
    }
}

export default Layout