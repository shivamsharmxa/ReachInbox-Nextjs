import React from 'react';
import '/Users/shivamsharma/Desktop/inboxnextjs/reachinbox/src/app/globals.css';


const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative">
      {/* Logo at the top center */}
      <div className="absolute top-8 w-full text-center">
        <img src="/image.png" alt="ReachInbox Logo" className="mx-auto w-300" />
      </div>

      {/* Main content box */}
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-sm w-full relative z-10">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Create a new account</h2>
        
        <button
          type="button"
          className="w-full bg-gray-800 text-white py-2 px-4 rounded-md flex items-center justify-center mb-4 hover:bg-gray-700 transition"
        >
          <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />

          Sign Up with Google
        </button>
        
        <button
         type="button"
         style={{
         background: 'linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)',
         color: 'white',
         transition: 'background 0.3s ease'
        }}
        className="w-full py-2 px-4 rounded-md mb-6 hover:opacity-90"
        >
          Create an Account
        </button>

        <p className="text-center text-gray-400">
          Already have an account? <a href="#" className="text-purple-500 hover:underline">Sign In</a>
        </p>
      </div>

      {/* Footer at the bottom center */}
      <div className="absolute bottom-8 w-full text-center text-gray-500">
        © 2023 ReachInbox. All rights reserved.
      </div>
    </div>
  );
}

export default LoginPage;
