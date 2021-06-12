import { Customer } from "./customer";
import { OrderDetail } from "./order-detail";

export class Order {

    Id: string;
    Customer: Customer;
    OrderDetail: OrderDetail[]
}


