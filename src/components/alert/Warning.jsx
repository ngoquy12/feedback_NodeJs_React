import React from "react";

export default function Warning() {
  return (
    <div className="m-dialog m-delete-warning">
      <div className="m-dialog-box">
        <div className="m-dialog-center">
          <div className="m-dialog-background" />
          <div className="m-dialog-drag">
            <div className="m-dialog-message">
              <div className="m-dialog-content">
                <div className="m-content-icon">
                  <div className="m-icon-48 m-icon-warning" />
                </div>
                <div className="m-content-message">
                  Mã nhân viên &lt;NV001&gt; đã tồn taị trong hệ thống. Vui lòng
                  kiểm tra lại.
                </div>
              </div>
              <div className="m-dialog-line" />
              <div
                className="m-dialog-footer"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <button className="m-button" tabIndex={1}>
                  <div className="m-btn-text">Đồng ý</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
