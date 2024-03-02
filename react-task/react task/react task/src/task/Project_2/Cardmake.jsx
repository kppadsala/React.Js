import React from 'react'

export default function Cardmake(props) {
  return (
    <div>
      <div class="unique-card">
        <div class="background-overlay"></div>
        <div class="card-content">
          <div class="card-title">
            <h3>{props?.info?.city}</h3>
          </div>
          <div class="card-description">
            <h5>{props?.info?.state_name}</h5>
            <h5>{props?.info?.population}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
