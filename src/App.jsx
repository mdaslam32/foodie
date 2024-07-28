import "./App.css";
import Foodie from "./assets/Foodie.png";
import iphoneLayout from "./assets/iphoneLayout.mp4";
import { useState } from "react";
const App = () => {
  const [thank, setThank] = useState("");
  return (
    <div className="container-fluid">
      {/* Header Start */}
      <header>
        <img
          src={Foodie}
          alt="Foodie Logo"
          width={"100px"}
          className="img-fluid"
        />
        <button
          type="button"
          className="fs-6 btn badge rounded-pill btn-danger"
        >
          Join the waitlist
        </button>
      </header>
      {/* Header End */}

      {/* Section Start */}
      <section className="body">
        <div>
          <video src={iphoneLayout} autoPlay loop muted />
        </div>
        <div className="text">
          <img
            src={Foodie}
            alt="Foodie Logo"
            width={"100px"}
            className="img-fluid"
          />
          <h1 className="mt-3">Welcome to Foodie</h1>
          <p className="para fs-5">
            At foodie, we redefine convenience with our seamless food delivery
            service. Whether you're craving the flavors of home or exploring new
            culinary delights, foodie brings it all to your doorstep. From
            hearty breakfasts to gourmet dinners and everything in between, our
            curated menu caters to every palate and preference.
          </p>
          <button className="btn2 btn badge rounded-pill">
            Join the waitlist
          </button>
        </div>
      </section>
      {/* Section End */}

      {/* Footer Start */}
      <footer>
        <h1 className="join text-center mt-5 mb-5">Join the waitlist</h1>
        <form className="p-2">
          <div className="row">
            <div className="col-4">
              <input
                type="text"
                placeholder="Name"
                className="form-control mb-4 p-2"
                required
              />
            </div>

            <div className="col-4">
              <input
                type="text"
                placeholder="Number"
                className="form-control mb-4 p-2"
                required
              />
            </div>

            <div className="col-4">
              <input
                type="text"
                placeholder="City"
                className="form-control mb-4 p-2"
                required
              />
            </div>
            <div className="col-4">
              <button
                type="button"
                className="btnjoin btn btn-danger p-2 fs-5"
                onClick={() => {
                  setThank("Thank You");
                  setTimeout(() => {
                    setThank("");
                  }, 10000);
                }}
              >
                Join the waitlist
              </button>
            </div>
          </div>
        </form>
        <div>
          <h1 className="thank text-center mt-3 mb-3">{thank}</h1>
        </div>

        <p className="bg-dark text-white text-center mt-3">
          &copy; Foodie, 2024
        </p>
      </footer>
      {/* Footer End */}
    </div>
  );
};
export default App;
