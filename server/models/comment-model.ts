class Comment {
    id: number;
    content: string;
    publishDate: string;
    creator: string;

    constructor(id, content, publishDate, creator) {
        this.id = id;
        this.content = content;
        this.publishDate = publishDate;
        this.creator = creator;
    }
}

export default Comment