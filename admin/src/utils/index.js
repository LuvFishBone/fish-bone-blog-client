function createTagObjs (tagArr, allTags) {
    let res = []
    if(tagArr && tagArr.length && allTags && allTags.length){
        for(let item of allTags){
            if(tagArr.includes(item.name))
                res.push(item)
        }
    }
    return res; 
}

const utils = {
    createTagObjs
}

export default utils