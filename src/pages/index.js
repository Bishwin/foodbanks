import React from "react"
import Layout from "../components/layout"
import FoodbankListItem from "../components/foodbank"
import JSONData from "../../content/scraped_foodbanks.json"

const JSONbuildtime = () => (
    <Layout>
        <h1>food banks</h1>
        {JSONData.map((data, index) => {
            return <FoodbankListItem>{data}</FoodbankListItem>
        })}
    </Layout>
)
export default JSONbuildtime
