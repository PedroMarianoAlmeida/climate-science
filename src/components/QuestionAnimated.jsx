const QuestionAnimated = () => (
  <>
    <div id="container">
      <h6>Which of the below statements about electricity is not true?</h6>

      <div>
        <input type="checkbox" />
        <label>Electricity is measured in units called watts</label>
      </div>

      <div>
        <input type="checkbox" />
        <label>Electricity flows at the speed of light</label>
      </div>

      <div>
        <input type="checkbox" />
        <label>Electricity is a primary energy source</label>
      </div>
    </div>
    <style jsx>{`
      #container {
        width: 500px;
        height: 351px;
        border: 0.5px solid #6231ec;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 74px;
      }
    `}</style>
  </>
);

export default QuestionAnimated;
