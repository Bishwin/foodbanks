import React from "react"

export default function TileGrid({ children }) {
    return (
        <div className="tile is-ancestor">
            {children}
        </div>
    )
}
