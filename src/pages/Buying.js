import { useContext,useEffect } from "react";
import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import CartModel from "../components/CartModal"
import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Buying() {
    const { state: { cartItems }, dispatch } = useContext(StoreContext);
    
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
     }, [cartItems])
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray">
        <NavBar />
      </Layout>
      <Layout className="bg-gray">
        <Header className="layout-header">
          <AppHeader title="ShoopingCart" />
        </Header>
        <Content className="layout-content">
          <CartModel/>
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Buying;