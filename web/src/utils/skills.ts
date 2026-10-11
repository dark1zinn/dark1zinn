import { toIconifyName } from '@/utils/icon'

type Skill = {
    name: string
    icon: string
    color: string
}

const icon = (name: string) => toIconifyName(name)


export const dailyDrivers: Skill[] = [
    {
        name: 'TypeScript',
        icon: icon('i-simple-icons-typescript'),
        color: 'text-blue-500',
    },
    {
        name: 'Python',
        icon: icon('i-simple-icons-python'),
        color: 'text-blue-500',
    },
    {
        name: 'Rust',
        icon: icon('i-simple-icons-rust'),
        color: 'text-orange-600',
    },
    {
        name: 'OMP',
        icon: icon('i-lucide-bot'),
        color: 'text-primary-600 dark:text-primary-300',
    },
    {
        name: 'Bun',
        icon: icon('i-simple-icons-bun'),
        color: 'text-neutral-900 dark:text-white',
    },
    {
        name: 'Node.js',
        icon: icon('i-simple-icons-nodedotjs'),
        color: 'text-green-500',
    },
    { name: 'NPM', icon: icon('i-simple-icons-npm'), color: 'text-red-500' },
    { name: 'Git', icon: icon('i-simple-icons-git'), color: 'text-orange-500' },
]

export const familiarWith: Skill[] = [
    { name: 'React', icon: icon('i-simple-icons-react'), color: 'text-cyan-400' },
    {
        name: 'Vue.js',
        icon: icon('i-simple-icons-vuedotjs'),
        color: 'text-green-500',
    },
    { name: 'NestJS', icon: icon('i-simple-icons-nestjs'), color: 'text-red-600' },
    { name: 'Docker', icon: icon('i-simple-icons-docker'), color: 'text-blue-500' },
    {
        name: 'Prisma',
        icon: icon('i-simple-icons-prisma'),
        color: 'text-neutral-900 dark:text-white',
    },
    {
        name: 'Drizzle ORM',
        icon: icon('i-simple-icons-drizzle'),
        color: 'text-lime-500',
    },
    {
        name: 'PostgreSQL',
        icon: icon('i-simple-icons-postgresql'),
        color: 'text-blue-400',
    },
    {
        name: 'Cloudflare',
        icon: icon('i-simple-icons-cloudflare'),
        color: 'text-orange-500',
    },
    {
        name: 'Railway',
        icon: icon('i-simple-icons-railway'),
        color: 'text-neutral-900 dark:text-white',
    },
    {
        name: 'Tailwind',
        icon: icon('i-simple-icons-tailwindcss'),
        color: 'text-cyan-400',
    },
]

export const explored: Skill[] = [
    { name: 'Java', icon: icon('i-simple-icons-openjdk'), color: 'text-red-500' },
    { name: 'C', icon: icon('i-simple-icons-c'), color: 'text-blue-600' },
    {
        name: 'Electron',
        icon: icon('i-simple-icons-electron'),
        color: 'text-blue-400',
    },
    { name: 'Nginx', icon: icon('i-simple-icons-nginx'), color: 'text-green-600' },
    { name: 'GCP', icon: icon('i-simple-icons-googlecloud'), color: 'text-blue-500' },
    {
        name: 'Flutter',
        icon: icon('i-simple-icons-flutter'),
        color: 'text-blue-400',
    },
    { name: 'Dart', icon: icon('i-simple-icons-dart'), color: 'text-blue-500' },
    { name: 'Lua', icon: icon('i-simple-icons-lua'), color: 'text-blue-700' },
    {
        name: 'Tauri',
        icon: icon('i-simple-icons-tauri'),
        color: 'text-orange-500',
    },
]
