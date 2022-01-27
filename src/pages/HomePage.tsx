import * as React from "react";
import getAllUsers from "../api/getAllUsers";
import Error from "../components/Error";
import Loading from "../components/Loading";
import ProfilesCardGrid from "../components/ProfilesCardGrid";
import { User } from "../types/user";

const HomePage: React.FunctionComponent = (props) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [usersData, setUsersData] = React.useState<User[]>();
  const [error, setError] = React.useState<boolean>(false);

  //Use Effects -----
  React.useEffect(() => {
    async function getAndSetUsersData() {
      const snapshot = await getAllUsers();
      if (snapshot.status !== "ok") setError(true);
      setUsersData(snapshot?.data);
      setLoading(false);
    }

    getAndSetUsersData();
  }, []);

  // JSX ---------
  return (
    <>
      <div className="main__heading__wrapper">
        <h1 className="main__heading"> Assignment Task 📝 </h1>
      </div>

      {!loading ? (
        <>{!error && usersData && <ProfilesCardGrid usersData={usersData} />}</>
      ) : (
        <Loading />
      )}

      {error && <Error message="something went wrong" />}
    </>
  );
};

export default HomePage;
