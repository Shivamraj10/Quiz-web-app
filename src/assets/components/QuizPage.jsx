import { motion } from "framer-motion"; // for smooth animations (optional)

const QuizPage = ({
  quiz,
  question,
  questionIndex,
  totalQuestions,
  checkAnswer,
  nextQuestion,
  prevQuestion,
  skipQuestion,
  answers,
  showingResult,
  showQuiz,
}) => {
  const existingAnswer = answers.find((a) => a.index === questionIndex);

  return (
    <section
      className="text-white"
      style={{
        display: showQuiz ? "block" : "none",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1f1c2c, #928dab)",
      }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            {/* Animated card */}
            <motion.div
              className="card p-4 shadow-lg border-0 rounded-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0 fw-bold">{question?.question}</h5>
                <h6 className="fw-bold text-primary">
                  {questionIndex + 1} / {totalQuestions}
                </h6>
              </div>

              {/* Options */}
              <div>
                {question?.options?.map((item, index) => {
                  let btnClass =
                    "btn btn-lg w-100 text-start py-2 px-3 mt-3 rounded-3 border-0 shadow-sm";
                  if (existingAnswer) {
                    if (existingAnswer.correct === item)
                      btnClass += " btn-success";
                    else if (existingAnswer.selected === item)
                      btnClass += " btn-danger";
                    else btnClass += " btn-outline-secondary";
                  } else {
                    btnClass += " btn-light";
                  }

                  return (
                    <button
                      key={index}
                      className={btnClass}
                      onClick={() => checkAnswer(item)}
                      disabled={!!existingAnswer}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="d-flex justify-content-between mt-4">
                <button
                  className="btn fw-bold text-white px-4 py-2 rounded-pill"
                  style={{
                    background: "linear-gradient(135deg, #ff9966, #ff5e62)",
                    border: "none",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  }}
                  onClick={prevQuestion}
                  disabled={questionIndex === 0}
                >
                  Previous
                </button>

                {questionIndex + 1 !== totalQuestions ? (
                  <div className="d-flex gap-2">
                    <button
                      className="btn fw-bold text-dark px-4 py-2 rounded-pill"
                      style={{
                        background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
                        border: "none",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                      }}
                      onClick={skipQuestion}
                    >
                      Skip
                    </button>

                    <button
                      className="btn fw-bold text-white px-4 py-2 rounded-pill"
                      style={{
                        background: "linear-gradient(135deg, #667eea, #764ba2)",
                        border: "none",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                      }}
                      onClick={nextQuestion}
                    >
                      Next
                    </button>
                  </div>
                ) : (
                  <button
                    className="btn fw-bold text-white px-4 py-2 rounded-pill"
                    style={{
                      background: "linear-gradient(135deg, #11998e, #38ef7d)",
                      border: "none",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    }}
                    onClick={showingResult}
                  >
                    Show Result
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizPage;
