import { mount, shallowMount } from '@vue/test-utils'
import KundeCreate from '@/components/KundeCreate'

describe('Testing KundeCreate.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(KundeCreate)

    // then
    expect(wrapper.find('#kunde-create-offcanvas').classes()).not.toContain('show')
  })
})

describe('KundeCreate.vue', () => {
  it('should render Create Kunde Button', () => {
    const wrapper = shallowMount(KundeCreate)
    const contentButton = wrapper.find('button')
    expect(contentButton.text()).toEqual('neu Kunde anlegen')
  })
})
