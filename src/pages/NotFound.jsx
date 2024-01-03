import Container from "../components/Container";
import NotFound from "../components/NotFound";

const NotFoundPage = () => {
  return (
    <div className="bg-white">
      <Container size="w-[90%] md:w-[92%] py-10">
        <NotFound message="The page could not be found" />
      </Container>
    </div>
  );
};

export default NotFoundPage;
