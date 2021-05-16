
import LoadingStore from './loading'
import NavigationStore from './navigation'
import LoginStore from './login'
import ResponseStore from './responses'

const stores: any = {
    loading: new LoadingStore(),
    navigation: new NavigationStore(),
    login: new LoginStore(),
    responses: new ResponseStore()

}

export default stores