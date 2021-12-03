"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionalManager = void 0;
var employee_1 = require("./employee");
var RegionalManager = /** @class */ (function (_super) {
    __extends(RegionalManager, _super);
    function RegionalManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegionalManager.prototype.ProcessRequest = function (req) {
        if (req.amount <= 750000) {
            console.log("#" + req.amount + " Withdraw is approved by " + this.constructor.name);
        }
        else if (this.NextApprover != null) {
            console.log(" Process send to " + this.NextApprover.constructor.name + " because of USD Amount:" + req.amount + "  is bigger than  " + this.max);
            this.NextApprover.ProcessRequest(req);
        }
    };
    return RegionalManager;
}(employee_1.Employee));
exports.RegionalManager = RegionalManager;
