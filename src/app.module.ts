import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://julianvillacis02:${process.env.PASSWORD_MONGODB}@cluster0.colo8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
