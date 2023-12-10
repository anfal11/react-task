import React from "react";

const Problem2 = () => {

  return (
    <div className="container">


      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

                         {/* modal */}
                         <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Modal title
                  </h1>
                </div>
                <div className="modal-body">Data show</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Understood
                  </button>
                </div>
              </div>
            </div>
          </div>

        <div className="d-flex justify-content-center gap-3">
        
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            All Contacts
          </button>
 
          <button className="btn btn-lg btn-outline-warning" type="button">
            US Contacts
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Problem2;
