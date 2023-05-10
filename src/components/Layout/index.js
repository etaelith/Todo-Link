import Header from "@components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "calc(100vh - 4rem)" }}>
        {children}
      </div>
    </>
  );
};

export default Layout;
