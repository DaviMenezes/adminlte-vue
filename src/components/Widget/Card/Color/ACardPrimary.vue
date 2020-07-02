<script>
import CardColors from '@/components/Widget/Card/Color/CardColors'
import ACardColor from './ACardColor'
export default {
  extends: ACardColor,
  name: 'ACardPrimary',
  components: { ACardColor },
  data () {
    return {
      color_local: this.all_painted
        ? (this.gradient ? CardColors.bg_gradient_primary : CardColors.bg_primary)
        : CardColors.primary
    }
  }
}
</script>
