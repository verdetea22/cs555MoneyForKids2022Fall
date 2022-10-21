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
          <div id="mod_box">
            <br />
            <a id="mod_name" href="/SalesTaxMod">
              Sales Tax Module
            </a>
            <br />
            <br />
            <div id="box_description">
              <a> Learn how sales tax works! </a>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div class="child">
          <div id="mod_box">
            <br />
            <a id="mod_name" href="/ChangeBackMod">
              Change Back Module
            </a>
            <br />

            <div id="box_description">
              <a>
                {" "}
                Learn how to calculate change given from different transactions!{" "}
              </a>
            </div>
          </div>
        </div>

        {/* Column 3 */}

        <div class="child">
          <div id="mod_box">
            <br />
            <a id="mod_name" href="/InterestMod">
              {" "}
              Interest Module
            </a>
            <br />
            <div id="box_description">
              <a>
                {" "}
                Learn how interest works for different types of bank accounts!{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="parent">
        {/* Column 1, Box 2 */}
        <div class="child">
          <div id="mod_box">
            <br />
            <a id="mod_name" href="/MoneyAdditionMod">
              Money Addition Module
            </a>
            <br />
            <br />
            <div id="box_description">
              <a> Learn how to add money easily! </a>
            </div>
          </div>
        </div>

        {/* Column 2, Box 2 */}
        <div class="child">
          <div id="mod_box">
            <br />
            <a id="mod_name" href="/BankFormsMod">
              Bank Forms Module
            </a>
            <br />

            <div id="box_description">
              <a>
                {" "}
                Learn the different kinds of forms, such as withdrawl, deposit
                and checks!{" "}
              </a>
            </div>
          </div>
        </div>

        {/* Column 3, Box 2 */}
        <div class="child">
          <div id="mod_box">
            <br />
            <a id="mod_name" href="/Modules">
              {" "}
              WIP Module
            </a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModulesDashboard;
