import React from "react"
import Layout from "../components/layout"
import TileGrid from "../components/tile"
import FoodbankListItem from "../components/foodbank"
import JSONData from "../../content/scraped_foodbanks.json"
import "./mystyles.scss"

const JSONbuildtime = () => (
    <Layout>
        <TileGrid>
            <div className="tile is-vertical is-parent">
        {JSONData.map((data, index) => {
            if ( data.wanted.length !== 0 || data.unwanted.length !== 0) {
                return <FoodbankListItem key={`foodbank_item_${index}`}>{data}</FoodbankListItem>
            }
        })}
        </div>
        </TileGrid>
    </Layout>
)
export default JSONbuildtime
