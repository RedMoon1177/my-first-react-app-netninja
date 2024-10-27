import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ children, handleClose, isSalesModal }) => {
  //   return (
  //     <div className="modal-backdrop">
  //       <div className="modal">
  //         {children}
  //         <button onClick={handleClose}>close</button>
  //       </div>
  //     </div>
  //   );
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: isSalesModal ? "#ff4500" : "#555",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
