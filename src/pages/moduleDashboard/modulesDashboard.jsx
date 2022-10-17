import React from "react";
import { Image } from "react-bootstrap";
import "./modules.css";

function ModulesDashboard() {
  return (
    <div>
      <br />
      <h2>Learning Modules</h2>
      <br />
      <div class="parent">
        {/* Column 1 */}
        <div class="child">
          <div id="box">
            <br />
            <a>Sales Tax Module</a>
            <br />
          </div>
        </div>

        {/* Column 2 */}
        <div class="child">
          <div id="box">
            <br />
            <a>Change Back Module</a>
            <br />
          </div>
        </div>

        {/* Column 3 */}

        <div class="child">
          <div id="box">
            <br />
            <a>Interest Module</a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModulesDashboard;
