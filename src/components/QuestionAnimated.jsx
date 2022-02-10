const QuestionAnimated = () => (
  <>
    <div id="container">
      <h6 id="title">
        Which of the below statements about electricity is not true?
      </h6>

      <div id="question-wrapper">
        <div className="question">
          <span className="checkbox" />
          <label>Electricity is measured in units called watts</label>
        </div>

        <div className="question">
          <span className="checkbox" />
          <label>Electricity flows at the speed of light</label>
        </div>

        <div className="question">
          <span className="checkbox" />
          <label>Electricity is a primary energy source</label>
        </div>
      </div>
    </div>
    <style jsx>{`
      #container {
        width: 500px;
        height: 420px;
        border: 0.5px solid #6231ec;
        //filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 74px;
        overflow-y: hidden;
        font-family: Work Sans;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      #title {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 105.3%;
        color: #818181;
        text-align: center;
        width: 330px;
        margin: 25px 0 18px 0;
      }

      .question {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 10px 15px;
        width: 427px;
        height: 69.44px;
        box-shadow: 0px 5px 19px rgba(42, 43, 104, 0.2);
        border-radius: 69px;

        animation-name: myAnimation;
        animation-duration: 2s;
        animation-iteration-count: infinite;
      }

      .checkbox {
        width: 27.75px;
        height: 27.75px;
        border: 3px solid #6231ec;
        border-radius: 50%;
        margin: 0 25px 0 10px;
      }

      .question label {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 105.3%;
        color: #6231ec;
      }

      #question-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        witdh: 100%;
      }

      @keyframes myAnimation {
        from {
          margin: 35px 0;
        }

        to {
          margin: 7.25px 0;
        }
      }
    `}</style>
  </>
);

export default QuestionAnimated;
