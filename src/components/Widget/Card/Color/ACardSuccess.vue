<script>
import ACardColor from './ACardColor'
import CardColors from '@/components/Widget/Card/Color/CardColors'
export default {
  extends: ACardColor,
  name: 'ACardSuccess',
  data () {
    return {
      color_local: this.all_painted
        ? (this.gradient ? CardColors.bg_gradient_success : CardColors.bg_success)
        : CardColors.success
    }
  }
}
</script>
