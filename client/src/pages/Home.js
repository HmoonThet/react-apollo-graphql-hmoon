import { useQuery } from "@apollo/client";
import { Divider, Space } from "antd";
import Title from "../components/layout/Title";
import AddPerson from "../components/forms/AddPerson";
import AddCar from "../components/forms/AddCar";
import People from "../components/lists/People";
import { GET_PEOPLE } from "../graphql/queries";

const Home = () => {
  const { loading, error, data } = useQuery(GET_PEOPLE);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Title />
      <Divider />
      <Divider plain>
        <h2>Add Person</h2>
      </Divider>
      <AddPerson />

      {data.people.length > 0 && (
        <>
          <Divider plain>
            <h2>Add Car</h2>
          </Divider>
          <AddCar />
          <Divider plain>
            <h2>Records</h2>
          </Divider>
          <People />
        </>
      )}
    </Space>
  );
};

export default Home;
