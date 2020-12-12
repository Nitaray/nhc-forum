import axios from 'axios'
import links from '../config/links'

export default getThread = (ID) => {
    const thread = {
        author_id: null,
        author_name: null,
        title: null,
        content: null,
        comments: []
    }
    try {
        let res = await axios.get(links.api.thread, {
            params: {
                id: ID
            }
        });
        thread.author_id = res.data.author_id,
        thread.author_name = res.data.author_name,
        thread.title = res.data.title,
        thread.content = res.data.content,
        thread.comments = res.data.comments;
    } catch(err) {
        console.error(err);
    }
    return thread;
}