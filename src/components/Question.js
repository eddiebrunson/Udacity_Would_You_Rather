import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Question extends React.Component {

  render() {
    const { question, id } = this.props;
    return (
      <Link to={`/questions/${id}`} className='question'>
        <div className="question-options">
          <h2>Would you rather?</h2>
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
