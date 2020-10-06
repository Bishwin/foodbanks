import React from "react"
import CardItem from "./card"
import MediaObject from "./mediaobject"

export default function FoodbankListItem({ children }) {
    return (
        <MediaObject>{children}</MediaObject>
    )
    // return (
    //     <div class='columns'>




    //         <a href={children.url}><h1 class="title">{children.name}</h1></a>
    //         <div class='column'>
    //             <div class='content'>
    //                 <h3>Urgently Needed</h3>
    //                 <ul>
    //                 {children.wanted.map((data, index) => {
    //                     return <li key={`content_item_${index}`}>{data}</li>
    //                 })}
    //                 </ul>
    //             </div>
    //         </div>
    //         <div class='column'>
    //             <div class='content'>
    //                 <h3>Unwanted</h3>
    //                 <ul>
    //                     {children.unwanted.map((data, index) => {
    //                         return <li key={`content_item_${index}`}>{data}</li>
    //                     })}
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // )
}
