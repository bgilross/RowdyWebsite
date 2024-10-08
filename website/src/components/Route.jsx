import useNavigation from "../hooks/use-navigation";
/* eslint-disable react/prop-types */

function Route({ children, path }) {
  const { currentPath } = useNavigation();
  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
