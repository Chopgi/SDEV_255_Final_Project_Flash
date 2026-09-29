function Login() {
  return (
    <>
      <title>Teacher Home</title>
      <div className="row" style={{ height: "100px" }}>
        <div className="col-sm-12 p-3 bg-secondary text-white text-center fs-1">
          Lorem Ipsum School of Placeholder
        </div>
      </div>
      <div className="container p-5 my-5 bg-info text-dark">
        <div className="container mt-3">
          <h2>Sign In</h2>
          <form action="/action_page.php">
            <div className="mb-3 mt-3">
              <label for="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label for="pwd">Password:</label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pswd"
              />
            </div>
            <div className="form-check mb-3">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="remember"
                />{" "}
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-warning">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="row" style={{ height: "100px" }}>
        <div className="col-sm-12 p-3 bg-secondary text-warning text-center fs-6">
          Copyright
        </div>
      </div>
    </>
  );
}
export default Login;
