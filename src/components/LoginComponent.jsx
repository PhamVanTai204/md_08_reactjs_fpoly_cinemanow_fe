import React, { useState } from 'react';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = (e) => {
    e.preventDefault();
    console.log('Email login with:', email, password);
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-700 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl flex overflow-hidden">
        {/* Left Panel */}
        <div className="w-[460px] p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-red-500" style={{ fontFamily: 'cursive' }}>Cinema Now</h1>
            <h2 className="text-xl font-medium mt-4">Đăng nhập</h2>
            <p className="text-sm text-gray-600">Đăng nhập để có thêm quyền lợi và quản lý các chức năng của bạn</p>
          </div>

          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Mật khẩu"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div className="text-right">
              <a href="#" className="text-red-500 text-sm hover:underline">Quên mật khẩu?</a>
            </div>

            <button 
              type="button"
              onClick={handleGoogleLogin}
              className="w-full py-2 px-4 border rounded flex items-center justify-center space-x-2 hover:bg-gray-50"
            >
              <img src="/api/placeholder/20/20" alt="Google icon" className="w-5 h-5" />
              <span>Tiếp tục với Google</span>
            </button>

            <button 
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded flex items-center justify-center"
            >
              <span>Đăng nhập</span>
            </button>
          </form>
        </div>

        {/* Right Panel */}
        <div className="flex-1 bg-blue-900 p-12 text-white flex flex-col relative">
          {/* Register Button */}
          <div className="absolute top-4 right-4">
            <button className="px-4 py-1 border border-white text-white rounded hover:bg-white hover:text-blue-900 transition-colors">
              Đăng ký
            </button>
          </div>

          {/* Welcome Message */}
          <div className="flex flex-col justify-center flex-grow">
            <h2 className="text-3xl font-bold mb-4">Chào mừng bạn đã quay trở lại</h2>
            <p className="text-lg">Đăng nhập vài tài khoản quản lý và theo dõi hoạt động tổng ứng dụng của bạn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;