import { useNavigate } from "react-router-dom";

const useApp = () => {
  const navigate = useNavigate();

  const push = (path: string, state?: object) => {
    navigate(path, { state });
  };

  const back = () => {
    navigate(-1);
  };

  return {
    push,
    back,
  };
};

export default useApp;
