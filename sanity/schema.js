import {blockContent} from './schemas/blockContent'
import {category} from './schemas/category'
import {post} from './schemas/post'
import {author} from './schemas/author'
import { poster } from './schemas/poster'

export const schema = {
  types: [post, author, category, blockContent, poster],
}
