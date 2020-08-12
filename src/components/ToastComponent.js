import React, { memo } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ToastComponent = ({ show, setShow, errormsg }) => {
  const msg = (
    <b className="text-center">
      <span role="img" aria-label="sad face">
        ⛔
      </span>{" "}
      {errormsg || "No Episode Found!"}
    </b>
  );

  const notify = () => {
    setShow(false);
    setTimeout(() => {}, 3000);
    return toast.error(msg, {
      position: "bottom-left",
      autoClose: 3000
    });
  };
  show && notify();
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default memo(ToastComponent);
