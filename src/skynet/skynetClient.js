import { SkynetClient } from 'skynet-js'
import isLocalhost from './isLocalhost'

const portal = isLocalhost ? 'https://siasky.net' : undefined
const client = new SkynetClient(portal)

export default client
