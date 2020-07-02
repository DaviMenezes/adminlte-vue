<script>
import ACardColor from './ACardColor'
import CardColors from '@/components/Widget/Card/Color/CardColors'

export default {
  name: 'ACardWarning',
  extends: ACardColor,
  data () {
    return {
      color_local: this.all_painted
        ? (this.gradient ? CardColors.bg_gradient_warning : CardColors.bg_warning)
        : CardColors.warning
    }
  }
}
</script>
