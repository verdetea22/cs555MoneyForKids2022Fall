import React from "react";
import { Image } from "react-bootstrap";
import "./modules.css";

function ModulesDashboard() {
  return (
    <div>
      <br />
      <h2>Learning Modules</h2>

      <div class="parent">
        {/* Column 1 */}
        <div class="child">
          <div id="box">
            <br />
            <a href="/SalesTaxMod">Sales Tax Module</a>
            <br />
          </div>
        </div>

        {/* Column 2 */}
        <div class="child">
          <div id="box">
            <br />
            <a href="/ChangeBackMod">Change Back Module</a>
            <br />
          </div>
        </div>

        {/* Column 3 */}

        <div class="child">
          <div id="box">
            <br />
            <a href="/InterestMod"> Interest Module</a>
            <br />
          </div>
        </div>
      </div>

      <div class="parent">
        {/* Column 1, Box 2 */}
        <div class="child">
          <div id="box">
            <br />
            <a href="/MoneyAdditionMod">Money Addition Module</a>
            <br />
          </div>
        </div>

        {/* Column 2, Box 2 */}
        <div class="child">
          <div id="box">
            <br />
            <a href="/Modules">WIP Module</a>
            <br />
          </div>
        </div>

        {/* Column 3, Box 2 */}

        <div class="child">
          <div id="box">
            <br />
            <a href="/Modules"> WIP Module</a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModulesDashboard;
