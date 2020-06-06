import React, {Component} from 'react'
import styles from './Layout.module.css'
import Quiz from '../../containers/Quiz/Quiz'

class Layout extends Component {
    render() {
        return (
            <div className = {styles.layout}>
                <main>
                    <p>...</p>
                    <Quiz />
                </main>
            </div>
        )
    }
}

export default Layout