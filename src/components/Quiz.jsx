import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Quiz() {
	const [userAnswers, setUserAnswers] = useState([]);
	const activeQuestionIndex = userAnswers.length;
	const question = QUESTIONS[activeQuestionIndex];
	const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

	function handleSelectAnswer(answer) {
		setUserAnswers((prev) => [...prev, answer]);
	}

	if (quizIsComplete) {
		return (
			<div id="summary">
				<h2>Quiz Completed!</h2>
			</div>
		);
	}

	const shuffledAnswers = [...question.answers];
	// in the sort callback, if you return negative, elements swap, positive, elements stay same
	// shuffle the answers by swaping the elements, each element has 50% chance to swap
	shuffledAnswers.sort((a, b) => Math.random() - 0.5);

	return (
		<div id="question-container">
			<h2 id="question">{question.text}</h2>
			<ul id="answers">
				{question.answers.map((answer) => (
					<li key={answer} className="answer">
						<button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
					</li>
				))}
			</ul>
		</div>
	);
}
