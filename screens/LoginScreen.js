import { useState } from 'react';
import { Alert } from 'react-native';

import { loginUser } from '../utils/auth';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await loginUser(email, password);
    } catch (error) {
      Alert.alert("Loggin In Failed!", error.message);
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message={"Loggin In..."} />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
