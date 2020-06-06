import React, {Component} from 'react'
import styles from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {

    state = {
        quiz: []
    }

    render() {
        return (
        <div className={styles.Quiz}>
            <h1> Quiz Container</h1>
            <ActiveQuiz></ActiveQuiz>
        </div>
        )
    }
}

export default Quiz
