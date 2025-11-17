import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/user.model.js';

dotenv.config();

const resetDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear all users
    await User.deleteMany({});
    console.log('✅ Cleared all users');

    // Create admin user using the virtual password field
    const adminUser = new User({
      name: 'Admin User',
      email: 'admin@portfolio.com',
      password: 'admin123', // This will trigger the virtual setter
      role: 'admin'
    });

    await adminUser.save();
    console.log('✅ Admin user created successfully');

    // Create test user
    const testUser = new User({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123', // This will trigger the virtual setter
      role: 'user'
    });

    await testUser.save();
    console.log('✅ Test user created successfully');

    console.log('\n🎉 Users created successfully!');
    console.log('==============================');
    console.log('👤 Admin User:');
    console.log('   Name: Admin User');
    console.log('   Email: admin@portfolio.com');
    console.log('   Password: admin123');
    console.log('   Role: admin');
    
    console.log('\n👤 Test User:');
    console.log('   Name: Test User');
    console.log('   Email: test@example.com');
    console.log('   Password: password123');
    console.log('   Role: user');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating users:', error.message);
    console.error('Full error:', error);
    process.exit(1);
  }
};

resetDatabase();