import { FaReact } from "react-icons/fa"; 

const StartQuiz = ({ startQuiz, showStart }) => {
  return (
    <section
      className="text-white text-center"
      style={{
        display: showStart ? "block" : "none",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1f1c2c, #928dab)",
      }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            {/* Icon + Title */}
            <div className="d-flex justify-content-center align-items-center mb-4">
              <FaReact
                style={{
                  fontSize: "3.5rem",
                  color: "#61DBFB",
                  marginRight: "12px",
                  filter: "drop-shadow(0px 0px 8px rgba(97, 219, 251, 0.7))",
                }}
              />
              <h1
                className="fw-bold m-0"
                style={{
                  fontSize: "3rem",
                  textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                }}
              >
                React Quiz App
              </h1>
            </div>

            {/* Start Button */}
            <button
              className="btn btn-lg fw-bold text-white"
              style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                border: "none",
                borderRadius: "40px",
                padding: "15px 40px",
                fontSize: "1.3rem",
                boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
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
              onClick={startQuiz}
            >
              🎯 Start Quiz
            </button>

            {/* Sub-text */}
            <p className="mt-4" style={{ fontSize: "1.1rem", opacity: 0.9 }}>
              Test your knowledge and challenge yourself!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartQuiz;
