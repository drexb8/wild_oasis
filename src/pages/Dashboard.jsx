import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <Row type="horizontal">
      <Heading as="h1">Dashboard</Heading>
      <p>TEST</p>
      <Button variation="primary" size="medium">
        Click me
      </Button>
    </Row>
  );
}

export default Dashboard;
