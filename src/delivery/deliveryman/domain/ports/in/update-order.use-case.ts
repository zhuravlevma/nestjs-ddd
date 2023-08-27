import { DeliverymanEntity } from '../../entities/deliveryman.entity';

export interface UpdateOrderCommand {
  deliverymanId: string;
  orderId: string;
  description?: string;
  delivered?: boolean;
  returned?: boolean;
}
export abstract class UpdateOrderUseCase {
  abstract execute(
    updateOrderStatusCommand: UpdateOrderCommand,
  ): Promise<DeliverymanEntity>;
}
