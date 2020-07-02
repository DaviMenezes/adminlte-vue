<script>
import ACardColor from './ACardColor'
import CardColors from '@/components/Widget/Card/Color/CardColors'
export default {
  name: 'ACardDanger',
  extends: ACardColor,
  data () {
    return {
      color_local: this.all_painted
        ? (this.gradient ? CardColors.bg_gradient_danger : CardColors.bg_danger)
        : CardColors.danger
    }
  }
}
</script>
