import { Storage } from '@google-cloud/storage'

const storage = new Storage()

const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET ?? '')

export { storage as default, bucket }
