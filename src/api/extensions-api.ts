import { httpClient } from "./httpClient"

export interface ExtensionModel {
  id: number
  img?: string
  title: string
  installed: boolean
  shortDesc: string
  longDesc: string
  companyName: string
  companyUrl: string
}

export interface ExtensionCreateModel {
  title: string
  shortDesc: string
  longDesc: string
  companyName: string
  companyUrl: string
  img: string
}

class ExtensionsApi {
  getAll(title: string = "") {
    return httpClient
      .get<ExtensionModel[]>("/extensions", {
        params: {
          ...(title && { title_like: title }),
        },
      })
      .then(r => r.data)
  }

  add(data: ExtensionCreateModel) {
    return httpClient.post<ExtensionModel>("/extensions", data)
  }

  remove(id: number) {
    return httpClient.delete(`/extensions/${id}`)
  }

  install(id: number) {
    return httpClient.patch(`/extensions/${id}`, { installed: true } as Pick<
      ExtensionModel,
      "installed"
    >)
  }

  uninstall(id: number) {
    return httpClient.patch(`/extensions/${id}`, { installed: false } as Pick<
      ExtensionModel,
      "installed"
    >)
  }
}

const extensionsApi = new ExtensionsApi()

export default extensionsApi
