//Class for References
class ReferenceItem {
    constructor(id, tagIds, title, isMarked, isUsed, comment, source, image){
        this.id = id;
        this.tagIds = tagIds;
        this.title = title;
        this.isMarked = isMarked;
        this.isUsed = isUsed;
        this.comment = comment;
        this.source = source;
        this.image = image;
    }
}
export default ReferenceItem;