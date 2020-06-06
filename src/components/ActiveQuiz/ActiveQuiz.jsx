import React from 'react'
import styles from './ActiveQuiz.module.css'

const ActiveQuiz = props => (
    <div className={styles.ActiveQuiz}>
        <p className = {styles.Question}>
            <span>
            <strong>1.</strong>
            ActiveQuiz component works!
            </span>
            <small>4 from 12</small>
        </p>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
        
    </div>
)

export default ActiveQuiz