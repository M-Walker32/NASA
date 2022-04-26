import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";
// const { api } = "./AxiosService.js";
import {api} from '../services/AxiosService.js'

const params = {
  api_key: 'JmPmsTgpuZYlfpV10xwHWvZLb0uZHVjTLpV4x6F7'
}
class ImagesService {
  async getImage(){
    const res = await api.get('', {params} )
    AppState.image = res.data
    console.log(AppState.image)
  }
}

export const imagesService = new ImagesService()