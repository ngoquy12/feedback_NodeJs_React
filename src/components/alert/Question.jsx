import React from "react";

export default function Question() {
  return (
    <div class="m-dialog m-employee-question">
      <div class="m-dialog-box">
        <div class="m-dialog-center">
          <div class="m-dialog-background"></div>
          <div class="m-dialog-drag">
            <div class="m-dialog-message">
              <div class="m-dialog-content">
                <div class="m-content-icon">
                  <div class="m-icon-48 m-icon-question"></div>
                </div>
                <div class="m-content-message">
                  Dữ liệu đã bị thay đổi. Bạn có muốn cất không?
                </div>
              </div>
              <div class="m-dialog-line"></div>
              <div class="m-dialog-footer">
                <div class="m-btn-left">
                  <button class="m-button m-button-secondary " tabindex="3">
                    <div class="m-btn-text">Hủy</div>
                  </button>
                </div>
                <div class="m-btn-right">
                  <button class="m-button m-button-secondary " tabindex="2">
                    <div class="m-btn-text">Không</div>
                  </button>
                  <button class="m-button m-ml-8" tabindex="1">
                    <div class="m-btn-text">Cất</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
