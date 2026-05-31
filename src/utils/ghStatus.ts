type Status = {
    message: string
    emojiHTML: string
}

export default async function ghStatus(): Promise<Status> {
    const ghres = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `query { user(login: "dark1zinn") { status { message emojiHTML } } }`,
        }),
    }).then((res) => res.json())

    if ((ghres.message as string)?.startsWith('API rate limit')) {
        return {
            message: 'Offline',
            emojiHTML: '😴',
        }
    }

    const status = ghres.data?.user?.status
    if (!status) {
        return {
            message: 'Offline',
            emojiHTML: '😴',
        }
    }

    return {
        message: status.message,
        emojiHTML: (status.emojiHTML as string).slice(4, 5),
    }
}
