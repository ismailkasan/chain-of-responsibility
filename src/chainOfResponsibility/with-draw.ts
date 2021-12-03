
export class WithDraw {

    customerId: string;
    amount: number;
    currencyType: string;
    soruceAccountId: string;
 
    /**
     * WithDraw Consctrutor
     */
    constructor(customerId: string, amount: number, currencyType: string, soruceAccountId: string) {
        this.customerId = customerId;
        this.amount = amount;
        this.currencyType = currencyType;
        this.soruceAccountId = soruceAccountId;       
    }

}