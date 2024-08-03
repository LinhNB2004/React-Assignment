import React from "react";

type Props = {
  children: React.ReactNode;
};

const Privateroute = ({ children }: Props) => {
  const user = sessionStorage.getItem("user");
  if (user) {
    return <>{children}</>;
  } else {
    return <div>khong co quyen truy cap</div>;
  }
};

export default Privateroute;
