const Quiz = (props) => {
  const { quiz, showQuiz, question } = props;
  return (
    <section
      className="bg-dark text-white"
      style={{ display: `${showQuiz ? 'block' : 'none'}` }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="card p-4">
              <div className="d-flex justify-content-between gap-md-3">
                <h5 className="mb-2 fs-normal lh-base">{question?.question}</h5>
                <h5
                  style={{
                    color: '#60d600',
                    width: '100px',
                    textAlign: 'right',
                  }}
                >
                  {quiz.indexOf(question) + 1} / {quiz.length}
                </h5>
              </div>
              <div>
                {question?.options?.map((item, index) => (
                  <button
                    key={index}
                    className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* some element */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
