"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithDraw = void 0;
var WithDraw = /** @class */ (function () {
    /**
     * WithDraw Consctrutor
     */
    function WithDraw(customerId, amount, currencyType, soruceAccountId) {
        this.customerId = customerId;
        this.amount = amount;
        this.currencyType = currencyType;
        this.soruceAccountId = soruceAccountId;
    }
    return WithDraw;
}());
exports.WithDraw = WithDraw;
