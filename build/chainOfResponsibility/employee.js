"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee() {
        this.max = 0;
    }
    Employee.prototype.SetNextApprover = function (supervisor) {
        this.NextApprover = supervisor;
    };
    Employee.prototype.SetMax = function (max) {
        this.max = max;
    };
    return Employee;
}());
exports.Employee = Employee;
