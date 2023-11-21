import { useState } from "react";
import { Alert } from "react-native";

import { createUser } from "../utils/auth";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert("Can't create a new user", error.message);
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message={"Creating User..."} />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
