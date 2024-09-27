export interface ILinks {
  github_repository?: string
  web?: string
  gh_repo_private?: boolean
}

export interface Image {
  urlOgImg: string
  width?: string
  height?: string
  alt: string
}

export interface IProjects {
  project_name: string
  image: Image
  externals_links: ILinks
  [key: string]: unknown
}

export type ArrayProjects = Array<IProjects>

export interface Preload {
  as: string
  href: string
  type: string
  rel?: 'preload' | 'prefetch'
  crossorigin?: string
}

// Components Porps

export interface ICardProps {
  project_name: string
  description: string
  webUrl?: string
  ghUrl?: string
  image: Image
  ghRepoPrivate?: boolean
}

export interface IBlurredImg {
  urlOgImg: string
  width?: number
  height?: number
  alt: string
}
