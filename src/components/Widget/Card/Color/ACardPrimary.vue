<script>
import ACardColor from './ACardColor'
export default {
  extends: ACardColor,
  name: 'ACardPrimary',
  components: { ACardColor },
  props: {
    color: { default: 'primary' }
  }
}
</script>
