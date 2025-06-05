type Project = {
  name: string
  description: string
  link: string
  video: string
  image: string
  id: string
}

type Service = {
  name: string
  description: string
  link: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Hotlist',
    description:
      '愛用品を簡単に記録・整理・共有できるWebサービスです。',
    link: 'https://hotlist.social/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    image:
      '/hotlist_logo.jpg',
    id: 'project1',
  },
]

export const SERVICES: Service[] = [
  {
    name: '技術顧問',
    description: 'Web制作に関する技術的な課題や不安を解消し、プロジェクト成功を支援します',
    link: 'https://web-partner-lp.vercel.app/',
    id: 'service1',
  },
  // {
  //   name: 'AI駆動開発サービス',
  //   description: '最新のAIツールを活用して効率的かつ高品質なWebサイトを制作します。',
  //   link: '/ai-driven-development',
  //   id: 'service2',
  // },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'X',
    link: 'https://twitter.com/kubogen_',
  },
  {
    label: 'Github',
    link: 'https://github.com/bokuhakubo',
  },
]

export const FORM_URL = 'https://tally.so/r/mJxo64'
