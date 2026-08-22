import { GoogleLogin } from "@react-oauth/google";

function GoogleButton({ onSuccess, onError }) {
  return (
    <div className="flex justify-center">
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onError}
        useOneTap={false}
        theme="outline"
        size="large"
        width="100%"
        text="continue_with"
        shape="rectangular"
      />
    </div>
  );
}

export default GoogleButton;
