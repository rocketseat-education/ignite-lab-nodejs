import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['stirred-bream-9626-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'c3RpcnJlZC1icmVhbS05NjI2JP2jGZobUfgOvOJRt4BKE7U2ACdlOBKC3bMvgEk',
          password:
            'H4nly5QgkjLn2n3y2_9CLRKLdWPUw8ttXPwqBrladJfdawcBIk0PPMWLrcofbp3-i2Ynhg==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
