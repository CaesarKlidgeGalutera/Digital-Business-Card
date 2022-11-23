import "./Buttons.css";

function Buttons() {
  return (
    <div className="btn-container">
      <button className="btn btn--email">
        <i class="fa-solid fa-envelope"></i> Email
      </button>
      <button className="btn btn--linkedin">
        <i class="fa-brands fa-linkedin"></i> LinkedIn
      </button>
    </div>
  );
}

export default Buttons;
