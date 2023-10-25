const Title = () => {
  const styles = getStyles();
  return <h1 style={styles.title}>People and their cars</h1>;
};

const getStyles = () => ({
  title: {
    fontSize: 30,
    padding: "15px",
    marginBottom: "5px",
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default Title;
