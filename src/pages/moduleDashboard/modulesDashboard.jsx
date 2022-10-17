import React from "react";
import { Image } from "react-bootstrap";
import "./modules.css";

function ModulesDashboard() {
  return (
    <div>
      <br />
      <h2>Learning Modules</h2>
      <br />
      <div class="row">
        {/* Column 1 */}
        <div class="column">
          <div id="box"></div>
        </div>

        {/* Column 2 */}
        <div class="column"> </div>
        <div id="box"></div>
        {/* Column 3 */}

        <div class="column"> </div>
        <div id="box"></div>
      </div>
    </div>
  );
}

export default ModulesDashboard;
