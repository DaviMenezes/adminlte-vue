import CardColors from '@/components/Widget/Card/Color/CardColors'

export default {
  props: {
    /** @type CardColors
     * colors: blue, cyan, danger, dark, gray, default, fuchsia, gray_dark, green, indigo, info, light, lightblue, lime, maroon, olive, orange, outline, pink, primary, purple, red, secondary, teal, warning, white, yellow */
    color: {
      type: String,
      default: CardColors.default,
      validator: (val) => {
        return Object.values(CardColors).includes(val)
      }
    }
  }
}
