type Project = {
    title: string
    description: string
    icon: string
    link: string
    tags: string[]
}

export const projects: Project[] = [
    {
        title: 'libunix',
        description: 'Typed Unix-domain-socket IPC for Bun and Node.js, with framed messages and request/response helpers.',
        icon: 'lucide:between-horizontal-start',
        link: 'https://github.com/dark1zinn/libunix',
        tags: ['TypeScript', 'Bun', 'Node.js', 'IPC'],
    },
    {
        title: 'better-auth-scjwt',
        description: 'A session-centric JWT transport for Better Auth with database-backed session revocation.',
        icon: 'lucide:shield-check',
        link: 'https://github.com/dark1zinn/better-auth-scjwt',
        tags: ['TypeScript', 'Better Auth', 'JWT', 'Security'],
    },
    {
        title: 'runpy',
        description: 'Rust orchestration for managed Python workers that communicate over Unix domain sockets.',
        icon: 'lucide:workflow',
        link: 'https://github.com/dark1zinn/runpy',
        tags: ['Rust', 'Python', 'uv', 'IPC'],
    },
    {
        title: 'tcord',
        description: 'A focused Discord terminal client built around a Textual Python interface with Rust integration.',
        icon: 'lucide:terminal',
        link: 'https://github.com/dark1zinn/tcord',
        tags: ['Python', 'Rust', 'Textual', 'TUI'],
    },
]
