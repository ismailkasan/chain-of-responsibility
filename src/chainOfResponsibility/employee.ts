import { WithDraw } from "./with-draw";

export abstract class Employee {
    NextApprover: Employee | undefined;
    max: number = 0;

    SetNextApprover(supervisor: Employee): void {
        this.NextApprover = supervisor;
    }

    SetMax(max: number): void {
        this.max = max;
    }
    /**
     * @definition Employee abstract class member
     * @param req 
     */
    abstract ProcessRequest(req: WithDraw): any;
}