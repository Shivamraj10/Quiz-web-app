const StartQuiz = (props) => {
  const { startQuiz, showStart } = props;

  return (
    <section
      className="text-white text-center bg-dark"
      style={{ display: `${showStart ? 'block' : 'none'}` }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            <h1 className="fw-bold mb-4">Basic React js quiz</h1>
            <button
              className="btn px-4 py-2 bg-light text-dark fw-bold"
              onClick={startQuiz}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartQuiz;
