const Home = (props) => {
  return (
    <section>
      <h1>Home !!</h1>
      {props.data.count}
    </section>
  );
};

export default Home;
