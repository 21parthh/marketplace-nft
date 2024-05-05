// ./src/utils/sanity/client.ts
import {createClient} from 'next-sanity'

const projectId = "2sssdbnr" // "pv8y60vp"
const dataset = "production"
const token = "skAAODHelVPtb8i1SoMInk2PERgcEXFinQ5ephG82aPIvRqyuCjlGrOAUV6RqIWlxyIKMrZANq5gy771aE7dRScXFrNhnAQm4VxrgcR19DObVpfgFu9UmeqLXoayQoZuiBkHJWZfFAbxWEN55tocZgMheFvkLgcCkKxRYFxybdOWCQkWwAf9"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'

export const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})