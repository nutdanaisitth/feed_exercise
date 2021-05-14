
import LoadingStore from './loading'
import NavigationStore from './navigation'
import LoginStore from './login'

const stores: any = {
    loading: new LoadingStore(),
    navigation: new NavigationStore(),
    login: new LoginStore()

}

export default stores