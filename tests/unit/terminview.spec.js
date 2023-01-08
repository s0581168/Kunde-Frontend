import { mount } from '@vue/test-utils'

import TerminView from '@/views/TerminView'
import TerminListe from '@/components/TerminListe'

describe('Testing TerminView.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(TerminView)

    // then
    expect(wrapper.text()).toMatch('Termin Liste Kunde Id First Name Last Name Geburtsdatum Telefonnummer TerminDatum')
  })

  it('should have termin list component', () => {
    // when
    const wrapper = mount(TerminView)

    // then
    const kundeList = wrapper.findComponent(TerminListe)
    expect(kundeList.exists()).toBeTruthy()
  })
})
