import { shallowMount } from '@vue/test-utils'
import KundeListe from '@/components/KundeListe'

describe('KundeListe.vue', () => {
  it('should render Create Kunde Button', () => {
    const wrapper = shallowMount(KundeListe)
    const contentButton = wrapper.find('table')
    expect(contentButton.text()).toEqual('Kunde Id First Name Last Name Geburtsdatum Telefonnummer Termin Edit Delete create Termin')
  })
})
