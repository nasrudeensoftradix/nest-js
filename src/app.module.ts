import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './schema/student.schema';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/newblog'),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
    AuthModule, UserModule, BookmarkModule],

})
export class AppModule {}
