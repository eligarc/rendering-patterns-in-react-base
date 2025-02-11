import { useState } from "react";

function useLoading(initialLoading: boolean = false) {
  const [loading, setLoading] = useState(initialLoading);

  return {
    loading,
    setLoading,
  }
}

type userProps = {
  name: string;
}
const UserComponent: React.FC<userProps> = ({ name }) => {
  const { loading, setLoading } = useLoading(false);


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Hello, { name } !</p>
      <button onClick={() => setLoading(true)}>Simulate loading</button>
    </div>
  );
};

export const ParentComponent = () => {
  return <UserComponent name='eliogrc' />;
};
