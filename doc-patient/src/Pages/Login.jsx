import axios from "axios";
import Header from "../Components/Header";
import LoginForm from "../Components/Login/LoginForm";

function Login() {

const handleLogin = async (username, password) => {
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  // Post request to the login API
  try {
    const response = await axios.post(`${apiUrl}/login`, { username, password });
    console.log('Login successful:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('Login failed:', error.response.data);
    } else if (error.request) {
      console.error('Login failed:', error.request);
    } else {
      console.error('Error:', error.message);
    }
  }
};

  return (
    <div>
      <Header />
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-16 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <LoginForm onLogin={handleLogin} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
