//  Here we remove spaces and dots with _
export function getSlug(item){
    return(
        item.replace(/ /g,"_").replace(/\./g, "").toLowerCase()
    )
}