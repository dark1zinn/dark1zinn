export default async function () {
    const ghres = await fetch('https://api.github.com/users/dark1zinn').then(res => res.json());
    return Number(ghres.public_repos)
};
