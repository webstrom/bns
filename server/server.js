import {
	MguserApiLogin,
} from '@/stores/api.js'
import {service} from "@/stores/request.js"

export function ServerMguserApiLogin(pramis) {
    return service(MguserApiLogin,pramis,'GET')
}