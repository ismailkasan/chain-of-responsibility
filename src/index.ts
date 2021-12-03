import { RegionalManager } from "./chainOfResponsibility/regional-manager";
import { ExecutiveManager } from "./chainOfResponsibility/executive-manager";
import { BankTeller } from "./chainOfResponsibility/bank-teller";
import { WithDraw } from "./chainOfResponsibility/with-draw";
import { Manager } from "./chainOfResponsibility/manager";

// Chain of responsibiliy
const withdraw = new WithDraw("a6e193dc-cdbb-4f09-af1a-dea307a9ed15", 500000, "TRY", "TR681223154132432141412");

const bankTeller = new BankTeller();
const manager = new Manager();
const executiveManager = new ExecutiveManager();
const regionalManager = new RegionalManager();

bankTeller.SetMax(40000)
bankTeller.SetNextApprover(manager);

manager.SetMax(70000)
manager.SetNextApprover(executiveManager);

executiveManager.SetMax(150000)
executiveManager.SetNextApprover(regionalManager);

regionalManager.SetMax(7500000)

bankTeller.ProcessRequest(withdraw);
