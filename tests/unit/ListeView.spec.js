import { mount } from '@vue/test-utils'
import ListeView from '@/views/ListeView'
import KundeListe from '@/components/KundeListe'
import KundeCreate from '@/components/KundeCreate'

describe('Testing ListeView.vue', () => {
  it('should show page title', () => {
  //  fetch.mockResponseOnce(JSON.stringify(kunde))
    // when
    const wrapper = mount(ListeView)

    // then
    expect(wrapper.text()).toMatch('')
  })

  it('should have Kunde list component', () => {
    // when
    const wrapper = mount(ListeView)

    // then
    const kundeList = wrapper.findComponent(KundeListe)
    expect(kundeList.exists()).toBeTruthy()
  })

  it('should have kunde create form component', () => {
    // when
    const wrapper = mount(ListeView)

    // then
    const createForm = wrapper.findComponent(KundeCreate)
    expect(createForm.exists()).toBeTruthy()
  })
})
