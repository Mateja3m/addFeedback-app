import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About the project</h1>
        <p>This is a React app to leave a feedback for a product or service</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Return To Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
