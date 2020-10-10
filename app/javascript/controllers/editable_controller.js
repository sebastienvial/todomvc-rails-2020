// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction

import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['item']

  showInput(event) {
    this.itemTarget.classList.add('editing')
  }
}
