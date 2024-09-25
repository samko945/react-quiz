import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Quiz() {
	const [userAnswers, setUserAnswers] = useState([]);
	const activeQuestionIndex = userAnswers.length;
	const question = QUESTIONS[activeQuestionIndex];

	function handleSelectAnswer(answer) {
		setUserAnswers((prev) => [...prev, answer]);
	}

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
