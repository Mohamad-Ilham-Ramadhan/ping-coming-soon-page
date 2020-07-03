import React, { useEffect, useRef } from "react";

export default function Form() {
  const refForm = useRef(null);
  useEffect(() => {
    const form = refForm.current;
    form.addEventListener("submit", (e) => {
      if (form.checkValidity() == false) {
        e.preventDefault();
        e.stopPropagation();
        form.classList.add("was-validated");
      }
    });
  }, []);
  return (
    <form ref={refForm} className="needs-validation" noValidate>
      <div className="row">
        <div className="col-md-8">
          <div className="form-group">
            <input
              type="email"
              className="form-control rounded-pill"
              placeholder="Your email address..."
              required
            />
            <div className="invalid-feedback text-center text-md-left font-italic mb-3">
              Please provide a valid email address
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <button
              className="btn btn-block btn-primary btn-submit rounded-pill"
              type="submit"
            >
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
