import React from "react";

export default function Success() {
  return (
    <div class="m-dialog m-employee-success">
      <div class="m-dialog-box">
        <div class="m-dialog-center">
          <div class="m-dialog-background"></div>
          <div class="m-dialog-drag">
            <div class="m-dialog-message">
              <div class="m-dialog-content">
                <div class="m-content-icon">
                  <div class="m-icon-48 m-icon-suscess"></div>
                </div>
                <div class="m-content-message">Xóa thành công.</div>
              </div>
              <div class="m-dialog-line"></div>
              <div class="m-dialog-footer">
                <button class="m-button" tabindex="1">
                  <div class="m-btn-text">Đóng</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
