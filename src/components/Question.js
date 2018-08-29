import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Question extends React.Component {
 /* handleLike = (e) => {
    e.preventDefault()

    const { dispatch, tweet, authedUser } = this.props

    dispatch(handleToggleQuestion({
      id: questiont.id,
      hasLiked: question.hasLiked,
      authedUser
    }))
  }
  toParent = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/question/${id}`)
  }
  render() {
    const { question } = this.props

    if (question === null) {
      return <p>This Question doesn't exist</p>
  } */

  render() {
    const { question, id } = this.props;
    return (
      <Link to={`/questions/${id}`} className='question'>
        <div className="question-options">
          <h2>Do you prefer?</h2>
          <p>{question.optionOne.text}</p>
          <h2>OR</h2>
          <p>{question.optionTwo.text}</p>
        </div>
        <div className="social-medias">
        </div>
      </Link>
    )
  }
}

function mapStateToProps ({ questions }, {id}) {
  const question = questions[id]
  return {
    question,
  }
}

export default connect(mapStateToProps)(Question)
