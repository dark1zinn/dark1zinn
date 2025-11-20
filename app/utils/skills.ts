type Skill = {
    name: string;
    icon: string;
    color: string;
};

export const items = [
    {
        label: 'Daily Drivers',
        icon: 'i-lucide-flame',
        slot: 'daily-drivers',
        description: 'My go-to technologies for building robust applications.',
    },
    {
        label: 'Familiar With',
        icon: 'i-lucide-wrench',
        slot: 'familiar-with',
        description: 'Tools I have experience with and can use effectively.',
    },
    {
        label: 'Explored',
        icon: 'i-lucide-flask-conical',
        slot: 'explored',
        description:
            'Technologies I have experimented with or used in the past.',
    },
];

export const dailyDrivers: Skill[] = [
    {
        name: 'TypeScript',
        icon: 'i-simple-icons-typescript',
        color: 'text-blue-500',
    },
    {
        name: 'JavaScript',
        icon: 'i-simple-icons-javascript',
        color: 'text-yellow-400',
    },
    {
        name: 'Bun',
        icon: 'i-simple-icons-bun',
        color: 'text-neutral-900 dark:text-white',
    },
    {
        name: 'Node.js',
        icon: 'i-simple-icons-nodedotjs',
        color: 'text-green-500',
    },
    { name: 'NPM', icon: 'i-simple-icons-npm', color: 'text-red-500' },
    { name: 'Git', icon: 'i-simple-icons-git', color: 'text-orange-500' },
    {
        name: 'GitHub',
        icon: 'i-simple-icons-github',
        color: 'text-neutral-900 dark:text-white',
    },
    {
        name: 'VS Code',
        icon: 'i-simple-icons-visualstudiocode',
        color: 'text-blue-500',
    },
    // { name: 'Discord', icon: 'i-simple-icons-discord', color: 'text-indigo-500' },
];

export const familiarWith: Skill[] = [
    { name: 'React', icon: 'i-simple-icons-react', color: 'text-cyan-400' },
    { name: 'NestJS', icon: 'i-simple-icons-nestjs', color: 'text-red-600' },
    { name: 'Docker', icon: 'i-simple-icons-docker', color: 'text-blue-500' },
    // { name: 'Jest', icon: 'i-simple-icons-jest', color: 'text-red-700' },
    // { name: 'Vite', icon: 'i-simple-icons-vite', color: 'text-purple-500' },
    {
        name: 'Prisma',
        icon: 'i-simple-icons-prisma',
        color: 'text-neutral-900 dark:text-white',
    },
    {
        name: 'Tailwind',
        icon: 'i-simple-icons-tailwindcss',
        color: 'text-cyan-400',
    },
    { name: 'SASS', icon: 'i-simple-icons-sass', color: 'text-pink-500' },
    {
        name: 'Markdown',
        icon: 'i-simple-icons-markdown',
        color: 'text-neutral-900 dark:text-white',
    },
];

export const explored: Skill[] = [
    { name: 'Python', icon: 'i-simple-icons-python', color: 'text-blue-500' },
    { name: 'Java', icon: 'i-simple-icons-openjdk', color: 'text-red-500' },
    { name: 'C', icon: 'i-simple-icons-c', color: 'text-blue-600' },
    {
        name: 'Electron',
        icon: 'i-simple-icons-electron',
        color: 'text-blue-400',
    },
    {
        name: 'Postgres',
        icon: 'i-simple-icons-postgresql',
        color: 'text-blue-400',
    },
    {
        name: 'Cloudflare',
        icon: 'i-simple-icons-cloudflare',
        color: 'text-orange-500',
    },
    { name: 'Nginx', icon: 'i-simple-icons-nginx', color: 'text-green-600' },
    { name: 'GCP', icon: 'i-simple-icons-googlecloud', color: 'text-blue-500' },
    // { name: 'Figma', icon: 'i-simple-icons-figma', color: 'text-purple-500' },
    // { name: 'Blender', icon: 'i-simple-icons-blender', color: 'text-orange-500' },
];
