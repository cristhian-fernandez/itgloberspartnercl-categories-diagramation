export type CategoriesSchema = Array<{
    image: string
    titleCategory: string
    link?: LinkCategory
}>

export interface LinkCategory {
    url: string
    attributeNofollow?: boolean
    attributeTitle?: boolean
    openNewTab?: boolean
    newTab?: boolean
}