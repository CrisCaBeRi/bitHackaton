import { Banner } from "../components/banner/Banner"
import { ListCards } from "../components/cards/ListCards"
import { Layout } from "../components/layout/layout"

export const Home = () => {
  return (
    <Layout>
        <Banner/>
        <ListCards/>
    </Layout>
    
  )
}



