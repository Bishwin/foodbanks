import React from "react"
import MediaObject from "./mediaobject"

export default function FoodbankListItem({ children }) {
    return (
        <div class="tile box is-child">
            <MediaObject>{children}</MediaObject>
        </div>
    )
}
