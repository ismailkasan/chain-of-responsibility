import { Employee } from "./employee";
import { WithDraw } from "./with-draw";

export class BankTeller extends Employee {

    ProcessRequest(req: WithDraw): void {
        if (req.amount <= this.max) {
            console.log("#" + req.amount + " Withdraw is approved by " + this.constructor.name);
        }
        else if (this.NextApprover != null) {
            console.log(" Process send to " + this.NextApprover.constructor.name + " because of USD Amount:" + req.amount + "  is bigger than  " + this.max);

            this.NextApprover.ProcessRequest(req);
        }
    }
}