import Api from '@/services/Api'

export default {
  index () {
    return Api().get('blogcars')
  },
  show (blogcarId) {
    return Api().get('blogcar/'+blogcarId)
  },
  post (blogcar) {
    return Api().post('blogcar',blogcar)
  },
  put (blogcar) {
    return Api().put('blogcar/'+blogcar.id, blogcar)
  },
  delete (blogcar) {
    return Api().delete('blogcar/'+blogcar.id, blogcar)
  }
}