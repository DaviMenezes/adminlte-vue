<script>
import typesEnum from '../typesEnum'
import ABlockquoteColor from '../ABlockquoteColor/ABlockquoteColor'
export default {
  name: 'ABlockquoteSecondary',
  extends: ABlockquoteColor,
  methods: {
    getType: () => typesEnum.secondary
  }
}
</script>
