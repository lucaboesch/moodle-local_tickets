export const init = () => {
    document.querySelector('#id_status').addEventListener('change', e => {
        // document.querySelector('.settingsform').classList.add('block_openai_chat')
        // document.querySelector('.settingsform').classList.add('disabled')
        document.querySelector('form button[type="submit"]').click()
    })
}