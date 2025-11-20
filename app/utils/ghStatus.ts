type Status = {
    message: string;
    emojiHTML: string;
}

export default async function () {
    const ghres = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        body: JSON.stringify({
            query: `query { user(login: "dark1zinn") { status { message emojiHTML } } }`,
        }),
    }).then(res => res.json());

    if ((ghres.message as String).startsWith('API rate limit')) {
        return {
            message: 'Offline',
            emojiHTML: '😴'
        }
    }
    
    const data: Status = {
        message: ghres.message,
        emojiHTML: (ghres.emojiHTML as String).slice(4, 5) // <div>😴</div>
    };

    return data
};