export class MicroServicesHealthStatus {
    public isUserAuthenticationServiceUp: boolean;
    public isProductServiceUp: boolean;
    public isOrderServiceUp: boolean;
    public isPaymentServiceUp: boolean;

    constructor() {
        this.isUserAuthenticationServiceUp = false;
        this.isProductServiceUp = false;
        this.isOrderServiceUp = false;
        this.isPaymentServiceUp = false;
    }
} 