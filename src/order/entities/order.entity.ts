import { User } from 'src/user/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderItem } from './order.items.entity';

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal' })
  totalPrice: number;

  @Column({ type: 'timestamp', default: new Date() })
  createdAt: Date;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.orderId, { eager: true })
  orderItems: OrderItem[];

  @ManyToOne(() => User, (user) => user.orders, { eager: false })
  user: User;

  @Column()
  userId: number;
}
