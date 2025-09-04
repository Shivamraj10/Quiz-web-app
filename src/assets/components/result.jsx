const Result = (props) => {
  const { showResult, quiz, mark, startOver } = props;
  return (
    <section
      className="bg-dark text-white"
      style={{ display: `${showResult ? 'block' : 'none'}` }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="text-light text-center p-5 rounded bg-success">
              <h1 className="mb-2 fw-bold">
                {mark > (quiz.length * 5) / 2 ? 'Awesome' : 'Not good !'}
              </h1>
              <h3 className="mb-3 fw-bold">
                Your score is {mark} out of {quiz.length * 5}
              </h3>
              <button
                className="btn py-2 px-4 btn-light fw-bold d-inline"
                onClick={startOver}
              >
                Start over
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
