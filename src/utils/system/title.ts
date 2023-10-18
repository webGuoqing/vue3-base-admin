import { ADMIN_TITLE } from '@/config'

export function changeTitle(name: any) {
    let title = ADMIN_TITLE
    if (name) {
        title = `${ADMIN_TITLE} - ${name}`
    }
    document.title = title
}
