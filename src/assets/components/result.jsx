const Result = ({ showResult, quiz, mark, answers, startOver }) => {
  return (
    <section
      className="text-white"
      style={{
        display: showResult ? "block" : "none",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1f1c2c, #928dab)", 
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card p-4 shadow-lg bg-light text-dark rounded-4 border-0">
              <h2 className="fw-bold text-center mb-4">
                 You scored <span className="text-primary">{mark}</span> /{" "}
                {quiz.length}
              </h2>

              {/* Summary Table */}
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-dark text-center">
                    <tr>
                      <th>#</th>
                      <th>Question</th>
                      <th>Your Answer</th>
                      <th>Correct Answer</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {answers.map((ans, idx) => (
                      <tr key={idx}>
                        <td className="fw-bold">{idx + 1}</td>
                        <td className="text-start">{ans.question}</td>
                        <td
                          className={
                            ans.isCorrect
                              ? "text-success fw-bold"
                              : ans.selected
                              ? "text-danger fw-bold"
                              : "text-secondary fw-bold"
                          }
                        >
                          {ans.selected || "Not Answered"}
                        </td>
                        <td className="fw-semibold">{ans.correct}</td>
                        <td>
                          {ans.isCorrect ? (
                            <span className="badge bg-success px-3 py-2">
                               Correct
                            </span>
                          ) : ans.selected ? (
                            <span className="badge bg-danger px-3 py-2">
                               Wrong
                            </span>
                          ) : (
                            <span className="badge bg-secondary px-3 py-2">
                               Skipped
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Restart Button */}
              <div className="text-center mt-4">
                <button
                  className="btn fw-bold px-5 py-2 text-white"
                  style={{
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                    border: "none",
                    borderRadius: "30px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.background =
                      "linear-gradient(135deg, #764ba2, #667eea)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.background =
                      "linear-gradient(135deg, #667eea, #764ba2)")
                  }
                  onClick={startOver}
                >
                   Restart Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
