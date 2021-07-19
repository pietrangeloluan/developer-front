import { DeveloperType } from 'types/Developer.types'
import { HTTP } from '../providers'

export class DeveloperService extends HTTP {
  private endpoint = '/developer'

  public create({ payload }: { payload: DeveloperType }) {
    return this.post({ endpoint: this.endpoint, payload })
  }

  public deleteDeveloper({ id }) {
    return this.delete({ endpoint: `${this.endpoint}/${id}` })
  }

  public edit(developer: DeveloperType) {
    const { id } = developer
    return this.put({ endpoint: `${this.endpoint}/${id}`, payload: developer })
  }

  public fetchAll({ params = {} } = {}) {
    return this.get({ endpoint: this.endpoint, params })
  }

  public fetchOne(id) {
    return this.get({ endpoint: `${this.endpoint}/${id}` })
  }
}
