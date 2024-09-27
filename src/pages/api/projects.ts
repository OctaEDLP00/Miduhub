import { MIDU_PROJECTS_AND_COURSES } from '@/const/projects'
import type { APIContext } from 'astro'

export const GET = async (_api: APIContext) =>
  new Response(JSON.stringify(MIDU_PROJECTS_AND_COURSES))
