import React from "react"
import Layout from "../components/layout"
import FoodbankListItem from "../components/foodbank"
import JSONData from "../../content/scraped_foodbanks.json"
import "./mystyles.scss"

const JSONbuildtime = () => (
    <Layout>
        {JSONData.map((data, index) => {
            if ( data.wanted.length !== 0 || data.unwanted.length !== 0) {
                return <FoodbankListItem key={`foodbank_item_${index}`}>{data}</FoodbankListItem>
            }
        })}
    </Layout>
)
export default JSONbuildtime
